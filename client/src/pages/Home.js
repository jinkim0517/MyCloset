import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext';
import axios from 'axios'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";


const Home = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const [clothes, setClothes] = useState([])

    const [search, setSearch] = useState("");
    const [type, setType] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        const fetchClothes = async () => {
            try {
                const resp = await axios.get(`http://localhost:8800/clothes/?uid=${currentUser.id}${type}`);
                setClothes(resp.data);
            } catch(err){
                console.log(err);
            }
        }
        fetchClothes()
    }, [type]);

    var empty = true;
    if (clothes.length > 0) {
        empty = false;
    }

    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:8800/clothes/${id}`);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
    };

    return (
        <div className='home'>
            <div className='head'>
                <h1>Your Closet</h1>
                <div className='filter'>
                    <h3>Filters</h3>
                    <div className='search'>
                        <label>Search by name: </label>
                        <input 
                        type="text" 
                        required 
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        />
                    </div>

                    <div className='categorize'>
                        <label>Category: </label>
                        <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        >
                        <option value={""}>----</option>
                        <option value="&type=TOP">Top</option>
                        <option value="&type=BOTTOM">Bottom</option>
                        <option value="&type=Outerwear">Outerwear</option>
                        <option value="&type=FOOTWEAR">Footwear</option>
                        <option value="&type=ACCESSORY">Accessory</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='clothes'> 
                {empty ? (
                    <h2>Your closet is empty.</h2>
                ) : 
                (clothes.filter((clothing) => clothing.name.toLowerCase().trim().includes(search.toLowerCase().trim())).map((clothing) => (
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