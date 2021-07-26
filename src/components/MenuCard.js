import React from 'react'
import {Link} from 'react-router-dom'

export default function MenuCard ({items, title}) {
    return (
        <div>
            <h2 className="title">{title}</h2>
            {items.map(item => (
                <div key={item.id}>
                    <div className="card-container">
                            <div className="md:flex shadow-lg  mx-6 md:mx-auto my-20 max-w-lg md:max-w-2xl h-64">
                                <p><img src={item.image_url} className="h-full w-full md:w-3/3  object-cover rounded-lg rounded-r-none pb-5/6" alt="food"/></p>
                                <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                                    <div className="flex items-center">
                                        <h2><Link to={`/items/${item.id}`} className="text-xl text-gray-800 font-medium mr-auto">{item.name}</Link></h2>
                                        <div className="price">
                                            <p className="text-gray-800 font-semi tracking-tighter">${item.price}</p>
                                        </div>
                                    </div>
                                    <p className=" description text-sm text-gray-700 mt-4">{item.description}</p>
                                </div>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    )
}