import DateFromNow from "../utils/formatDate"

type props = {
  comment: PostComment
}

export default function CommentCard({ comment }: props) {
  return (
    <div className="card-flat mb-5">
      <h4 className="flex justify-between">{comment.user.firstname + ' ' + comment.user.lastname} <span className="text-sm date-title">{DateFromNow(comment.createdAt)}</span></h4>
      <p className="text-gray-700">{comment.content}</p>
    </div>
  )
}
