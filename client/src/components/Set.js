import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

const Set = ({ set }) => {
    const [top, setTop] = useState();
    const [outerwear, setOuterwear] = useState();
    const [bottom, setBottom] = useState();
    const [footwear, setFootwear] = useState();
    const [accessory, setAccessory] = useState();


    useEffect(() => {
        const fetchClothes = async () => {
            try {
                const [respTop, respOuterwear, respBottom, respFootwear, respAccessory] = await axios.all([
                    axios.get(`http://localhost:8800/clothes/${set.top}`),
                    axios.get(`http://localhost:8800/clothes/${set.outerwear}`),
                    axios.get(`http://localhost:8800/clothes/${set.bottom}`),
                    axios.get(`http://localhost:8800/clothes/${set.footwear}`),
                    axios.get(`http://localhost:8800/clothes/${set.accessory}`)
                ]);
                setTop(respTop.data);
                setOuterwear(respOuterwear.data);
                setBottom(respBottom.data);
                setFootwear(respFootwear.data);
                setAccessory(respAccessory.data);
            } catch(err){
                console.log(err);
            }
        }
        fetchClothes();
    }, []);

    function segment(clothing) {
        return (
            <div className='segment'>
                    <h3>{clothing.name}</h3>
                <img src={`../upload/${clothing.img}`} alt="No Image" />
            </div>
        )
    }


    return (
        <>
            <div className='header'>
                <h1>{set.name}</h1>
            </div>
            <div className='singleDisplay'>
                {top ? segment(top) : null}
                {outerwear ? segment(outerwear) : null}
                {bottom ? segment(bottom) : null}
                {accessory ? segment(accessory) : null}
                {footwear ? segment(footwear): null}
            </div>
        </>
    )
}

export default Set