import { Link } from "react-router-dom";
import DateFromNow from "../utils/formatDate";

type props = {
  post: Post
}

export default function PostCard({ post }: props) {
  return (
    <div className="card mb-5">
      <h3 className="text-primary">{ post.title }</h3>
      <h5>Published by { post.user.firstname + ' ' + post.user.lastname } - <span className="date-title">{DateFromNow(post.createdAt)}</span></h5>
      <p className="text-gray-700">{ post.body }</p>
      <div className="flex justify-between">
        <Link to={"/post/" + post._id} className="btn-outline-primary mt-3 mr-3">Details</Link>
        <Link to={"/post/"+ post._id} className="btn-text-primary mt-3">{ post.comments.length ? post.comments.length : 'No' } Comment{post.comments.length > 1 ? 's' : ''}</Link>
      </div>
    </div>
  )
}
