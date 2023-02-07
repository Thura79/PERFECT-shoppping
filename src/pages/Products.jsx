import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import { useStateContext } from '../context/Context'

const Products = () => {
    const {state: {products}} = useStateContext();
    
  return (
    <div className=' flex flex-wrap gap-5 justify-center items-center my-10'>
        {
            products?.length > 0 ? products?.map(product => <Card key={product?.id} product={product} />) : <Spinner/>
        }
    </div>
  )
}

export default Products