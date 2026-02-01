import React, {useContext} from 'react'
import { ShopContext} from '../../Context/ShopContext';
import Item from '../Item/Item';
import { IoIosArrowDropdown } from "react-icons/io";

const ShopCategory = (props) => {
    const {data_product} = useContext(ShopContext);

  return (
    <div className='mx-auto mb-24'>
      <img className='h-[40vh] w-full object-cover mx-auto mb-4' src={props.banner}/>
      <div className='flex justify-between items-center mb-8'>
        <p className='text-2xl'>
            <span>Showing 1-12</span> out of 48 products
        </p>
        <div className='flex justify-center items-center gap-2 text-2xl'>
            Sort by <IoIosArrowDropdown size={24} />
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-content-center place-items-center gap-4'>
        {data_product.map((item, i) =>{
            if (props.category===item.category){
                return <Item key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price} />
            }
            else{
                return null;
            }
        })}
      </div>
      <button className='flex justify-center items-center px-6 py-2 mt-24 mx-auto rounded-xl bg-gray-400'>
        Explore More
      </button>
    </div>
  )
}

export default ShopCategory
