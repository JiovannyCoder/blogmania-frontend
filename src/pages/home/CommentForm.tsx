import { SetStateAction, SyntheticEvent, useState } from "react"
import useStoreComment from "../../hooks/useStoreComment"

type props = {
    mutatePost: React.Dispatch<SetStateAction<PostDetails | null>>,
    post: PostDetails
}

export default function CommentForm({ post, mutatePost }: props) {
    const [content, setContent] = useState('')
    const { storeComment, isLoading, error } = useStoreComment(post._id)

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        
        const newComment = await storeComment(content)

        if(newComment) {
            // refrech comments
            mutatePost({...post, comments: [...post.comments, newComment]})
            
            // reset form
            setContent('')
        }
    }

    return (
        <form onSubmit={handleSubmit} id="comment-form">
            <h3 className="text-gray-500">Let a comment ?</h3>
            <textarea
                rows={3}
                onChange={e => setContent(e.target.value)}
                value={content}
            ></textarea>
            <button className="btn-primary" disabled={isLoading} type="submit">
                {isLoading ? 'Commenting...' : 'Comment the post'}
            </button>
            {error && <div className="mt-5 alert-error">{error}</div>}
        </form>
    )
}
