import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const handleSignup = (e) => {
        e.preventDefault();
        // Login authentication Logic
        console.log("Signup email: " ,email, "password: " ,password);
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={ handleSignup }>
                <input
                    type='email'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='Enter confirm password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type='submit'>Signup</button>
            </form>
        </div>
    );
};


export default Signup;