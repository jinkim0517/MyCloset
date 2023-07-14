import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Set from '../components/Set';

const Sets = () => {
  const [sets, setSets] = useState([])

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
      const fetchSets = async () => {
          try {
              const resp = await axios.get(`http://localhost:8800/sets`);
              setSets(resp.data);
          } catch(err){
              console.log(err);
          }
      }
      fetchSets()
  }, []);

  var empty = true;
    if (sets.length > 0) {
        empty = false;
    }

    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:8800/sets/${id}`);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
    };


  return (
    <div className='sets'>
      <div className='head'>
        <h1>Your Sets</h1>
        <Link to={'/addSet'} className='addButton'>
          <h3>Create a Set</h3>
        </Link>
      </div>

      <div className='sets'>
        {empty ? (
          <h2>You have no sets. Try adding one!</h2>
        ) : 
        (sets.map((set) => (
          <div className='set' key={set.id}>
            <Set set = {set} />
          </div>
        )))
      }
      </div>
    </div>
  )
}

export default Sets
