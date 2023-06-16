import React from 'react';


const Card = ({ product, handleView, Name }) => {


    return (
        <div className="relative flex flex-wrap justify-evenly shadow-lg items-center cursor-pointer hover:opacity-100">
            <div className="bg-white rounded-lg shadow-sm w-96 h-64 overflow-hidden group">

                <img src={`http://127.0.0.1:8000${product.photo}`} alt={product.title} className="object-cover h-full w-full" />

                <div className='CardItem absolute top-0 left-0 w-full h-full backdrop-filter backdrop-blur-lg'>
                    
                    <div className="CardItem absolute bottom-0 right-0 justifiy-center items-center h-auto px-4 py-2 text-white">
                        <button onClick={() => handleView(product.id)} className="px-4 py-2 bg-blue-500 text-white rounded w-32 hover:bg-white hover:text-black">{Name}</button>
                    </div>

                    <div className="CardItem top-0 left-0 w-full h-full">
                        <div className="flex justify-center h-full text-black-200 text-xs uppercase font-bold mt-3">
                            <span className='text-lg font-serif font-normal'>{product.title}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;