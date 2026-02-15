/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

const pathNames = new Map([
  ["personal", "/personal.json"],
  ["projects", "/projects.json"],
  ["services", "/services.json"],
  ["skills", "/skills.json"],
  ["iconMap", "/iconMap.json"],
  ["blogs", "/blogs.json"],
]);

export async function GET(request: NextRequest) {
  try {
    let data;
    const searchParams = request.nextUrl.searchParams;
    const section = searchParams.get("section");
    const jsonDirectory = path.join(process.cwd(), "src/data");

    if (section) {
      const pathName = pathNames.get(section);
      if (pathName) {
        console.log(jsonDirectory + pathName);
        const fileContents = await fs.readFile(
          jsonDirectory + pathName,
          "utf8"
        );
        data = JSON.parse(fileContents);
      }
    } else {
      const result: any[] = [];
      pathNames.values().forEach((pathName) => {
        result.push(fs.readFile(jsonDirectory + pathName, "utf8"));
      });
      data = await Promise.all(result);
      data = pathNames.keys().map((section, index) => {
        return { [section]: result[index] };
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to load projects data" },
      { status: 500 }
    );
  }
}
