import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";


const Home = () => {
    const [clothes, setClothes] = useState([])

    const [type, setType] = useState('-----')

    const navigate = useNavigate();

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
    }, [type])

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
                            <div className='buttons'>
                                <Link to={'/write'} state={clothing}>
                                    <img className='action' src={Edit} alt="" />
                                </Link>
                                <img onClick={() => {handleDelete(clothing.id)}} className='action' src={Delete} alt=""/>
                            </div>
                        </div>
                    </div>
                )))
                }
            </div>
        </div>
    )
}

export default Home