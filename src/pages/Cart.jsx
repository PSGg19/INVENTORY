import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>
      acc+curr.price,0));
  },[cart])

  return (
    <div>
      {cart.length>0 ? (
        <div className="flex relative justify-center max-w-6xl mx-auto gap-x-12 mb-7 top-[70px] bottom-[100px]"> 
          <div >
            {cart.map((item, index) => 
              <CartItem key={item.id} item={item} itemIndex={index} />
            )}
          </div>

          <div className="flex flex-col place-content-between w-full h-[80vh] sticky top-[100px] mt-[70px]">
            <div>
              <div className="text-3xl text-orange-700 uppercase font-semibold">Your Cart</div>
              <div className="text-6xl uppercase text-orange-600 font-semidold">Summary</div>
              <p className="mt-4"><span className="font-bold text-slate-600">Total Items: {cart.length}</span></p>
            </div>

            <div>
              <p className="font-semibold">Total Amount:<span className="font-bold">${totalAmount}</span></p>
              <button className="bg-orange-500 font-semibold text-white px-3 py-2 w-full">CheckOut now</button>
            </div>
          </div>

        </div>
      ) : (
        <div className="flex items-center justify-center flex-col h-[100vh] gap-5">
          <h1 className="font-bold text-3xl">Cart is Empty</h1>
          <Link to={"/"}>
            <button className="bg-orange-500 font-semibold text-white rounded-full p-3 px-8">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
