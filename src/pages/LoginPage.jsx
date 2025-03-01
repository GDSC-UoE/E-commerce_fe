import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Update auth states
    const { auth, setAuth } = useContext(ShopContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const response = await fetch('http://127.0.0.1:8000/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            // redirect to another page or update UI
            alert('Login successful!');
            setAuth({
                email: email
            })
            navigate('/products');
        } else {
            const errorData = await response.json();
            //display error message in case of error
            setError(errorData.error || 'An error occurred');
            console.error('Error:', errorData);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 space-y-4">
                <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
                <p className="text-center text-gray-600">Login to your account</p>
                {error && <p className="text-center text-red-600">{error}</p>}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@example.com"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        {/* <Link to="/forgot-password"  className="text-sm text-blue-600 hover:underline">Forgot password?</Link> */}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-black px-6 py-2 rounded-xl text-xl font-semibold hover:bg-yellow-600 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600">
                    Don't have an account? <Link to="/sign-up" className="text-blue-600 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;