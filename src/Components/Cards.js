import React, { useState } from "react";
import CardsData from './CardsData.js';
import './Cards.css';
import {useDispatch} from 'react-redux'
import {ADD} from '../Redux/action.js'

function Cards() {

    const [data, setData] = useState(CardsData);

    const sendData =  useDispatch();

    function send(data)
    {
        sendData(ADD(data))
    }

    return (<>
        <div className="container">
            <h2 className="mt-3 text-center">Add to Card Project</h2>
            <div className="row d-flex justify-content-center g-2 align-items-center card-item">
                {
                    data.map((item,idx) => {

                        return (
                                
                            <div className="card ms-5 mt-4 p-1 shadow-lg" style={{ width: '18rem',border:'none' }} key={idx}>
                                <img src={item.imgdata} className="card-img-top" alt="img" style={{height: '190px', width:'280px'}} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.rname}</h5>
                                    <p className="card-text"><strong>Price : ₹ {item.price}.00</strong></p>
                                    <div className="d-flex justify-content-center">
                                    <button className="btn btn-outline-danger w-75" onClick={()=>send(item)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
                </div>
        </div>

    </>)
}
export default Cards;