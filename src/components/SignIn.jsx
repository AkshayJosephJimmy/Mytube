import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form className='p-4 flex flex-col'>
        <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}className="border p-2 rounded w-2xl mb-4" />
        <input type='email' placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border p-2 rounded w-2xl mb-4" />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border p-2 rounded w-2xl mb-4" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-2xl">Sign In</button>
       
      </form>
     <Link to={'/register'} ><p>register for new users</p></Link>
    </div>
  )
}

export default SignIn
