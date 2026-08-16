declare class ApiError extends Error {
    status: number;
    constructor(message: string | undefined, status: number);
}
declare function fetchApi(endpoint: string, options?: {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
}): Promise<any>;

export { ApiError, fetchApi };
