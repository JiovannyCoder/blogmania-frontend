import { useState, SyntheticEvent } from "react"
import useLogin from "../../hooks/useLogin"


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoading, error } = useLogin()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="bg-white p-8 rounded max-w-md my-8 mx-auto">
      <h1 className="text-primary text-center">Log in</h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password <span className="text-red-500">*</span></label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mt-4">
          <button type="submit" disabled={isLoading} className='btn-primary btn-lg w-full'>
            {isLoading ? 'Connexion...' : 'Log in'}
          </button>
        </div>
        {error && <div className="mt-5 alert-error">{error}</div>}
      </form>
    </div>
  )
}
