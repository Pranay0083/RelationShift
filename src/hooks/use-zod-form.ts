import { MutationCache, UseMutateFunction } from "@tanstack/react-query";
import { z, ZodSchema } from "zod";
import { useForm } from "react-hook-form";

function zodResolver(schema: z.ZodType<any, z.ZodTypeDef, any>) {
    throw new Error("Function not implemented.");
}

const useZodForm = (
    schema: ZodSchema,
    mutation: UseMutateFunction,
    defaultValues?: any
) => {
    const { } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            ...defaultValues,
        },
    });

    const onFormSubmit = handleSubmit(async (values) => mutation({ ...values }))

    return {
        register,
        errors,
        onFormSubmit,
        watch,
        reset,
    }
}

export default useZodForm;

