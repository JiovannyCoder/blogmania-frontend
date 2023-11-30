import { createContext, useReducer } from 'react'

// auth context
export const UserPostContext = createContext({} as UserPostContextType)

// auth reducer function
const UserPostReducer = (state: UserPostState, action: UserPostAction) => {
    switch (action.type) {
        case "SET_POSTS":
            return { posts: action.payload as Post[] }
        case "STORE_POST":
            return { posts: [action.payload as Post, ...state.posts as Post[]] }
        case "DELETE_POST":
            const deletePost = action.payload as Post
            return { posts: state.posts?.filter(p => p._id !== deletePost._id) as Post[] }
        default:
            return state
    }
}

// auth provider
export function UserPostContextProvider({ children }: UserPostProviderProps) {
    const [state, dispatch] = useReducer(UserPostReducer, {
        posts: null
    })

    return (
        <UserPostContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserPostContext.Provider>
    )
}