import React from "react";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="flex lg:mx-20 md:mx-16 sm:mx-8 mb-38">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <img className="h-[20vh]" src={product.image} alt="" />
          <img className="h-[20vh]" src={product.image} alt="" />
          <img className="h-[20vh]" src={product.image} alt="" />
          <img className="h-[20vh]" src={product.image} alt="" />
        </div>
        <div className="h-[30vh]">
          <img className="w-100 mx-4" src={product.image} alt="" />
        </div>
      </div>
      <div className="h-[50vh] w-80 flex flex-col ml-8 mt-8">
        <h1 className="text-gray-600 text-3xl font-bold">{product.name}</h1>
        <div className=" ">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <p className="text-stone-600 text-xl mt-2">{122}</p>
        </div>
        <div className="flex gap-8 font-xl font-bold mt-2">
          <div className="text-gray-600 line line-through text-xl">${product.old_price}</div>
          <div className="text-orange-800 text-xl">${product.new_price}</div>
        </div>
        <div className="text-xl mt-2">
          Along skirt with pleating and bold hand fley blouse with collar neck.
        </div>
        <div>
          <h1 className="text-gray-600 text-3xl font-bold mt-10">Select Size</h1>
          <div className="flex gap-8 mt-6">
            <div className="px-4 py-2 bg-stone-500 font-bold b-1 rounded-xl cursor-pointer text-white">S</div>
            <div className="px-4 py-2 bg-stone-500 font-bold b-1 rounded-xl cursor-pointer text-white">M</div>
            <div className="px-4 py-2 bg-stone-500 font-bold b-1 rounded-xl cursor-pointer text-white">L</div>
            <div className="px-4 py-2 bg-stone-500 font-bold b-1 rounded-xl cursor-pointer text-white">XL</div>
            <div className="px-4 py-2 bg-stone-500 font-bold b-1 rounded-xl cursor-pointer text-white">XXL</div>
          </div>
        </div>
        <button className="mt-4 py-2 text-white bg-red-800 w-40 font-bold cursor-pointer">ADD TO CART</button>
        <p className="mt-4">
          <span className="text-xl font-bold">Category :</span> Women , T-Shirt, Crop Top
        </p>
        <p>
          <span className="text-xl font-bold">Tags :</span> Modern, Lastest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
