import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Write = () => {
  const state = useLocation().state;  

  const [name, setName] = useState(state?.name || "");
  const [desc, setDesc] = useState(state?.desc || "");
  const [type, setType] = useState(state?.type || "");
  const [img, setImg] = useState(state?.img || null);
  const [wears, setWears] = useState(state?.wears || 0);

  const [thumbnail, setThumbnail] = useState(img ? img : null);

  const navigate = useNavigate();

  const [uploaded, setUploaded] = useState(false);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", img);
      const res = await axios.post("http://localhost:8800/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    var imgUrl = null;  
    if (uploaded) {
      imgUrl = await upload();
    }
    try {
      console.log(imgUrl)
      state
        ? await axios.put(`http://localhost:8800/clothes/${state.id}`, {
            name: name,
            desc: desc,
            type: type,
            img: uploaded ? imgUrl : img,
            wears: wears,
          })
        : await axios.post("http://localhost:8800/clothes/", {
            name: name,
            desc: desc,
            type: type,
            img: img ? imgUrl : "",
            wears: 0
          });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="add">
      <h2>Add an item</h2>
      <div className='content'>
        <div className='inputs'>
          <form>
            <label>Clothing Name: *</label>
            <input 
              type="text" 
              required 
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Clothing Description: *</label>
            <textarea
              required
              name='desc'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <label>Category: *</label>
            <select
              name='type'
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value={null}>----</option>
              <option value="TOP">Top</option>
              <option value="BOTTOM">Bottom</option>
              <option value="OUTERWEAR">Outerwear</option>
              <option value="Footwear">Footwear</option>
              <option value="Accessory">Accessory</option>
            </select>
            <input 
              type="file" 
              required 
              name='img'
              onChange={(e) => {
                setUploaded(true);
                setImg(e.target.files[0]);
                setThumbnail(e.target.files[0]);
              }}
            />
          </form>
        </div>
        <img className="thumbnail" src={uploaded ? URL.createObjectURL(thumbnail) : `./upload/${img}`} 
        alt='Upload an image' />
      </div>
      <button onClick={handleClick}>Add to Closet</button>
    </div>
  );
}

export default Write