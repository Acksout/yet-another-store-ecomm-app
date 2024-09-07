import React, { useState } from "react";

const ProductListing = () => {
  // Mock data for products (3 pages, 40 items per page)
  const [products] = useState(
    Array(120)
      .fill()
      .map((_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: Math.floor(Math.random() * 100) + 1,
        images: [
          `https://picsum.photos/300?random=${index + 1}a`,
          `https://picsum.photos/300?random=${index + 1}b`,
        ],
      }))
  );

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 40; // 4 x 10 grid

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextImage = () => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product.images.length
      );
    };

    const prevImage = () => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + product.images.length) % product.images.length
      );
    };

    return (
      <div
        className="border p-4 rounded-lg shadow-md relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-40 object-cover mb-2"
        />
        {isHovered && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1"
            >
              &#8250;
            </button>
          </>
        )}
        <h3 className="font-semibold">{product.name}</h3>
        <p>${product.price}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        {[1, 2, 3].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
