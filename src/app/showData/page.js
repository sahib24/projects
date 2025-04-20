"use client";
import React, { useState } from "react";

export default function ShowData() {
  const products = [
    { id: "A11", name: "Podojat", category: "Book", price: 100 },
    { id: "A12", name: "Mullan", category: "Book", price: 150 },
    { id: "B11", name: "Watch", category: "Electric", price: 1000 },
    { id: "B12", name: "Charging Cable", category: "Electric", price: 300 },
    { id: "C11", name: "Toyota", category: "Car", price: 100000 },
    { id: "C12", name: "Volvo", category: "Car", price: 150000 },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <>
      <nav className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-center space-x-4">
          <button
            onClick={() => filterProducts("All")}
            className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white"
          >
            All
          </button>
          <button
            onClick={() => filterProducts("Book")}
            className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white"
          >
            Book
          </button>

          <button
            onClick={() => filterProducts("Electric")}
            className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white"
          >
            Electric
          </button>
          <button
            onClick={() => filterProducts("Car")}
            className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white"
          >
            Car
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 shadow-md">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
