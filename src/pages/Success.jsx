import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className=' flex flex-col w-[50%] mx-auto border bg-gray-600 p-10 justify-center gap-7 rounded shadow-md items-center mt-20'>
        <h1 className=' text-5xl text-white'>Thanks for Purchasing</h1>
        <Link to={'/'}>
        <button className=' px-5 py-2 rounded bg-yellow-900 text-white'>Go to shopping</button>
        </Link>
    </div>
  )
}

export default Success