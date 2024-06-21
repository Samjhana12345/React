import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Catwise() {
    let [catwise, setCatwise] = useState([])
    let {cat_id} = useParams();
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${cat_id}`)
            .then(res=>res.json())
            .then(catData=>setCatwise(catData))
    },[])
    return (
        <>
            <div className="container">
                <h1>{cat_id}</h1>
                <h3><Link to="/">HOME</Link></h3>
                <div className='row'>
                    {catwise.map((ad) =>
                        <div className='col-3 py-1'>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={ad.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{ad.title}</h5>
                                    <p className="card-text">{ad.description}</p>
                                    <p className="card-text">Rs.{ad.price}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>

    )
}

export default Catwise