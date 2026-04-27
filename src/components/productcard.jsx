import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-black text-amber-50 shadow-2xl rounded-xl p-4 hover:scale-105 duration-300">
      
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-contain"
      />

      <h2 className="mt-4 font-semibold text-lg">
        {title}
      </h2>

      <p className="text-green-600 font-bold mt-2">
        ${price}
      </p>

    </div>
  );
};

export default ProductCard;