import React, { useState } from "react";
import {
  AiFillDelete,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from "react-icons/ai";
import { useStateContext } from "../context/Context";

const Item = ({ item, incPrice, decPrice }) => {
  const [count, setcount] = useState(item?.qty);
  const { dispatch } = useStateContext();

  const inc = () => {
    item.qty++;
    setcount(item.qty);
    incPrice(item.price)

  };
  const dec = () => {
    if (item?.qty > 1) {
      item.qty--;
      setcount(item.qty);
      
    }
    decPrice(item.price)
  };
  console.log(item.qty);

  return (
    <div className=" border rounded my-5">
      <div className=" flex  items-center gap-5 p-5">
        <img src={item?.image} className=" h-32 border rounded shadow-md p-5" />
        <div className="flex flex-col gap-4">
          <p className=" text-xl">{item?.title}</p>
          <p>$ {item?.price * item.qty}</p>
          <div className=" flex items-center gap-3">
            <AiFillMinusSquare
              onClick={dec}
              className=" text-white bg-blue-700 text-2xl"
            />

            <p>{count}</p>
            <AiFillPlusSquare
              onClick={inc}
              className=" text-white bg-blue-700 text-2xl"
            />
          </div>
        </div>
        <AiFillDelete
          onClick={() => dispatch({ type: "delete", payload: item })}
          className=" flex ml-auto text-2xl text-red-500"
        />
      </div>
    </div>
  );
};

export default Item;
