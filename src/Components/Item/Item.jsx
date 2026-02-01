import React from 'react'
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='w-[30vh] hover:scale-105 transition-all duration-300 cursor-pointer'>
      <Link to={`/product/${props.id}`}><img className='h-60 w-48' src={props.image} alt=''/></Link>
      <p className='my-2 mx-0'>{props.name}</p>
      <div className='flex justify-between'>
        <div className='text-gray-600 text-xl font-bold'>
            ${props.new_price}
        </div>
        <div className='text-gray-600 text-xl line-through font-medium'>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item;
