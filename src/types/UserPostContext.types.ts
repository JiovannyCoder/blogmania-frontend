
type UserPostContextType = {
    posts: null | Post[],
    dispatch: React.Dispatch<UserPostAction>
}

type UserPostProviderProps = {
    children: React.ReactNode
}

type UserPostState = {
    posts: null | Post[]
}

type UserPostActionType = 'SET_POSTS' | 'STORE_POST' | 'DELETE_POST'

type SetPostAction = {
    type: UserPostActionType,
    payload: Post[]
}

type StorePostAction = {
    type: UserPostActionType,
    payload: Post
}

type DeletePostAction = {
    type: UserPostActionType,
    payload: Post
}

type UserPostAction = SetPostAction | StorePostAction | DeletePostAction