import { useState } from "react";
import useAuthContext from "./useAuthContext";
import useUserPostContext from "./useUserPostContext";

export default function useStorePost() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const { user } = useAuthContext()
    const { dispatch } = useUserPostContext()

    const storePost = async (title: string, body: string) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:4000/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${user?.token}`
                },
                body: JSON.stringify({ title, body })
            })

            // validation errors
            if(!response.ok && response.status === 400) {
                const validation = await response.json()
                throw Error(validation.error)
            }

            // other errors
            if (!response.ok) {
                throw Error("Post storing has failed !")
            }

            if (response.ok) {
                // retrieve the post
                const json : Post = await response.json()
                // refrech the page
                dispatch({type: "STORE_POST", payload: json})
                
                return json
            }

        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    return { storePost, isLoading, error }
}
