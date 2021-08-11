import React from 'react';
export default function Cart(props)
{
    return (
        <>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{props.data.title}</div>
      <h4 className="d-inline">Rs.{props.data.price}</h4>      
          <p className="d-inline ms-5 fw-bold">Quantity {props.data.quantity} </p>
    </div>
    <span style = {{cursor: 'pointer'}}className="badge bg-primary rounded-pill"  onClick={() => {props.click(props.data.id)}}>X</span>
  </li>
  </>
    )
}