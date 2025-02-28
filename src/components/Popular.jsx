import React from 'react'
import { cars } from '../data/cars'
import { Link } from 'react-router-dom'

function CarCard({ image, description, price, id }) {
    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition duration-500 hover:scale-105">
            <img className='w-full h-48 object-cover' src={image} alt="" />
            <div className="p-4">
                <p className="text-gray-700 text-base line-clamp-2">{description}</p>
                <p className="text-gray-900 font-bold text-xl mt-2">${price}</p>
              <Link to={`/products/${id}`}>
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300 mt-4 cursor-pointer">
                    Buy Now
                </button>
              </Link>
            </div>
        </div>
    )
}

function Popular() {
    return (
        <div className="container mx-auto px-4 my-20">
            <h2 className='text-center text-5xl mt-10 mb-10 font-bold text-gray-800'>- Popular Cars -</h2>
            <div className="flex flex-wrap justify-center">
                {
                    cars.map((car, index) => {
                        return <CarCard key={index} {...car} />
                    })
                }
            </div>
        </div>
    )
}

export default Popular