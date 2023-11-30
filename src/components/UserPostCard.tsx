import { Link } from "react-router-dom";
import DateFromNow from "../utils/formatDate";

type props = {
    post: Post
}

export default function UserPostCard({post} : props) {
    return (
        <div className="card-flat mb-5">
            <h4 className="">{post.title}</h4>
            <p className="text-gray-700">{post.body}</p>
            <div className="flex justify-between items-center">
            <span className="date-title text-sm">{DateFromNow(post.createdAt)}</span>
                <Link to={"/post/" + post._id} className="btn-text-primary">
                    { post.comments.length ? post.comments.length : 'No' } Comment{post.comments.length > 1 ? 's' : ''}
                </Link>
            </div>
        </div>
    )
}
