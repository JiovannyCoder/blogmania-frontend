import { useEffect, useState } from "react";

export default function usePostDetails(id : string) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const [post, setPost] = useState<PostDetails | null>(null)

    const fetchPostDetails = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:4000/api/posts/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            // other errors
            if (!response.ok) {
                throw Error("Fecthing the posts has failed !")
            }

            if (response.ok) {
                // retrieve the response
                const json: PostDetails = await response.json()
                // get the info
                setPost(json)
            }
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        fetchPostDetails()
    }, [])

    return { post, isLoading, error, mutatePost: setPost }
}
