import React, { useContext, useState } from "react";
import styles from "../Styles/AddItem.module.css";
import AuthContext from "../Context/AuthContext";

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
    console.log("Newwwwww:", newItem.bidder);
    addItem(newItem);
  };

  return (
    <div className={styles.container}>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            className={styles.textarea}
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="minBidPrice">Minimum Bid Price:</label>
          <input
            type="number"
            id="minBidPrice"
            name="minBidPrice"
            value={minBidPrice}
            onChange={handleMinBidPriceChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="auctionEndDatetime">Auction End Date and Time:</label>
          <input
            type="datetime-local"
            id="auctionEndDatetime"
            name="auctionEndDatetime"
            value={auctionEndDatetime}
            onChange={handleAuctionEndDatetimeChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
