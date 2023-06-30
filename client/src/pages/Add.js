import React from 'react'
import { useState } from 'react'
import axios from "axios";

const Add = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [type, setType] = useState("")
  const [img, setImg] = useState(null)

  const [thumbnail, setThumbnail] = useState()

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
    const imgUrl = await upload();

    try {
      await axios.post("http://localhost:8800/clothes", {
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
              onChange={(e) => setName(e.target.value)}
            />
            <label>Clothing Description: *</label>
            <textarea
              required
              name='desc'
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <label>Category: *</label>
            <select
              name='type'
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
                setImg(e.target.files[0])
                setThumbnail(URL.createObjectURL(e.target.files[0]))
              }}

            />
          </form>
        </div>
        <img className="thumbnail" src={thumbnail} alt='Upload an image' />
      </div>
      <button onClick={handleClick}>Add to Closet</button>
    </div>
  );
}

export default Add