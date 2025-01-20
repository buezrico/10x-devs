import { FiShoppingBag, FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between pb-2 pt-4">
      <a className="text-blue-800 text-3xl font-semibold">Cosmo</a>
      <ul className="hidden lg:flex gap-8 items-center text-lg">
        <li>
          <p>Sales</p>
        </li>
        <li>
          <p>Hoodie</p>
        </li>
        <li>
          <p>Fashion</p>
        </li>
        <li className="flex items-center">
          <p>More</p>
          <MdOutlineKeyboardArrowDown />
        </li>
      </ul>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 border-2 px-4 py-1 rounded-full ">
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
        </div>

        <div className="relative">
          <FiShoppingBag size={20} />
          <p className="absolute -top-0.5 -right-1 h-3 w-3 bg-red-600 rounded-full flex items-center justify-center text-[.5rem] font-semibold text-white">
            3
          </p>
        </div>

        <div className="">
          <FiUser size={22} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
