import { useEffect, useState } from "react"
import useUserPostContext from "./useUserPostContext"
import useAuthContext from "./useAuthContext"

export default function useUserPost() {
    const { posts, dispatch } = useUserPostContext()

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const { user } = useAuthContext()

    const fetchUserPosts = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:4000/api/user/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${user?.token}`
                }
            })

            // other errors
            if (!response.ok) {
                throw Error("Fecthing the posts has failed !")
            }

            if (response.ok) {
                // retrieve the response
                const json: Post[] = await response.json()
                // get the info
                dispatch({ type: "SET_POSTS", payload: json })
            }
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        // always verify the user
        if (user) {
            fetchUserPosts()
        }
    }, [dispatch, setIsLoading, setError, user])


    return { posts, isLoading, error }
}
