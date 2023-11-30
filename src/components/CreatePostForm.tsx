

export default function CreatePostForm() {
  return (
    <div className="card-flat">
         <h4 className="text-gray-500">Create new post</h4>
        <form className="w-full">
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
            </div>
            <div>
                <label htmlFor="body">Content</label>
                <textarea rows={3} id="body" ></textarea>
            </div>
            <div className="flex justify-end">
                <button className="btn-primary" type="submit">Publish</button>
            </div>
        </form>
    </div>
  )
}
