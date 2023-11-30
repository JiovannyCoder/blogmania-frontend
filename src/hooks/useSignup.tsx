import { useState } from "react";
import useAuthContext from "./useAuthContext";


export default function useSignup() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const { dispatch } = useAuthContext()

    const signup = async (email: string, password: string, firstname: string, lastname: string) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('http://localhost:4000/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, firstname, lastname })
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

    return { signup, isLoading, error }
}
