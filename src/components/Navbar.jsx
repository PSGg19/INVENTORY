import { icons } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div >
      <nav className="flex h-20 fixed bg-slate-900 w-full z-10 mt-0">
        <div className=" flex  items-center max-w-6xl mx-auto gap-x-[800px]">

          <div className="flex gap-x-4 hover:scale-110 transition duration-200">
            <NavLink link to="/">
              <img width={60} height={40} src="logo2.png" />
            </NavLink>
            <div className="text-white relative font-bold text-2xl top-4">
              Ecart
            </div>
          </div>

          <div className="flex gap-10 ">
            <NavLink link to="/">
              <p className="text-white text-2xl hover:border-b-4 border-orange-600">Home</p>
            </NavLink>

            <NavLink link to="/cart">
              <div className="relative hover:border-b-4 border-orange-600">
                <FaShoppingCart fill="white" size="30px" />
                {cart.length > 0 && (
                  <span
                    className="absolute text-white bg-orange-700 w-5 h-5 text-xs flex items-center justify-center
                 -top-1 -right-2 rounded-full animate-bounce"
                  >
                    {cart.length}
                  </span>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
