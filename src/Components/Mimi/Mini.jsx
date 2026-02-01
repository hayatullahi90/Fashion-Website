import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

const Mini = (props) => {
    const {product} = props;
  return (
    <div className='flex mb-8 gap-2 items-center text-gray-600 text-xl lg:mx-20 md:mx-16 sm:mx-8'>
      HOME <IoIosArrowDropdown size={24} /> SHOP <IoIosArrowDropdown size={24} /> 
      {product.category} <IoIosArrowDropdown size={24} /> {product.name}
    </div>
  )
}

export default Mini
