import UserPostCard from "../../components/UserPostCard"
import useUserPost from "../../hooks/useUserPost"

export default function UserPostList() {
  const { posts, isLoading, error} = useUserPost()

  if (isLoading) return <p>Loading posts ...</p>

  if (error) return <div className="alert-error mt-5">{error}</div>

  return (
    <div>
      {posts && posts.length === 0 && <div className="alert-info mt-5">You have no posts for the moment</div>}
      {posts && posts.map(post => (
        <UserPostCard post={post} key={post._id} />
      ))}

    </div>
  )
}
