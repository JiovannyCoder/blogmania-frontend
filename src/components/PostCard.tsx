import { Link } from "react-router-dom";


export default function PostCard() {
  return (
    <div className="card mb-5">
        <h3 className="text-primary">Post title Lorem ipsum dolor sit</h3>
        <h5>Published by John Doe - <span className="date-title">11/06/02</span></h5>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, velit sunt. Illo, voluptatibus rerum optio iure aspernatur pariatur sint non tempore vitae dignissimos explicabo ex reprehenderit totam voluptatum quidem? Non.</p>
        <div className="flex justify-between">
        <Link to="/post/156166" className="btn-outline-primary mt-3 mr-3">Details</Link>
        <span className="btn-text-primary mt-3">Comments</span>
        </div>
    </div>
  )
}
