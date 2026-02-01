import React from "react";
import data_product from "../../data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-2 h-[90vh]">
      <h1 className="text-gray-800 mt-10 font-bold text-4xl">POPULAR IN WOMEN</h1>
      <hr className="w-40 h-2 rounded-xl bg-gray-600"/>
      <div className="mt-10 flex">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
