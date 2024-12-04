import React from 'react';
import { FiUserPlus } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GlobalCart } from '../../global/cart/GlobalCart';

const Navbar = () => {
  const [search, setSearch] = React.useState("");
  const { countUniqueProductCart } = React.useContext(GlobalCart); 

  return (
    <header className="w-full bg-white">
    <nav className="w-full max-w-[1200px] mx-auto px-5 py-4 border-b-2 border-neutral-200">
        <div className="w-full flex justify-between items-center">
            {/* search */}
            <div>
                <input 
                    className="bg-neutral-100  p-2 w-[90%] sm:w-[300px] rounded-md text-sm outline-none focus:outline-slate-300" 
                    type="text" 
                    placeholder="Enter your search product"
                    value={search}
                    onChange={({ target }) => setSearch(target.value)}
                />
            </div>
            {/* recurses */}
            <div>
                <ul className="w-full flex justify-between gap-5">
                    <li>
                        <Link to={"/"}>
                            <IoMdHeartEmpty 
                                className="p-2 bg-neutral-100 text-neutral-700 rounded-full hover:bg-neutral-200 duration-150"  
                                size={40}
                            />
                        </Link>
                    </li>
                    <li className="relative">
                        <Link to={"/"}>
                            <IoCartOutline 
                                className="p-2 bg-neutral-100 text-neutral-700 rounded-full hover:bg-neutral-200 duration-150" 
                                size={40} 
                            />
                        </Link>
                        <span className="bg-rose-600 px-2 py-1 rounded-full absolute top-[-15px] right-0 text-[.6rem] text-white">
                            {countUniqueProductCart}
                        </span>
                    </li>
                    <li>
                        <Link to={"/"}>
                            <FiUserPlus 
                                className="p-2 bg-neutral-100 text-neutral-700 rounded-full hover:bg-neutral-200 duration-150"  
                                size={40}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;