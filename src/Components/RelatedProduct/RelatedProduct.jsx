import React from "react";
import data_product from "../../data";
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-gray-900 text-3xl font-semibold mt-14">
        Related Products
      </h1>
      <hr className="h-1 w-40 rounded-xl bg-stone-700 " />
      <div className="mt-16 flex">
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

export default RelatedProduct;
