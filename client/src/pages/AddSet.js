import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddSet = () => {
    const navigate = useNavigate();

    const [tops, setTops] = useState([]);
    const [outerwears, setOuterwears] = useState([]);
    const [bottoms, setBottoms] = useState([]);
    const [footwear, setFootwear] = useState([]);
    const [accessories, setAccessories] = useState([]);

    const [nameInput, setNameInput] = useState("")
    const [topInput, setTopInput] = useState("");
    const [outerwearInput, setOuterwearInput] = useState("");
    const [bottomInput, setBottomInput] = useState("");
    const [footwearInput, setFootwearInput] = useState("");
    const [accessoryInput, setAccessoryInput] = useState("");

    useEffect(() => {
        const fetchClothes = async () => {
            try {
                const [respTops, respOuterwears, respBottoms, respFootwear, respAccessories] = await axios.all([
                    axios.get(`http://localhost:8800/clothes/?cat=TOP`),
                    axios.get(`http://localhost:8800/clothes/?cat=OUTERWEAR`),
                    axios.get(`http://localhost:8800/clothes/?cat=BOTTOM`),
                    axios.get(`http://localhost:8800/clothes/?cat=FOOTWEAR`),
                    axios.get(`http://localhost:8800/clothes/?cat=ACCESSORY`)
                ]);
                setTops(respTops.data);
                setOuterwears(respOuterwears.data);
                setBottoms(respBottoms.data);
                setFootwear(respFootwear.data);
                setAccessories(respAccessories.data);
            } catch(err){
                console.log(err);
            }
        }
        fetchClothes();
    }, []);

    const statusUpdate = () => {
        console.log(parseInt(topInput.split(" ")[0]));
        console.log(outerwearInput);
        console.log(bottomInput);
        console.log(footwearInput);
        console.log(accessoryInput);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/sets/", {
                name: nameInput,
                top: topInput ? parseInt(topInput.split(" ")[0]) : null,
                outerwear: outerwearInput ? parseInt(outerwearInput.split(" ")[0]) : null,
                bottom: bottomInput ? parseInt(bottomInput.split(" ")[0]) : null,
                footwear: footwearInput ? parseInt(footwearInput.split(" ")[0]) : null,
                accessory: accessoryInput ? parseInt(accessoryInput.split(" ")[0]) : null,
              });
              navigate("/sets");
        } catch (err) {
          console.log(err);
        }
      }

  return (
    <div className='addSet'>
        <div className='segment'>
        <label>Set Name: *</label>
            <input 
              type="text" 
              required 
              name='name'
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <label>Top: </label>
            <select
                name='top'
                value={topInput}
                onChange={(e) => {
                    setTopInput(e.target.value);
                }}
                >
                <option value={""}>-----</option>
                {tops.map((clothing) => (
                    <option value={`${clothing.id} ${clothing.img}`} key={clothing.id}>{clothing.name}</option>
                ))}
            </select>
            <img src={`../upload/${topInput.split(" ")[1]}`} alt='' />
        </div>
        <div className='segment'>
            <label>Outerwear: </label>
            <select
                name='outerwear'
                value={outerwearInput}
                onChange={(e) => {
                    setOuterwearInput(e.target.value);
                }}
                >
                <option value={""}>-----</option>
                {outerwears.map((clothing) => (
                    <option value={`${clothing.id} ${clothing.img}`} key={clothing.id}>{clothing.name}</option>
                ))}
            </select>
            <img src={`../upload/${outerwearInput.split(" ")[1]}`} alt='' />
        </div>
        <label>Bottom: </label>
        <select
              name='bottom'
              value={bottomInput}
              onChange={(e) => {
                setBottomInput(e.target.value);
            }}
            >
              <option value={""}>-----</option>
              {bottoms.map((clothing) => (
                <option value={`${clothing.id} ${clothing.img}`} key={clothing.id}>{clothing.name}</option>
              ))}
        </select>
        <img src={`../upload/${bottomInput.split(" ")[1]}`} alt='' />
        <label>Footwear: </label>
        <select
              name='footwear'
              value={footwearInput}
              onChange={(e) => {
                setFootwearInput(e.target.value);
            }}
            >
              <option value={""}>-----</option>
              {footwear.map((clothing) => (
                <option value={`${clothing.id} ${clothing.img}`} key={clothing.id}>{clothing.name}</option>
              ))}
        </select>
        <img src={`../upload/${footwearInput.split(" ")[1]}`} alt='' />
        <label>Accessory: </label>
        <select
              name='accessory'
              value={accessoryInput}
              onChange={(e) => {
                setAccessoryInput(e.target.value);
            }}
            >
              <option value={""}>-----</option>
              {accessories.map((clothing) => (
                <option value={`${clothing.id} ${clothing.img}`} key={clothing.id}>{clothing.name}</option>
              ))}
        </select>
        <img src={`../upload/${accessoryInput.split(" ")[1]}`} alt='' />
        <button onClick={handleClick}>Add</button>
    </div>
    
  )
}

export default AddSet