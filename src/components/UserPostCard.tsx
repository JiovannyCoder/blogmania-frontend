import { Link } from "react-router-dom";


export default function UserPostCard() {
    return (
        <div className="card-flat mb-5">
            <h4 className="">Some title here</h4>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, velit sunt. Illo, voluptatibus rerum optio iure aspernatur pariatur sint non tempore vitae dignissimos explicabo ex reprehenderit totam voluptatum quidem? Non.</p>
            <div className="flex justify-end">
                <Link to="/post/deded" className="btn-text-primary">Comments</Link>
            </div>
        </div>
    )
}
