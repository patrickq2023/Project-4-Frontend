import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = ({ onUploadSuccess }) => {
  const [image, setImage] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('keywords', keyword);
    formData.append('category', category);

 
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/images/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onUploadSuccess();
      window.location.reload()
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <br />
      <label>
        Keyword:
        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <br />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUploadForm;
