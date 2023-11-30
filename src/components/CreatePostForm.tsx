import { SyntheticEvent, useState } from "react"
import useStorePost from "../hooks/useStorePost"


export default function CreatePostForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const { storePost, isLoading, error } = useStorePost()

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

         const post = await storePost(title, body)
         if(post) {
            // clear the form
            setTitle('')
            setBody('')
         }
    }

    return (
        <div className="card-flat">
            <h4 className="text-gray-500">Create new post</h4>
            <form className="w-full" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div>
                    <label htmlFor="body">Content</label>
                    <textarea
                        rows={3}
                        id="body"
                        onChange={e => setBody(e.target.value)}
                        value={body}
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="btn-primary" disabled={isLoading} type="submit">
                        {isLoading ? 'Publishing...' : 'Publish'}
                    </button>
                </div>
                {error && <div className="mt-5 alert-error">{error}</div>}
            </form>
        </div>
    )
}
