import React from 'react'
import './Login.css'
export const Login = () => {
  return (
        <div class="center">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Enter Username" name="username" required/><br/>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Enter Password" name="password" required/><br/>
            </div>
            
                <button type="submit" name="login">Login</button>

            <div class="forget-password">
                <a href="forget_password.html">Forgot Password?</a>
            </div>
            <div class="register">
                Don't have any account ?<a href=""> Create one </a>
            </div>
        </div>
  )
}
