import { Link } from "react-router-dom";
import DateFromNow from "../utils/formatDate";
import useDeletePost from "../hooks/useDeletePost";

type props = {
    post: Post
}

export default function UserPostCard({ post }: props) {
    const { deletePost, isLoading, error } = useDeletePost(post._id)

    const handleDelete = async () => {
        await deletePost()
    }

    return (
        <div className="card-flat mb-5 relative">
            <h4 className="">{post.title}</h4>
            <p className="text-gray-700">{post.body}</p>
            <div className="flex justify-between items-center">
                <span className="date-title text-sm">{DateFromNow(post.createdAt)}</span>
                <Link to={"/post/" + post._id} className="btn-text-primary">
                    {post.comments.length ? post.comments.length : 'No'} Comment{post.comments.length > 1 ? 's' : ''}
                </Link>
            </div>
            <button className="delete-action" disabled={isLoading} onClick={handleDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
            </button>
            {error && <p className="mt-5 text-sm text-red-500">{error}</p>}
        </div>
    )
}
