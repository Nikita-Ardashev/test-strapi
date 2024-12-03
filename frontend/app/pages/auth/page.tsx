'use client';
import { apiLogin } from '@/app/utils/api';
import axios from 'axios';
import React, { useState } from 'react';

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
		<div>
			<form onSubmit={handleSubmit}>
				<h1 className="font-bold text-3xl mb-6">Login</h1>

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

				{error && <div className="text-red-500">{error}</div>}

				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
