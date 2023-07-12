import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AddSet = () => {
    const [tops, setTops] = useState([]);
    const [outerwears, setOuterwears] = useState([]);
    const [bottoms, setBottoms] = useState([]);
    const [footwear, setFootwear] = useState([]);
    const [accessories, setAccessories] = useState([]);

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

  return (
    <div className='addSet'>
        <div className='segment'>
            <label>Top: </label>
            <select
                name='top'
                value={topInput}
                onChange={(e) => {
                    setTopInput(e.target.value);
                    console.log(topInput);
                }}
                >
                <option value={""}>-----</option>
                {tops.map((clothing) => (
                    <option value={clothing} key={clothing.id}>{clothing.name}</option>
                ))}
            </select>
            <img src={`../upload/${topInput.img}`} alt='' />
        </div>
        <div className='segment'>
            <label>Outerwear: </label>
            <select
                name='outerwear'
                value={outerwearInput}
                onChange={(e) => {setOuterwearInput(e.target.value);
                    console.log(outerwearInput);}}
                >
                <option value={""}>-----</option>
                {outerwears.map((clothing) => (
                    <option value={clothing} key={clothing.id}>{clothing.name}</option>
                ))}
            </select>
        </div>
        <label>Bottom: </label>
        <select
              name='bottom'
              value={bottomInput}
              onChange={(e) => setBottomInput(e.target.value)}
            >
              <option value={""}>-----</option>
              {bottoms.map((clothing) => (
                <option value={clothing.id} key={clothing.id}>{clothing.name}</option>
              ))}
        </select>
        <label>Footwear: </label>
        <select
              name='footwear'
              value={footwearInput}
              onChange={(e) => setFootwearInput(e.target.value)}
            >
              <option value={""}>-----</option>
              {footwear.map((clothing) => (
                <option value={clothing.id} key={clothing.id}>{clothing.name}</option>
              ))}
        </select>
        <label>Accessory: </label>
        <select
              name='accessory'
              value={accessoryInput}
              onChange={(e) => setAccessoryInput(e.target.value)}
            >
              <option value={""}>-----</option>
              {accessories.map((clothing) => (
                <option value={clothing.id} key={clothing.id}>{clothing.name}</option>
              ))}
        </select>
    </div>
    
  )
}

export default AddSet