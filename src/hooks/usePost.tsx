import { useEffect, useState } from "react";

export default function usePosts() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const [posts, setPosts] = useState<Post[] | null>(null)

    const fetchPosts = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:4000/api/posts', {
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
                const json: Post[] = await response.json()
                // get the info
                setPosts(json)
            }
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return { posts, isLoading, error }
}
