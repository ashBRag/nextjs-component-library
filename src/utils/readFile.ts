import { promises as fs } from "fs";
import path from "path";

export async function readFileContent(fileName: string): Promise<string> {
  try {
    const filePath = path.join(__dirname, "..", "data", fileName);
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error reading file ${fileName}:`, error);
    throw error;
  }
}
