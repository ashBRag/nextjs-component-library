import {
  __spreadValues
} from "../chunk-FJBZBVPE.mjs";
class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
async function fetchApi(endpoint, options = {}) {
  const url = `${process.env.NEXT_PUBLIC_API_URL || ""}/api${endpoint}`;
  console.log("url", url);
  try {
    const requestOptions = {
      method: options.method || "GET",
      headers: __spreadValues({
        "Content-Type": "application/json"
      }, options.headers)
    };
    if (options.body && options.method !== "GET") {
      requestOptions.body = typeof options.body === "string" ? options.body : JSON.stringify(options.body);
    }
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.error || `HTTP error! status: ${response.status}`,
        response.status
      );
    }
    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError("Network error occurred", 500);
  }
}
export {
  ApiError,
  fetchApi
};
//# sourceMappingURL=api.mjs.map