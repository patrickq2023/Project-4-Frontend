import React from 'react';
import ImageUploadForm from './ImageUploadForm';
import ImagesIndex from './ImagesIndex';
import Navbar from './Navbar';

const Home = () => {
  const handleUploadSuccess = () => {
    
    console.log('Image uploaded successfully');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <ImageUploadForm onUploadSuccess={handleUploadSuccess} />
      <hr />
      <ImagesIndex />
    </div>
  );
};

export default Home;
