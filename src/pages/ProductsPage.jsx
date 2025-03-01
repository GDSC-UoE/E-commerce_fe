import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { CarCard } from '../components/Popular';
import { Search } from 'lucide-react';

function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 my-20">
            <h2 className='text-center text-5xl mt-10 mb-10 font-bold text-gray-800 '>- Products -</h2>
            <div className="flex justify-center mb-10">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for cars..."
                    className="pl-10 w-1/2 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    filteredCars.length > 0 ? (
                        filteredCars.map((car, index) => {
                            return <CarCard key={index} {...car} />
                        })
                    ) : (
                        <p className="text-center text-gray-600">No cars found</p>
                    )
                }
            </div>
        </div>
    );
}

export default ProductsPage;