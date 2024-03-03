import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
// import Navbar from './Navbar'
import ImageModal from './ImageModal'
import logo from './Assets/logo.png'





export default function ImagesIndex() {
    const [data, setData] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)
    const [editForm, setEditForm] = useState(false)
    const [form, setForm] = useState()

    async function fetchData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/images/`)
            console.log(response.data)
            setData(response.data)
            
        } catch (error) {
            console.log(error)
        }
    } 

    const handleDelete = async (imageId) => {
        try {
          await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/images/${imageId}/`)
          // After successful deletion, update the state to reflect the changes
        //   setData(data.filter(image => image.id !== imageId))
        window.location.reload()
        } catch (error) {
          console.error('Error deleting image:', error)
        }
      };

      const handleUpdate = async (imageId) => {
        setEditForm(imageId)
     
      };

      const update = async(e, imageId, imageUrl) => {
        e.preventDefault()
        const body = {
          ...form, url: imageUrl
        }
        console.log(body)
              try {
          await axios.put(`${process.env.REACT_APP_BACKEND_URL}/images/${imageId}/`, body)
          setEditForm(false)
          // After successful deletion, update the state to reflect the changes
        //   setData(data.filter(image => image.id !== imageId))
        // window.location.reload()
        } catch (error) {
          console.error('Error deleting image:', error)
        }

      } 

      const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
      };
    
      const handleChange = (e) => {
        const{name,value} = e.target
        setForm({
          ...form, 
          [name]:value
        })
        console.log(form)

      }

    const handleCloseModal = () => {
        setSelectedImage(null)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="container mt-4">
          <img style={{ marginBottom:'10px'}}src={logo} alt="" ></img>
          {/* <h1 className="mb-4">Images Index</h1> */}
          <div className="row">
            {data &&
              data.map((image, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={image.url}
                      alt={`${index}`}
                      onClick={() => handleImageClick(image.url)}
                    />
                    <div className="card-body d-flex justify-content-between">
                      <div>
                        <button onClick={() => handleUpdate(image.id)} className="btn btn-success btn-sm">Edit</button>
                        <button onClick={() => handleDelete(image.id)} className="btn btn-danger btn-sm ">Delete</button>
                      </div>
                      {editForm === image.id && <form onSubmit={(e)=> update(e, image.id, image.url)}>
                        <input type="text" name='category' placeholder='Category' onChange={(e) => {handleChange(e)}}/>
                        <input type="text"name='keywords' placeholder='Keyword' onChange={(e) => {handleChange(e)}}/>
                        <button type="submit" className="btn btn-warning btn-sm">Submit</button>
                        </form>}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {selectedImage && (
            <ImageModal imageUrl={selectedImage} keywords={selectedImage.keyword}onClose={handleCloseModal} />
          )}
        </div>
      );
    }