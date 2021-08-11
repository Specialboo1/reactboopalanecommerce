import { useState } from 'react';
import Card from './card';
import Cart from './cart';
function App() {
  const[products,setproducts] = useState([
    {
      id:1,
      title: 'THE STRANGER IN THE MIRROR',
      description: 'The Stranger in the Mirror is the memoir of the legendary producer-director, Rakeysh Omprakash Mehra.',
      price: 371,
      quantity: 1,
      imglink: "https://images-na.ssl-images-amazon.com/images/I/71S4-mApfJS.jpg"
    },
    {
      id:2,
      title: 'A RUDE LIFE',
      description: "Vir Sanghvi's has been an interesting life - one that took him to Oxford, movie and political journalism, television and magazines",
      price: 445,
      quantity: 1,
      imglink:"https://images-na.ssl-images-amazon.com/images/I/51DG9wW21uS.jpg",
    },
    {
      id:3,
      title: 'THE THREE KHANS',
      description: 'When the Angry Young Man era was on its last legs, three young men entered the world of Hindi films, heralding a change that audiences sought ',
      price: 419,
      quantity: 1,
      imglink:"https://images-na.ssl-images-amazon.com/images/I/81+XlYqFq-S.jpg",
    },
    {
      id:4,
      title: 'THE PSYCHOLOGY OF MONEY ',
      description: 'Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. ',
      price: 225,
      quantity: 1,
      imglink:"https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL.jpg",
    },
    {
      id:5,
      title: 'ATOMIC HABITS',
      description: 'A supremely practical and useful book. James Clear distils the most fundamental information about habit formation. ',
      price: 423,
      quantity: 1,
      imglink:"https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    },
    {
      id:6,
      title: 'REWORK',
      description: 'Rework is a unique business book which shows the reader a better, faster, easier way to be successful in business. ',
      price: 380,
      quantity: 1,
      imglink:"https://images-na.ssl-images-amazon.com/images/I/61GFc+k-5PL.jpg",
    },
  ])
  const [cartitems,setcartitem] = useState([])
  let addtocart = (id) =>
  {
     let additem = products.find(ele => ele.id === id);
     let condition = cartitems.some((ele) =>
     {
       return ele.id === additem.id;
     })   
     if (condition === true)
     {
       alert("Item is in Cart");
     }
     if (condition === false)
     {
     setcartitem([...cartitems,additem]);
     settotal(+total + +additem.price);
     }
  }
  let removeitem = (id) =>
  {
  let check = window.confirm("Are you sure to remove");
  if(check === true)
  {
  let itemindex = cartitems.findIndex(ele => ele.id === id);
  settotal(+total - (cartitems[itemindex].price * cartitems[itemindex].quantity));
  cartitems[itemindex].quantity = 1;
  cartitems.splice(itemindex,1);
  setcartitem([...cartitems]);
  }
  }
  const [total,settotal] = useState(0);

  let quantity = (quantity,id) => {
      let itemindex = cartitems.findIndex(obj => obj.id === id);
      let item = products.find(ele => ele.id === id);
     let condition = cartitems.some((ele) =>
     {
       return ele.id === item.id;
     })   
     if (condition === true)
     {
      cartitems[itemindex].quantity = quantity;
      let newvalue = 0;
      cartitems.map((ele)=> newvalue+= (ele.price) * (ele.quantity));
      settotal(newvalue);
     }
     if (condition === false)
     {
     alert("Please Add the item to cart");
     }
  }
  return (
    <div className="container-fluid mt-4">
      <div className="row">
      <div className="col-10 col-md-8">
      <div className="row"> 
     {
       products.map((ele) => 
       {
         return <Card data={ele} click={addtocart} handlechange={quantity}/>
       })
     }
     </div>
     </div>
     <div className="col-12 col-md-4 col-lg-4 sticky-top">
     <ul className="list-group list-group-numbered sticky-top">
       {
         cartitems.length === 0 ? <img className='img-responsive' src="https://www.kindpng.com/picc/m/121-1218722_ecommerce-shopping-cart-png-image-cart-png-transparent.png"></img> : ''    
         }
       {
         cartitems.map((ele)=>{
           return <Cart data={ele} click={removeitem} />
         })
       }
       <h3>Total - Rs.{total} </h3>
       </ul>       
     </div>
    </div>
    </div>
  );
}

export default App;
