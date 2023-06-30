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

    // const clothes = [
    //     {
    //         id: 1,
    //         name: "White T-Shirt",
    //         desc: "A plain white t-shirt.",
    //         wears: 4,
    //         type: 'TOP',
    //         img: "https://images.pexels.com/photos/9558777/pexels-photo-9558777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2:"
    //     },
    //     {
    //         id: 2,
    //         name: "Blue Jeans",
    //         desc: "Some plain blue jeans.",
    //         wears: 2,
    //         type: 'BOTTOM',
    //         img: "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //     },
    //     {
    //         id: 3,
    //         name: "Off-White Jordan 1 High Chicago",
    //         desc: "Very expensive shoes.",
    //         wears: 0,
    //         type: 'FOOTWEAR',
    //         img: "https://images.pexels.com/photos/10077951/pexels-photo-10077951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //     }
    // ]

    var empty = true
    if (clothes.length > 0) {
        empty = false
    }

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
                            <Link className='link' to='/clothes/${clothing.id}'>
                                <h1>{clothing.name}</h1>
                            </Link>
                            <p>{clothing.desc}</p>
                            <button>View Item</button>
                        </div>
                    </div>
                )))
                }
            </div>
        </div>
    )
}

export default Home