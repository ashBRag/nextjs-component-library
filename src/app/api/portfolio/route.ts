/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { logger as baseLogger } from "@/utils/logger";

const logger = baseLogger.child({ module: "data-api" });

const pathNames = new Map([
  ["personal", "/personal.json"],
  ["projects", "/projects.json"],
  ["services", "/services.json"],
  ["skills", "/skills.json"],
  ["iconMap", "/iconMap.json"],
  ["blogs", "/blogs.json"],
]);

export async function GET(request: NextRequest) {
  const requestId =
    request.headers.get("x-request-id") ??
    request.headers.get("x-vercel-id") ??
    crypto.randomUUID();
  const reqLogger = logger.child({ requestId });

  const searchParams = request.nextUrl.searchParams;
  const section = searchParams.get("section");

  reqLogger.info({ section: section ?? "all" }, "Data fetch request received");

  try {
    const jsonDirectory = path.join(process.cwd(), "src/data");
    let data;

    if (section) {
      const pathName = pathNames.get(section);

      if (!pathName) {
        reqLogger.warn({ section }, "Requested section not found");
        return NextResponse.json({ error: "Invalid section" }, { status: 404 });
      }

      const filePath = jsonDirectory + pathName;
      reqLogger.info({ section, filePath }, "Reading single section file");
      const fileContents = await fs.readFile(filePath, "utf8");
      data = JSON.parse(fileContents);
      reqLogger.info({ section }, "Section data loaded successfully");
    } else {
      reqLogger.info(
        { sections: [...pathNames.keys()] },
        "Reading all section files"
      );

      const result: any[] = [];
      pathNames.values().forEach((pathName) => {
        result.push(fs.readFile(jsonDirectory + pathName, "utf8"));
      });
      data = await Promise.all(result);
      data = pathNames.keys().map((section, index) => {
        return { [section]: result[index] };
      });

      reqLogger.info(
        { count: [...pathNames.keys()].length },
        "All sections loaded successfully"
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    reqLogger.error(
      { err: error, section: section ?? "all" },
      "Failed to load data"
    );
    return NextResponse.json(
      { error: "Failed to load projects data", requestId },
      { status: 500 }
    );
  }
}
