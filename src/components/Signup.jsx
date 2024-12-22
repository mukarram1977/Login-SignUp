import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className='addUser'>
      <h3>Sign Up</h3>
      <form className='addUserForm'>
        <div className='inputGroup'>
          <label for="name">Name</label>
         <input type='text' id='name' autoComplete='off' placeholder='Enter your name'></input>
          <label for="email">Email</label>
          <input type='email' id='email' autoComplete='off' placeholder='Enter your email'></input>
          <label for="password">Password</label>
          <input type='password' id='password' autoComplete='off' placeholder='Enter password'></input>
          <button type="submit" class="btn btn-success">Sign Up</button>
        </div>
      </form>
      <div className='Login'>
        <p>Already have an account ?</p>
        <Link to="/Login" type="submit" class="btn btn-primary">Login</Link>
      </div>
    </div>
  )
}

export default SignUp