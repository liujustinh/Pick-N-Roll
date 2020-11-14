import React from 'react'
import './LoginForm.css'

const LoginForm = (props) => {
    return (
        <div className='login'>
            <form>
                <label for='username'>Username:</label>
                <input type="text" id="username" name="username"/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"/>
            </form>
        </div>
    )
}

export default LoginForm
