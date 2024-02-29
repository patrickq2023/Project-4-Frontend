import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import Navbar from './Navbar'



export default function ImagesIndex() {
    const [data, setData] = useState([])

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
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="container mt-4">
          <h1 className="mb-4">Images Index</h1>
          <div className="row">
            {data &&
              data.map((image, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card">
                    <img className="card-img-top" src={image.url} alt={`image-${index}`} />
                    <div className="card-body">
                      {/* Add any additional information or styling here */}
                      <button onClick={() => handleDelete(image.id)} className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      );
    }