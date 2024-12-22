import React from 'react'
import { Link } from 'react-router-dom'
import './LogIn.css';

const LogIn = () => {
  return (
    <div className='addUser'>
      <h3>Signin</h3>
      <form className='addUserForm'>
        <div className='inputGroup'>
          <label for="email">Email</label>
          <input type='email' id='email' autoComplete='off' placeholder='Enter your email'></input>
          <label for="password">Password</label>
          <input type='password' id='password' autoComplete='off' placeholder='Enter password'></input>
          <button type="button" class="btn btn-primary">Login</button>
        </div>
      </form>
      <div className='Login'>
        <p>Don't have Account ?</p>
        <Link to="/Signup" type="button" class="btn btn-success">Sign Up</Link>
      </div>
    </div>
  )
}

export default LogIn