import React from "react";

const Header = () => {
  // Sample data for categories, popular items, and sale items
  const categories = ["Electronics", "Clothing", "Home & Garden", "Books"];
  const popularItems = [
    { id: 1, name: "Smartphone", price: "$599" },
    { id: 2, name: "Wireless Earbuds", price: "$129" },
    { id: 3, name: "Laptop", price: "$999" },
  ];
  const saleItems = [
    { id: 1, name: "T-Shirt", originalPrice: "$29", salePrice: "$19" },
    { id: 2, name: "Sneakers", originalPrice: "$89", salePrice: "$69" },
    { id: 3, name: "Backpack", originalPrice: "$59", salePrice: "$39" },
  ];

  return (
    <header className="bg-gray-100">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Shop the latest trends and find your perfect style.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="flex justify-center">
            <img src="https://picsum.photos/500" alt="image" />
          </div>
        </div>

        {/* Popular Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                {category}
              </div>
            ))}
          </div>
        </section>
        {/* Featured Items Carousel */}
        <section className="mb-16 overflow-hidden">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Items
          </h2>
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex-shrink-0 w-64 mr-4 snap-start">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img
                      className="w-full h-40 bg-pink-200 mb-4 rounded"
                      src="https://picsum.photos/200"
                      alt="image"
                    />
                    <h3 className="text-lg font-semibold">
                      Featured Item {index + 1}
                    </h3>
                    <p className="text-gray-600">$99.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Items */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Items
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  className="w-full h-40 bg-gray-200 mb-4 rounded"
                  src="https://picsum.photos/200/400"
                  alt="image"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sale Items */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sale Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {saleItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  className="w-full h-40 bg-gray-200 mb-4 rounded"
                  src="https://picsum.photos/200/400"
                  alt="image"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 line-through">
                  {item.originalPrice}
                </p>
                <p className="text-red-600 font-bold">{item.salePrice}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
