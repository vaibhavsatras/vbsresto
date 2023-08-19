import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./CardsDetails.css";
import { useEffect } from "react";
import React, { useState } from "react";
import { REMOVE } from "../Redux/action";
import { ADD } from "../Redux/action";
import { DELETE_ITEM } from "../Redux/action";


function CardsDetails() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState([]);

  const rdata = useNavigate();

const deleteData = (d)=>{
  dispatch(REMOVE(d))
  rdata('/')
}


function deleteItem(data)
{
  dispatch(DELETE_ITEM(data))
}


  const getData = useSelector((data) => {
    return data.cartreducer.carts;
  });

  function compare() {
    let compareData = getData.filter((d) => {
      return d.id == id;
    });
    setState(compareData);
  }

  function send(data)
    {
        dispatch(ADD(data))
    }

  useEffect(() => {
    compare();
  }, [id]);



  return (
    <>
      <div className="container">
        <h2 className="text-center mt-4 mb-4">Items Details Page</h2>

        {
        state.map((element) => {
          return (
            <>
              <div className="container shadow w-75 d-flex ">
                <div className="item-img">
                    <img
                    src={element.imgdata}
                    alt="img"
                  />
                </div>
                <div className="table list">
                  <div className="listItem mt-4">
                    <td>
                      <strong>Resaurant</strong>
                      <span style={{ fontWeight: "500" }}>: {element.rname}</span>
                    </td>
                    <td>
                      <strong>Price</strong>
                      <span style={{ fontWeight: "500" }}>: ₹ {element.price}.00</span>
                    </td>
                    <td>
                      <strong>Dishes</strong>
                      <span style={{ fontWeight: "500", lineHeight: "35px" }}>
                        : {element.address}
                      </span>
                    </td>
                    <td>
                      <strong>Total</strong>
                      <span style={{ fontWeight: "500" }}>: ₹ {element.price * element.qnty}.00</span>
                    </td>
                    <td className="btn-group btnTxt">
                      <button className="txtColor" onClick={()=>send(element)}>+</button>
                      <span className="txtColor">{element.qnty}</span>
                      <button className="txtColor" onClick={element.qnty <= 1 ? ()=>deleteData(element.id): ()=>deleteItem(element)}>-</button>
                    </td>
                  </div>
                  <div className="listItem2 mt-5">
                    <td>
                      <strong>Rating</strong> :
                      <span
                        style={{
                          fontWeight: "500",
                          color: "white",
                          fontWeight: "100",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "darkgreen",
                            marginLeft: "0px",
                            padding: "1px 1px 1px 5px",
                            borderRadius: "5px",
                          }}
                        >
                          {element.rating}
                          <i
                            className="fa-sharp fa-solid fa-star fa-2xs ms-1 me-1"
                            style={{ fontSize: "7px" }}
                          ></i>
                        </span>
                      </span>
                    </td>
                    <td>
                      <strong>Order Reveiew</strong>:{element.somedata}
                    </td>
                    <td>
                      <strong>Remove</strong>
                      <i className="fa-solid fa-trash" onClick={()=>deleteData(element.id)}></i>
                    </td>
                  </div>
                </div>
              </div>
            </>
          );
        })
      }
      </div>
    </>
  );
}

export default CardsDetails;
