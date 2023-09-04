import { useState } from 'react';
import './Signup.css';
import styled from "styled-components";
import Error from './Error';
import Footer from './Footer';

function Signup({ onLogin }) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    const FormField = styled.div`
        &:not(:last-child) {
        margin-bottom: 12px;
    }`;

    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://paw-finder-render.onrender.com/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
            password_confirmation: passwordConfirmation,
        }),
    }).then((r) => {
        if (r.ok) {
            r.json().then((user) => onLogin(user));
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
    });
    }
    return (
        <>
        <form onSubmit={handleSubmit} className = "signup-form">
        <h1>🐾 PawFinder</h1>
        <h1>  Signup Form</h1>
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            autoComplete="off"
            id="username"
            placeholder="  Enter your username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="  Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            placeholder="  Enter your password..."
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
            type="password"
            id="password_confirmation"
            placeholder="  Re-enter your password..."
            autoComplete="off"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <FormField>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </FormField>
        
        </form>
        <Footer />
        </>
    );
}

export default Signup;