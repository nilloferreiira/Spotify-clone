import { useParams } from "next/navigation"

export function useGetId() {
    const params = useParams() 
    let id = Number(params.id)

    return {id}
}