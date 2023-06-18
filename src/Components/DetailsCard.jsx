import React from 'react';
import DeleteConfirmation from './DeleteConfirmation';

function DetailsCard({product, handleBidPriceChange, handleBid, formatDate, email}) {

  return (
    <div className="flex basis-1/2 flex-col mt-5 border ml-1">

        <div className="flex basis-1/2 border-red-500">
            <img src={`http://127.0.0.1:8000${product.photo}`} alt={product.title} className="flex basis-1/3 justify-center items-center w-300 h-400 object-cover mr-5" />

            <div className="flex flex-col flex-grow">
                <div className="text-hd flex justify-start items-start">{product.title}</div>
                <div className="overflow-y-auto max-h-[400px] max-w-[500px] p-4 border-lg bg-white">{product.description}</div>
            </div>

        </div>

        <div className="flex border-red-500">

            <div className="flex flex-col uppercase border mt-16">
                <div className="text-normal mb-2.5 mt-3">Highest Bid: ${product.highest_bid}</div>
                <div className="mb-2.5 text-red-500">Bid Ends At: {formatDate(product.auction_end_date_time)}</div>
                <div className="mb-2.5">Highest Bidder: {product.highest_bidder_email}</div>
                <div className="mb-2.5">Owner: {product.email}</div>
            </div> 


            <div className="flex basis-auto mt-24 ml-20">
                <input
                type="number"
                placeholder='Enter Your Bid Amount'
                onChange={handleBidPriceChange}
                className="w-300 h-40 p-4 rounded-lg"
                />
                <button 
                    className="
                    h-40 
                    w-120 
                    ml-2.5 
                    cursor-pointer 
                    bg-blue-500
                    text-white
                    hover:bg-slate-100 
                    hover:text-black
                    rounded
                    " onClick={handleBid}>
                    BID
                </button>
            </div>
        </div>
        {
            email === product.email && <div className='flex justify-end'><DeleteConfirmation onDelete={() => console.log("clicked")} Val={"Product"} /></div>
        }
        

    </div>
  )
}

export default DetailsCard;