import { useState } from "react";
import useAuthContext from "./useAuthContext";
import useUserPostContext from "./useUserPostContext";

export default function useDeletePost(id : string) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const { user } = useAuthContext()
    const { dispatch } = useUserPostContext()

    const deletePost = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:4000/api/posts/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${user?.token}`
                }
            })

            // validation errors
            if(!response.ok && response.status === 400) {
                const validation = await response.json()
                throw Error(validation.error)
            }

            // other errors
            if (!response.ok) {
                throw Error("Post deleting has failed !")
            }

            if (response.ok) {
                // retrieve the post
                const json : Post = await response.json()
                // refrech the post context
                dispatch({type: 'DELETE_POST', payload: json})
                
                return json
            }

        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    return { deletePost, isLoading, error }
}
