import { useState } from "react";
import useAuthContext from "./useAuthContext";

export default function useStoreComment(id : string) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const { user } = useAuthContext()

    const storeComment = async (content : string) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:4000/api/posts/comment/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${user?.token}`
                },
                body: JSON.stringify({ content })
            })

            // validation errors
            if(!response.ok && response.status === 400) {
                const validation = await response.json()
                throw Error(validation.error)
            }

            // other errors
            if (!response.ok) {
                throw Error("Comment storing has failed !")
            }

            if (response.ok) {
                // retrieve the post
                const json : PostComment = await response.json()
                // refrech the page
                
                
                return json
            }

        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    return { storeComment, isLoading, error }
}
