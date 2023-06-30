import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Single = () => {
  const [clothing, setClothing] = useState()

  const location = useLocation()
  const navigate = useNavigate();

  const clothingId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/clothes/${clothingId}`);
        setClothing(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [clothingId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/clothes/${clothingId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='single'>
      <h1>{clothing.name}</h1>
    </div>
  )
}

export default Single