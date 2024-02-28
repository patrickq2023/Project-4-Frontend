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
                              </div>
                          </div>
                      </div>
                  ))}
          </div>
      </div>
  );
}