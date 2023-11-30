import { Link, useParams } from "react-router-dom"
import CommentCard from "../../components/CommentCard"
import useAuthContext from "../../hooks/useAuthContext"
import usePostDetails from "../../hooks/usePostDetails"
import DateFromNow from "../../utils/formatDate"
import CommentForm from "./CommentForm"

export default function PostDetails() {
    const { id } = useParams()
    const { user } = useAuthContext()
    const { post, isLoading, error, mutatePost } = usePostDetails(id as string)

    if (isLoading) return <p>Loading post details ...</p>

    if (error) return <div className="alert-error mt-5">{error}</div>

    if (!post) return <div className="alert-error mt-5">Post not found</div>

    return (
        <div>
            <h3 className="text-gray-500">Post details</h3>
            <div className="card-flat mb-5">
                <h2>{post.title}</h2>
                <h5>{post.user.firstname + ' ' + post.user.lastname} - <span className="date-title">{ DateFromNow(post.createdAt)}</span></h5>
                <p className="text-gray-700 text-justify">{post.body}</p>
            </div>

            {post.comments.length > 0 && (
                <div>
                    <h3 className="text-gray-500">Post comments</h3>
                    {post.comments.map(comment => <CommentCard comment={comment} />)}
                </div>
            )}

            {user && <CommentForm post={post} mutatePost={mutatePost} />}

            <div className="mt-8">
                <Link to="/" className="link-primary">{'<-'} Return to all posts</Link>
            </div>
        </div>

    )
}
