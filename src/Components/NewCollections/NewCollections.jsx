import React from 'react'
import data_product from "../../data2"
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-2 mb-30">
      <h1 className="text-gray-800 mt-10 font-bold text-4xl">NEW COLLECTIONS</h1>
      <hr className="w-40 h-2 rounded-xl bg-gray-600"/>
      <div className="mt-10 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {data_product.map((item, i)=>{
            return (
                 <Item  key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}/>
            );
        })}
      </div>
    </div>
  )
}

export default NewCollections
