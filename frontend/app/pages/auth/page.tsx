'use client';
import { apiLogin } from '@/app/utils/api';
import React, { useState } from 'react';
import '@/styles/auth.sass';
import { signIn } from '@/auth';

const Login = () => {
	const [identifier, setIdentifier] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		await apiLogin(identifier, password)
			.then((r) => {
				localStorage.setItem('token', r);
				window.location.replace('/');
				console.log('Logged in successfully:', r);
			})
			.catch((err) => {
				console.error('Login error:', err);
				setError(err.message || 'Failed to log in');
			});
	};
	return (
		<div className="auth">
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>

				<input
					type="email"
					name="identifier"
					placeholder="Enter your email"
					value={identifier}
					onChange={(e) => setIdentifier(e.target.value)}
				/>

				<input
					type="password"
					name="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				{error && <div>{error}</div>}

				<button type="submit">Login</button>
			</form>
			<button
				onClick={() => {
					signIn('google');
				}}
			>
				Signin with Google
			</button>
		</div>
	);
};

export default Login;
