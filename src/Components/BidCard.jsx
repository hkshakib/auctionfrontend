import React from 'react';
import DeleteConfirmation from './DeleteConfirmation';


const BidCard = ({bids, formatDate, email}) => {

  const deleteBid = async (bidId) => {
      console.log("clicked!!");
      try {
        const response = await fetch(`http://127.0.0.1:8000/auction/api/bid/${bidId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        });
      
        if (response.ok) {
          window.location.reload();
        } else {
          console.log('Failed to delete bid');
        }
      } catch (error) {
        console.log('Error deleting bid:', error);
      }
  };

  return (
        <div className="flex flex-col w-[100%] mt-1 mr-2 ml-2 border-white p-2">
          <div className="flex justify-center text-lg"> BID INFORMATIONS </div>
            <table className="w-[100%] h-[100%] border-collapse mt-1">
              <thead>
                <tr className="uppercase">
                  <th className="font-bold">Bidder</th>
                  <th className="font-bold">Bidding Amount</th>
                  <th className="font-bold">Bid Placed On</th>
                </tr>
              </thead>
              <tbody className="bg-[#ddd] bg-scroll">
                {bids?.map((bid) => (
                  <tr key={bid.id} className="even:bg-white ">
                    <td className="p-2 text-left hover:border-b-slate-300">{bid.email}</td>
                    <td className="p-2 text-left hover:border-b-slate-300">{bid.amount}</td>
                    <td className="p-2 text-left hover:border-b-[#ccc]">{formatDate(bid.created_at)}</td>
                    {
                    email === bid.email? 
                    <td >
                      <DeleteConfirmation onDelete={() => deleteBid(bid.id)} Val={"Bid"} />
                    </td>
                      :<td  className="flex text-white justify-center items-center cursor-pointer h-8 mt-1 mr-1 rounded-sm"></td>
                    }
                  </tr>
                ))}
              </tbody>
            </table>        
        </div>
  )
}

export default BidCard;