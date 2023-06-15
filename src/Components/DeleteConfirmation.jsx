import React, { useState } from 'react';

const DeleteConfirmation = ({ onDelete, Val }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    onDelete();
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-red-500 text-white rounded">
        Delete
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow">
            <p className='uppercase'>Are you sure you want to delete this {Val}?</p>
            <div className="flex justify-end mt-4">
              <button onClick={() => setShowModal(false)} className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded">
                NO
              </button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded">
                YES
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmation;
