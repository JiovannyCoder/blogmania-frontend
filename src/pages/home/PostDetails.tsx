import { Link, useParams } from "react-router-dom"
import CommentCard from "../../components/CommentCard"
import useAuthContext from "../../hooks/useAuthContext"

export default function PostDetails() {
    const { id } = useParams()

    const { user } = useAuthContext()

    return (
        <div>
            <div>
                <h3 className="text-gray-500">Post details</h3>
            </div>
            <div className="card-flat mb-5">
                <h2>Post title {id}</h2>
                <h5>Published by John Doe - <span className="date-title">11/06/02</span></h5>
                <p className="text-gray-700 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, velit sunt. Illo, voluptatibus rerum optio iure aspernatur pariatur sint non tempore vitae dignissimos explicabo ex reprehenderit totam voluptatum quidem? Non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis dicta dolores quaerat ex vel recusandae blanditiis accusantium corrupti aliquid consequuntur iure impedit cum, odit eaque, perferendis alias eos hic.</p>
            </div>
            <div className="">
                <h3 className="text-gray-500">Post comments</h3>
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
            {user && (
                <div>
                    <h3 className="text-gray-500">Let a comment ?</h3>
                    <textarea rows={3}></textarea>
                    <button className="btn-primary">Comment the post</button>
                </div>
            )}
            <div className="mt-8">
                <Link to="/" className="link-primary">{'<-'} Return to all posts</Link>
            </div>
        </div>

    )
}
