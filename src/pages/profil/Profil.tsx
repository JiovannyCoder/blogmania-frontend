import CreatePostForm from "../../components/CreatePostForm";
import UserInfo from "../../components/UserInfo";
import UserPostCard from "../../components/UserPostCard";

export default function Profil() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <h3 className="text-gray-500 mb-5">My published posts</h3>
        <hr className="h-1 w-1/5 bg-primary mb-5" />
        <UserPostCard />
        <UserPostCard />
        <UserPostCard />
        <UserPostCard />
      </div>
      <div className="md:col-span-1">
        <UserInfo />

        <div className="mt-5">
          <CreatePostForm />
        </div>
      </div>
    </div>
  )
}
