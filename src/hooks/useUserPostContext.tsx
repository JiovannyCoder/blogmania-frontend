import { useContext } from 'react'
import { UserPostContext } from '../context/UserPostContext'


export default function useUserPostContext() {
    const context = useContext(UserPostContext)

    if(!context) {
        throw Error("useUserPostContext hook must be used in a useUserPostContextProvider")
    }
    return context
}
