import {useState, SyntheticEvent} from 'react'
import useSignup from '../../hooks/useSignup'

export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const { signup, isLoading, error } = useSignup()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    await signup(email, password, firstname, lastname)
  }
  return (
    <div className="bg-white p-8 rounded max-w-md my-8 mx-auto">
      <h1 className="text-primary text-center">Sign up</h1>
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
          <label htmlFor="firstname">Firstname <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="firstname"
            onChange={e => setFirstname(e.target.value)}
            value={firstname}
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="lastname"
            onChange={e => setLastname(e.target.value)}
            value={lastname}
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
            {isLoading ? 'Subscribing...' : 'Sign up'}
          </button>
        </div>
        {error && <div className="mt-5 alert-error">{error}</div>}
      </form>
    </div>
  )
}
