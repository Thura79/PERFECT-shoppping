import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getData } from "../api";
import Spinner from "../components/Spinner";
import { useStateContext } from "../context/Context";

const Detail = () => {
  let { id } = useParams();
  const {dispatch} = useStateContext();

  const [detail, setDetail] = useState({});
  const [rest, setrest] = useState([]);
  const navigate = useNavigate();

  const getDetail = async () => {
    const data = await getData(`/products/${id}`);
    setDetail(data);
  };

  const getRest = async () => {
    const data = await getData(`/products/category/${detail.category}`);
    setrest(data);
  };

  useEffect(() => {
    getDetail(), getRest();
  }, [detail]);

  const now = () => {
    dispatch({type: 'add-cart', payload: detail});
    navigate('/success')
  }
  return (
    <>
    {
      rest?.length > 0 ? <div className=" h-screen mb-10">
      <div className=" my-20">
        <div className=" flex gap-10">
          <img
            src={detail?.image}
            className="h-96 border rounded shadow-lg p-5"
          />
          <div className=" flex flex-col gap-5 py-5">
            <span className=" font-bold bg-yellow-700 text-white border rounded-xl w-52 text-center capitalize px-5 py-2">
              {detail?.category}
            </span>
            <p className=" text-3xl">{detail?.title}</p>
            <p className=" tracking-widest text-gray-400">
              {detail?.description}
            </p>
            <p className=" flex items-center">
              <AiFillStar className=" text-yellow-700" />({detail?.rating?.rate}
              )
            </p>
            <p className=" text-xl">price - $ {detail?.price}</p>
            <div className="flex">
              <button onClick={() => dispatch({type: 'add-cart', payload: detail})} className=" bg-blue-900 text-white px-5 py-2 shadow rounded border">
                Add to Cart
              </button>
              <Link to={'/success'}>
              <button onClick={now} className=" bg-gray-900 text-white px-5 py-2 shadow rounded border ml-5">
                Buy now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className=" text-2xl font-bold">You may also like</h1>

        <div className=" flex flex-wrap gap-5 my-20">
          {rest?.map((item) =>
            item?.id !== detail?.id && (
              <Link key={item?.id} to={`/detail/${item?.id}`}>

                <div className=" border rounded shadow" key={item?.id}>
                  <img src={item?.image} className="h-48 p-5" />
                </div>
               </Link>
            )
          )}
        </div>
      </div>
    </div> : <Spinner/>
    }
    </>
  );
};

export default Detail;
