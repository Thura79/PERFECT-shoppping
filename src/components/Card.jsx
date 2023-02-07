import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/Context'

const Card = ({product}) => {
  const {dispatch} = useStateContext();
  return (
    <>
        <div className="w-[230px] flex flex-col border h-[280px] rounded px-5 py-4 shadow">
            <img src={product?.image} className=" block mx-auto h-[100px] mb-3" />
            <div className=" flex flex-col gap-2">
                <h1 className=' truncate'>{product?.title}</h1>
                <div className="flex items-center gap-2">
                    <AiFillStar className=' text-yellow-700' />
                <p className=' text-gray-500 text-sm'>({product?.rating?.rate})</p>
                
                </div>
                <p>$ {product?.price}</p>
                
            </div>
            <div className=" flex mt-auto">
                    <button onClick={() => dispatch({type: "add-cart", payload: product})} className=' bg-blue-900 text-white px-3 py-2 rounded text-sm transition transform hover:scale-105'>Add to Cart</button>
                    <Link to={`/detail/${product?.id}`}>
                      <button className=' bg-black text-white px-3 py-2 rounded text-sm ml-3  transition transform hover:scale-105'>Details</button>
                    </Link>
                </div>
        </div>
    </>
  )
}

export default Card