import React, { useEffect, useState } from 'react';
import { cars } from '../data/cars';
import { useParams, Link } from 'react-router-dom';

function ProductPage() {
    const params = useParams();
    const [selectedCar, setSelectedCar] = useState();
    const [quantity, setQuantity] = useState(1);

    // Fetch the selected car details
    useEffect(() => {
        const car = cars.find((car) => car.id == params.productId);
        setSelectedCar(car);
    }, [params.productId]);

    // Increase quantity but not more than available stock
    const increaseQuantity = () => {
        if (quantity < selectedCar.quantity) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    // Decrease quantity but prevent it from going below 1
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Breadcrumbs */}
            <nav className="text-sm mb-4 text-gray-600">
                <Link to="/" className="hover:underline">Home</Link> /
                <Link to="/products" className="hover:underline mx-1">Products</Link> /
                <Link to={`/product/${selectedCar?.id}`} className='hover:underline mx-1'><span className="text-gray-800">{selectedCar?.name}</span></Link>
            </nav>

            <div className="flex flex-col md:flex-row bg-white shadow rounded-lg overflow-hidden">
                {/* Car Image on the Left */}
                <div className="w-full md:w-1/2 p-4">
                    <img
                        src={selectedCar?.image}
                        alt={selectedCar?.name}
                        className="w-full h-auto rounded"
                    />
                </div>

                {/* Product Details on the Right */}
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-2 text-gray-800">{selectedCar?.name}</h1>
                        <p className="text-gray-600 mb-4">{selectedCar?.description}</p>
                        <div className="text-xl font-semibold text-green-600 mb-2">Kes. {selectedCar?.price}</div>
                        <div className="text-sm text-gray-500 mb-4">Available: {selectedCar?.quantity}</div>

                        {/* Quantity Adjuster */}
                        <div className="flex items-center space-x-4 mb-4">
                            <button
                                onClick={decreaseQuantity}
                                disabled={quantity <= 1}
                                className={`border border-gray-300 px-3 py-1 rounded ${quantity <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}>
                                -
                            </button>
                            <span className="text-lg">{quantity}</span>
                            <button
                                onClick={increaseQuantity}
                                disabled={quantity >= selectedCar?.quantity}
                                className={`border border-gray-300 px-3 py-1 rounded ${quantity >= selectedCar?.quantity ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}>
                                +
                            </button>
                        </div>
                    </div>

                    <button className="w-full bg-yellow-400 text-black py-2 rounded text-lg font-medium hover:bg-yellow-300 transition duration-300" onClick={() => alert("button clicked")}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
