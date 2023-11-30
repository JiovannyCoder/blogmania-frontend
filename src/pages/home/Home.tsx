import PostCard from "../../components/PostCard";
import usePosts from "../../hooks/usePost";

export default function Home() {
  const { posts, isLoading, error } = usePosts()

  if(isLoading) return <p>Loading posts ...</p>

  if(error) return <div className="alert-error mt-5">{error}</div>

  return (
    <div>
      {posts && posts.length === 0 && <div className="alert-info mt-5">No post for the moment</div>}
      {posts && posts.map(post => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  )
}
