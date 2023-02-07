import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Empty from "../components/Empty";
import Item from "../components/Item";
import { useStateContext } from "../context/Context";

const Acart = () => {
  const { state, dispatch } = useStateContext();
  const navigate = useNavigate();
  const { cart } = state;
  let [total, settotal] = useState(0);
  console.log(cart);

  const clear = () => {
    dispatch({ type: "clear" });
    navigate("/success");
  };

  const incPrice = (price) => {
    settotal(total + price);
  };

  const decPrice = (price) => {
    settotal(total - price);
  };

  useEffect(() => {
    settotal(cart?.reduce((pv, cu) => pv + cu.price * cu.qty, 0));
  }, [cart]);
  return (
    <>
      {cart?.length > 0 ? (
        <div className=" flex justify-between items-start">
          <div className=" w-[60%]">
            {cart?.map((item) => (
              <Item
                key={item?.id}
                item={item}
                incPrice={incPrice}
                decPrice={decPrice}
              />
              // <ItemCart key={item?.id} incPrice={incPrice} decPrice={decPrice} item={item} />
            ))}
          </div>
          <div className=" w-[30%] border rounded shadow-xl bg-white my-5 p-10">
            <h1 className=" text-3xl">Total - $ {total.toFixed(2)}</h1>
            <button
              onClick={clear}
              className=" mt-5 bg-blue-900 text-white px-5 py-2  border rounded-lg "
            >
              Check Out
            </button>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Acart;
