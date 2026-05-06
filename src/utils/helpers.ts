import { BlogMetaData } from "@/types/blogs";

/**
 * Abstract class representing a blog metadata fetcher.
 * It defines the structure for fetching metadata from different blogging platforms.
 * Each platform-specific fetcher (e.g., Medium, Dev.to) will extend this class and implement the fetchMetadata method to retrieve the title, description, preview image, and published date of a blog post given its URL.
 * This design allows for easy extension to support multiple blogging platforms by simply creating new fetcher classes that implement the abstract method.
 * @abstract
 * @param url The URL of the blog post for which to fetch metadata
 * @returns An object containing the url, title, description, preview image URL, and published date of the blog post
 * @throws Will throw an error if there is an issue fetching or parsing the metadata
 * @example
 *     const metadata = await fetchMetadata("https://medium.com/@username/blog-post-url");
 */
abstract class FetchBlogMetaData {
  abstract fetchBlogMetaData(url: string): Promise<BlogMetaData>;
}

/**
 * Fetches metadata for a Medium blog post given its URL.
 * It appends ?format=json to the URL to get the JSON response from Medium, which contains the metadata.
 * The response is sanitized to remove the anti-JSON-hijacking prefix before parsing.
 * @param url The URL of the Medium blog post for which to fetch metadata
 * @returns An object containing the title, description, preview image URL, and published date of the blog post
 * @throws Will throw an error if there is an issue fetching or parsing the metadata
 * @example
 *      const mediumFetcher = new MediumBlogMetadataFetcher();
 *      const metadata = await mediumFetcher.fetchMetadata("https://medium.com/@username/blog-post-url");
 * @extends FetchBlogMetaData
 */

class MediumBlogMetadataFetcher extends FetchBlogMetaData {
  async fetchBlogMetaData(url: string): Promise<BlogMetaData> {
    try {
      const parsedUrl = new URL(url); // Ensure the URL is valid and parsed
      // Append ?format=json to the URL for Medium blogs
      parsedUrl.searchParams.append("format", "json");
      console.log("url", parsedUrl);
      const response = await fetch(parsedUrl.toString(), {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          Referer: "https://medium.com/",
        },
      });

      // Check we actually got JSON before parsing
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const jsonResponse = await response.text();

      // Guard: if Cloudflare returned HTML, fail fast with a clear message
      if (jsonResponse.trimStart().startsWith("<")) {
        throw new Error(
          "Received HTML instead of JSON — likely blocked by Cloudflare"
        );
      }

      // Medium prefixes its JSON with this string to prevent hijacking
      const sanitizedResponse = jsonResponse.replace(
        /^\]\)\}while\(1\);<\/x>/,
        ""
      );
      const data = JSON.parse(sanitizedResponse);
      console.log(data);

      // Extract metadata from the JSON response
      const title = data.payload.value.title || "No title available";
      const description =
        data.payload.value.content.subtitle || "No description available";
      const previewImage = data.payload.value.virtuals.previewImage.imageId
        ? `https://miro.medium.com/fit/c/1200/630/${data.payload.value.virtuals.previewImage.imageId}`
        : "No preview image available";
      const publishedDate = data.payload.value.firstPublishedAt
        ? new Date(data.payload.value.firstPublishedAt).toISOString()
        : "No date available";

      console.log("Fetched metadata for URL:", url, {
        title,
        description,
        previewImage,
        publishedDate,
      });

      return { url, title, description, previewImage, publishedDate };
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        throw new Error(
          `Error fetching blog metadata for URL ${url}: ${error.message}`
        );
      } else {
        throw new Error(
          `Error fetching blog metadata for URL ${url}: ${String(error)}`
        );
      }
    }
  }
}

/**
 * Factory class to create appropriate BlogMetadataFetcher based on the platform    
 * Currently supports Medium. 
 * Can be extended to support other platforms like Dev.to, Hashnode, etc. by adding new fetcher classes and updating the factory method.
 * @param platform The blogging platform for which to create the metadata fetcher (e.g., "medium")
 * @returns An instance of BlogMetadataFetcher for the specified platform
 * @throws Will throw an error if the specified platform is not supported or if there is an issue fetching the metadata.
 * @example 
 *     const fetcher = BlogMetadataFetcher.create("medium");
 *     const metadata = await fetcher.fetchMetadata("https://medium.com/@username/blog-post-url");

 */
export class BlogMetadataFetcher {
  create(platform: string): FetchBlogMetaData {
    switch (platform.toLowerCase()) {
      case "medium":
        return new MediumBlogMetadataFetcher();
      default:
        throw new Error(`No fetcher available for platform: ${platform}`);
    }
  }
}
