import { Check } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
                <Check />
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Your Purchase!</h1>
                <p className="text-gray-600 mb-6">Your order details will be sent to your email shortly.</p>
                <div className="flex justify-center space-x-4">
                    <Link to="/products" className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ThankYou;