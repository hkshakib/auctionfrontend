import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import styles from "../Styles/Pages/AddItem.module.css";
import { IoAddCircleOutline } from 'react-icons/io5';

const AddItem = () => {
  const { user, addItem } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [minBidPrice, setMinBidPrice] = useState('');
  const [auctionEndDatetime, setAuctionEndDatetime] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleMinBidPriceChange = (e) => {
    setMinBidPrice(e.target.value);
  };

  const handleAuctionEndDatetimeChange = (e) => {
    setAuctionEndDatetime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      title,
      description,
      photo,
      min_bid_price: minBidPrice,
      auction_end_date_time: auctionEndDatetime,
      bidder: user.user_id,
    };
    addItem(newItem);
  };

  return (
    <div className="flex basis-1/1 flex-col justify-center items-center p-3 h-[100%] uppercase">
      <div className="flex justify-center uppercase text-addItem">Add Your Item Here</div>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col shadow-lg w-[36%]">

        <div className="FormGroup">
          <label htmlFor="title" className="text-sm text-normal">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Write your title here"
            value={title}
            onChange={handleTitleChange}
            className="InputClass "
          />
        </div>

        <div className="FormGroup">
          <label htmlFor="description" className="text-sm text-normal">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Write your description here"
            value={description}
            onChange={handleDescriptionChange}
            className="InputClass h-80"
          ></textarea>
        </div>

        <div className="FormGroup">
          <label htmlFor="photo" className="text-sm text-normal">Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            placeholder="upload your product photo"
            onChange={handlePhotoChange}
            className="InputClass"
          />
        </div>

        <div className="FormGroup">
          <label htmlFor="minBidPrice" className="text-sm text-normal">Minimum Bid Price</label>
          <input
            type="number"
            id="minBidPrice"
            name="minBidPrice"
            placeholder="input product minimum bid price"
            value={minBidPrice}
            onChange={handleMinBidPriceChange}
            className="InputClass"
          />
        </div>

        <div className="FormGroup">
          <label htmlFor="auctionEndDatetime" className="text-sm text-normal">Auction End Date and Time</label>
          <input
            type="datetime-local"
            id="auctionEndDatetime"
            name="auctionEndDatetime"
            value={auctionEndDatetime}
            onChange={handleAuctionEndDatetimeChange}
            className="InputClass"
          />
        </div>
        
        <div className="flex justify-center items-center bg-white w-[95%] mb-3 h-16 rounded-lg text-lg hover:bg-black hover:text-white">
          <IoAddCircleOutline className="text-lg mr-1 uppercase" />
          <button type="submit" className="text-sm uppercase">
             Add Item
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddItem;
