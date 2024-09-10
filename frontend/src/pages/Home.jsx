import React from "react";
import Header from ".././components/Header";
import Footer from ".././components/Footer";
import ProductCard from ".././components/ProductCard";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="bg-[#ECF0F1]">
        <section className="bg-[#2C3E50] text-[#ECF0F1] py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to YASE</h1>
            <p className="text-xl mb-8">
              Discover amazing products at unbeatable prices
            </p>
            <button className="bg-[#E67E22] text-[#ECF0F1] px-6 py-3 rounded-full hover:bg-[#3498DB] transition-colors">
              Shop Now
            </button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#2C3E50]">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard
                product={{
                  name: "Sample Product",
                  description: "This is a placeholder product description.",
                  price: 29.99,
                  image: "https://via.placeholder.com/300x200",
                  discount: 10,
                }}
              />
              <ProductCard
                product={{
                  name: "Another Product",
                  description: "Another placeholder product description.",
                  price: 39.99,
                  image: "https://via.placeholder.com/300x200",
                  discount: null,
                }}
              />
              <ProductCard
                product={{
                  name: "Third Product",
                  description: "Yet another placeholder product.",
                  price: 49.99,
                  image: "https://via.placeholder.com/300x200",
                  discount: 15,
                }}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#3498DB] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#ECF0F1]">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 bg-[#E74C3C] text-[#ECF0F1] rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
            <p className="text-xl mb-8">
              Get 20% off on all products this week!
            </p>
            <button className="bg-[#27AE60] text-[#ECF0F1] px-6 py-3 rounded-full hover:bg-[#2C3E50] transition-colors">
              Claim Offer
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
