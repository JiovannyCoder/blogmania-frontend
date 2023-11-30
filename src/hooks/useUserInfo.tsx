import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";

type userData = {
    _id: string,
    firstname: string,
    lastname: string,
    email: string
}

export default function useUserInfo() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const [userInfo, setUserInfo] = useState<userData|null>(null)

    const { user } = useAuthContext()

    const fetchUserInfo = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:4000/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${user?.token}`
                }
            })

            // other errors
            if (!response.ok) {
                throw Error("Fecthing user failed !")
            }

            if (response.ok) {
                // retrieve the response
                const json : userData = await response.json()
                // get the info
                setUserInfo(json)
            }
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        fetchUserInfo()
    }, [])

    return { userInfo, isLoading, error }
}
