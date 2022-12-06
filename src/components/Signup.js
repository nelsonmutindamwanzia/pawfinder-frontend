import { useState } from 'react';

function Signup({ onLogin }) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
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
        })
        .then((r) => r.json())
        .then(onLogin);
    }
    return (
        <form onSubmit={handleSubmit} className = "signup-form">
        <label htmlFor="username" className="label">Username:</label>
        <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email" className="label">Email:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="label">Password:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password_confirmation" className="label">Confirm Password:</label>
        <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit" className = "button2">Submit</button>
        </form>
    );
}

export default Signup;