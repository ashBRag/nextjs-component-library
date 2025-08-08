/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export class ApiError extends Error {
  status: number;
  constructor(message: string | undefined, status: number) {
    super(message);
    this.status = status;
  }
}

async function fetchApi(
  endpoint: string,
  options = { method: "", headers: {}, body: {} },
) {
  const url = `${API_BASE_URL}/api${endpoint}`;
  console.log("url", url);
  try {
    const response = await fetch(url, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options.body,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.error || `HTTP error! status: ${response.status}`,
        response.status,
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

// All data
export const getAllData = () => fetchApi("/portfolio");

// particular section data
export const getSectionData = (sectionName: string) =>
  fetchApi("/portfolio?section=" + sectionName);

// Contact form submission
export const submitContactForm = (formData: any) =>
  fetchApi("/contact", {
    method: "POST", //import GitContributions from '../components/pages/git-contributions';

    headers: {},
    body: JSON.stringify(formData),
  });
