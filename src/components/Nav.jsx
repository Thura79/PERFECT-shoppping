import React from "react";
import { FaShopify, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/Context";

const Nav = () => {
    const {search, setSearch, state: {cart}} = useStateContext();
  return (
    <div className=" flex items-center justify-between my-5 bg-blue-50 py-5 px-2">
      <Link to={'/'}>
        <div className=" flex items-center gap-3">
          <FaShopify className=" text-5xl text-yellow-600" />
          <h1 className=" uppercase text-2xl text-blue-700 font-bold">
            mms-shop
          </h1>
        </div>
      </Link>
      <div className="flex gap-5">
        <Link to={"/acart"}>
        <div className="flex items-center cursor-pointer bg-black px-3 rounded py-2 text-white gap-3">
          <FaShoppingCart />
          <p>{cart.length}</p>
        </div>
        </Link>
        <div className="flex items-center gap-3 border border-black px-5 py-2 rounded">
          <FaSearch className=" text-xl" />
          <input
            type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            className=" outline-none bg-transparent"
            placeholder="search ..."
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
