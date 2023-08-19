import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {REMOVE} from '../Redux/action'
import { useNavigate } from 'react-router-dom';



function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [price,setPrice] = useState(0);
    function deleteData(d)
    {
        dispatch(REMOVE(d))
        navigate('/')
    }

    function remove(data)
    {   
        dispatch(REMOVE(data))
    }
    const getData = useSelector((data)=>{

        return data.cartreducer.carts

    })

    const totalAmount = ()=>{

        let price = 0;
        getData.filter((data)=>{

            price = price + data.price * data.qnty

        })
        setPrice(price);
    }

    useEffect(()=>{

        totalAmount();

    },[totalAmount]);

    
    
    return (
        <>
            <nav className='navbar bg-dark navbar-dark navbar-expand'>
                <div className="container justify-content-start">
                    <h3><a href="#" className='navbar-brand'>Add To Cart</a></h3>
                    <ul className='navbar-nav fs-5'>
                        <li className='nav-item'><a href="#" className='nav-link'>Home</a></li>
                    </ul>

                    <div className="cart-logo ms-auto fs-5" style={{ cursor: 'pointer' }}>
                        <Badge badgeContent={getData.length} color="primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i className="fa-solid fa-cart-shopping text-light mt-1 position-relative" />

                        </Badge>

                        {
                            getData.length ? 

                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog me-0 shadow" style={{ width: '400px' }}>
                                <div className="modal-content">
                                    
                                    <div className="modal-body position-relative">
                                        <button type="button" className="btn-close ms-5" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '13px',float:'right',marginBottom:'20px'}}></button>
                                        <table className='table'>
                                            <thead>
                                                <tr style={{fontSize:'15px', textAlign:'center'}}>
                                                    <th>Photo</th>
                                                    <th>Restaurant Name</th>
                                                </tr>
                                            </thead>
                                            <tbody className='table-group-divider'>
                                                {
                                                    getData.map((data,idx)=>{

                                                        return(
                                                            <>
                                                                <tr style={{textAlign:'center',fontSize:'15px'}}>
                                                                <td>
                                                                    <NavLink to={`/cart/${data.id}`}>
                                                                    <img src={data.imgdata} alt="img" style={{width:'70px', height:'70px', borderRadius:'50%', marginTop:'20px'}} data-bs-dismiss="modal" />
                                                                    </NavLink>
                            
                                                                </td>
                                                                <td>
                                                                    <p>{data.rname}</p>
                                                                    <p style={{marginRight:'25px'}}>Price : ₹ {data.price}.00</p>
                                                                    <p style={{marginRight:'50px'}}>Qty. {data.qnty} Nos</p>
                                                                </td>
                                                                <td style={{verticalAlign:'middle'}}>Remove<i className="fa-solid fa-trash ms-2" onClick={()=>deleteData(data.id)} data-bs-dismiss="modal"></i></td>
                                                            </tr>
                                                            
                                                            </>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                        <p style={{fontSize:'18px'}}>Total Price: ₹{price}.00</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div> :
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog me-0 shadow" style={{ width: '400px' }}>
                            <div className="modal-content">
                                
                                <div className="modal-body position-relative">
                                    <button type="button" className="btn-close ms-5" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '13px',float:'right',marginBottom:'20px'}}></button>
                                    <div className='d-flex justify-content-between mt-5  m-auto'>
                                    <p className='ms-4' style={{color:'red',fontWeight:'bold'}}>The Cart Is Empty</p>
                                    <i className="fa-solid fa-cart-shopping fs-1 me-5 text-danger" />

                                    </div>

                                </div>  
                                
                            </div>
                        </div>
                    </div>

                        }

                            
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;