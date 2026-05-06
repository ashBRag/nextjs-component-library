import { BlogMetadataFetcher } from "@/utils/helpers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { blogUrls }: { blogUrls: { url: string }[] } = await request.json();

    const metadata = new BlogMetadataFetcher().create("medium");

    const metadataList = await Promise.all(
      blogUrls.map(async ({ url }: { url: string }) => {
        return await metadata.fetchBlogMetaData(url);
      })
    );

    return NextResponse.json(metadataList);
  } catch (error) {
    console.error("Error fetching blog metadata:", error);
    throw error;
  }
}
