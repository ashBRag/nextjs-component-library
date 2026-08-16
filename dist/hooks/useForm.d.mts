import { UseFormConfig, UseFormReturn } from '../types/form.mjs';

declare const useForm: <T extends Record<string, any>>(config: UseFormConfig<T>) => UseFormReturn<T>;

export { useForm };
