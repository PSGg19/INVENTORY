import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { remove } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  };

  return (
    <div>
      <div className="flex space-x-4 p-8 border-b-4">
        <div className="flex items-center">
          <img src={item.image} />
        </div>

        <div className="flex flex-col items-start gap-16 p-4">
          
            <div>
              <h1 className="text-slate-900 text-2xl text-left font-bold w-full">
                {item.title}
              </h1>
            </div>
            <div>
              <h1 className="text-[16px] text-slate-700 text-left">
                {item.description.split(" ").slice(0,15).join(" ") + "..."}
              </h1>
            </div>
            <div className="flex justify-between w-full">
              <p className="font-bold text-orange-500 text-2xl">${item.price}</p>
              <div className="text-4xl bg-orange-400 rounded-full p-1 cursor-pointer"  onClick={removeFromCart}>
                <FcDeleteDatabase />
              </div>
            </div>
          
        </div> 
      </div>
    </div>
  );
};

export default CartItem;
