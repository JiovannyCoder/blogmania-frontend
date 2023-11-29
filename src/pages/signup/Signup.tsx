import React from 'react'

export default function Signup() {
  return (
    <div className="bg-white p-8 rounded max-w-md my-8 mx-auto">
    <h1 className="text-primary text-center">Sign up</h1>
    <form className="w-full">
      <div>
        <label htmlFor="email">Email <span className="text-red-500">*</span></label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="firstname">Firstname <span className="text-red-500">*</span></label>
        <input type="text" id="firstname" />
      </div>
      <div>
        <label htmlFor="lastname">Lastname <span className="text-red-500">*</span></label>
        <input type="email" id="lastname" />
      </div>
      <div>
        <label htmlFor="password">Password <span className="text-red-500">*</span></label>
        <input type="password" id="password" />
      </div>
      <div className="mt-4">
        <button type="submit" className='btn-primary btn-lg w-full'>Sign Up</button>
      </div>
    </form>
  </div>
  )
}
