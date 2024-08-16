import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  return (
    <div
      className="flex flex-col items-center justify-center hover:scale-110 shadow-md 
    transition duration-300 ease-in  hover:shadow-2xl gap-3 p-4 mt-10 ml-5 rounded-xl"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[200px] hover:scale-110 transition duration-200 ease-in-out">
        <img className="h-full w-full" src={post.image} />
      </div>
      <div className="flex justify-between items-center w-full mt-5">
        <div>
          <p className="text-orange-500 font-bold">${post.price}</p>
        </div>
        <div>
          {cart.some((p) => p.id == post.id) ? (
            <button  className="rounded-full py-2 border-2 font-semibold
            text-[12px] p-1 px-3 uppercase border-orange-500 hover:bg-orange-500
            hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>Remove Item</button>
          ) : (
            <button className="rounded-full py-2 border-2 font-semibold
            text-[12px] p-1 px-3 uppercase border-orange-500 hover:bg-orange-500
            hover:text-white transition duration-300 ease-in" onClick={addToCart}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
