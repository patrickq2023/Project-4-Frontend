import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'



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
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div>
          <h1>Images Index</h1>
          <div className="grid-container">
            {data &&
              data.map((image, index) => (
                <img key={index} className="grid-item" src={image.url} alt={`image-${index}`} />
              ))}
          </div>
        </div>
      );
    }