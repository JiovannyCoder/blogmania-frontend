

export default function Login() {
  return (
    <div className="bg-white p-8 rounded max-w-md my-8 mx-auto">
      <h1 className="text-primary text-center">Log in</h1>
      <form className="w-full">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="mt-4">
          <button type="submit" className='btn-primary btn-lg w-full'>Log in</button>
        </div>
      </form>
    </div>
  )
}
