import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [clothes, setClothes] = useState([])

    useEffect(() => {
        const fetchAllClothes = async () => {
            try {
                const resp = await axios.get("http://localhost:8800/clothes")
                setClothes(resp.data)
            } catch(err){
                console.log(err)
            }
        }
        fetchAllClothes()
    }, [])

    var empty = true
    if (clothes.length > 0) {
        empty = false
    }

    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:8800/clothes/${id}`);
          window.location.reload()
        } catch (err) {
          console.log(err);
        }
    };
    

    return (
        <div className='home'>
            <h1>Your Closet</h1>
            <div className='clothes'> 
                {empty ? (
                    <h2>Your closet is empty.</h2>
                ) : 
                (clothes.map((clothing) => (
                    <div className='clothing' key={clothing.id}>
                        <div className='img'>
                            <img src={`../upload/${clothing.img}`} alt='' />
                        </div>
                        <div className='content'>
                            <h1>{clothing.name}</h1>
                            <p>{clothing.desc}</p>
                            <div className='wears'>
                                <button onClick={() => {clothing.wears = clothing.wears - 1}}>
                                    -
                                </button>
                                <h5>Total Wears: {clothing.wears}</h5>
                                <button onClick={() => {clothing.wears = clothing.wears + 1}}>
                                    +
                                </button>
                            </div>
                            <button className='delete' onClick={() => {handleDelete(clothing.id)}}>
                                Remove Item
                            </button>
                        </div>
                    </div>
                )))
                }
            </div>
        </div>
    )
}

export default Home