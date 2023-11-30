type Post = {
    _id: string,
    title: string,
    body: string,
    comments: [],
    user: {
        _id: string,
        firstname: string,
        lastname: string
    },
    createdAt: string,
    updatedAt: string
}

type PostDetails = {
    _id: string,
    title: string,
    body: string,
    comments: [
        {
            content: string,
            user: {
                _id: string,
                firstname: string,
                lastname: string
            },
            createdAt: string
        }
    ],
    user: {
        _id: string,
        firstname: string,
        lastname: string
    },
    createdAt: string,
    updatedAt: string
}

type PostComment = {
    content: string,
    user: {
        _id: string,
        firstname: string,
        lastname: string
    },
    createdAt: string
}