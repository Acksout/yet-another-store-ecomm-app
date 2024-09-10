import React from "react";

const ProductCard = ({ product }) => {
  const { name, description, price, image, discount } = product;

  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">
          {discount ? (
            <>
              <span className="line-through text-gray-500">
                ${price.toFixed(2)}
              </span>
              {" / "}
              <span className="text-red-500">
                ${discountedPrice.toFixed(2)}
              </span>
            </>
          ) : (
            `$${price.toFixed(2)}`
          )}
        </span>
        {discount && (
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            {Math.round(discount)}% OFF
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
