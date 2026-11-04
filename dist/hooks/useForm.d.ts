import { UseFormConfig, UseFormReturn } from "../types/form.ts";
export declare const useForm: <T extends Record<string, any>>(config: UseFormConfig<T>) => UseFormReturn<T>;
