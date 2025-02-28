import React from 'react';

function Cart() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h2>
        
        {/* Cart Items */}
        <div className="space-y-4">
          {/* Example Cart Item */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Product"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Product Name</h3>
                <p className="text-gray-500 text-sm">Price: $49.99</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">

              <span className="text-lg">1</span>
        
            </div>
            <p className="text-lg font-semibold text-gray-800">$49.99</p>
          </div>

          {/* Add more products by duplicating the block above */}
        </div>

        {/* Summary Section */}
        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-semibold text-gray-700">
            <span>Subtotal:</span>
            <span>$49.99</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Taxation:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-gray-800 mt-2">
            <span>Total:</span>
            <span>$49.99</span>
          </div>
          <button className="w-full bg-yellow-500 text-black px-6 py-3 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
