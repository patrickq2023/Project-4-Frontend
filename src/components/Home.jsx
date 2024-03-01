import React from 'react'
// import ImageUploadForm from './ImageUploadForm'
import ImagesIndex from './ImagesIndex'
// import Navbar from './Navbar'

const Home = () => {

  // eslint-disable-next-line
  const handleUploadSuccess = () => {
    
    console.log('Image uploaded successfully')
  }

  return (
    <div>
      
      {/* <ImageUploadForm onUploadSuccess={handleUploadSuccess} />
      <hr /> */}
      <ImagesIndex />
    </div>
  )
}

export default Home
