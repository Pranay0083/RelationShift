import {
    MutationFunction,
    MutationKey,
    useMutation,
    useMutationState,
    useQueryClient,
} from '@tanstack/react-query'
import { toast } from 'sonner'

export const useMutationData = (
    mutationKey: MutationKey,
    mutationFn: MutationFunction<any, any>,
    queryKey?: string,
    onSuccess?: () => void
) => {
    const client = useQueryClient()
    const { mutate, isPending } = useMutation({
        mutationKey,
        mutationFn,
        onSuccess: (data) => {
            if (data?.status === 200) {
                toast.success(data.data || "Operation successful")
            } else {
                toast.error(data.data || "An error occurred")
            }
            
            if (onSuccess) {
                onSuccess()
            }
        },
        onSettled: async () => {
            return client.invalidateQueries({ queryKey: [queryKey] })
        }
    })

    return { mutate, isPending }
}

export const useMutationDataState = (mutationKey: MutationKey) => {
    const data = useMutationState({
        filters: { mutationKey },
        select: (mutation) => ({
            variables: mutation.state.variables as any,
            status: mutation.state.status,
        })
    })
    const latestVariable = data[data.length - 1]
    return { latestVariable }
}