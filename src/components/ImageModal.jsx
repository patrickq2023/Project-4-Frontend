import React from 'react'



const ImageModal = ({ imageUrl, keywords, category, onClose }) => {
    return (
      <div className="image-modal">
        <div className="modal-content">
          <img className="modal-image" src={imageUrl} alt="modal-image" />
          <div className='image-details'>
            <p>Keywords: {keywords}</p>
            <p>Category: {category}</p>

          </div>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default ImageModal