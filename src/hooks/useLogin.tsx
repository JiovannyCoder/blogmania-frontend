import { useState } from "react";
import useAuthContext from "./useAuthContext";


export default function useLogin() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const { dispatch } = useAuthContext()

    const login = async (email: string, password: string) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:4000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            // validation errors
            if(!response.ok && response.status === 400) {
                const validation = await response.json()
                throw Error(validation.error)
            }

            // other errors
            if (!response.ok) {
                throw Error("Connexion failed !")
            }

            if (response.ok) {
                // retrieve the response
                const json = await response.json()

                // update the authContext
                dispatch({ type: 'LOGIN', payload: json })

                // save the user in the storage
                localStorage.setItem('user', JSON.stringify(json))
            }

        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    return { login, isLoading, error }
}
