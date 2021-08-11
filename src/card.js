import React from 'react';
export default function Card (props)
{
return (
    <>
    <div className="card-group col-10 col-md-4 col-lg-4">
    <div className="card">
      <img src={props.data.imglink} className="card-img-top" alt="Imageloading"></img>
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.data.title}</h5>
        <p className="card-text">{props.data.description} </p>
        <div className='row'>
        <div className='col-7'>
        <p className="card-text fw-bold">Price Rs.{props.data.price}</p>
        </div>
        <div className='col-5'>
        <span className="card-text fw-bold">Quantity</span>
        </div>
        </div>
        <div>
        <div className='row'>
        <div className='col-7'>
        <button type="button" className="btn btn-primary mt-2 btn-sm" onClick={()=>{props.click(props.data.id)}}>Add to Cart</button>
        </div>
        <div className='col-5'>
      <select className="form-select-sm mt-2" onChange = {(event)=>{props.handlechange(event.target.value, props.data.id)}}>
            <option value="1" selected>One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            </select>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>)
}