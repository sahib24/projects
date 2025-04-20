"use client";

import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "London"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "Java", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheet",
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Style Syntax",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What is the color of the sky on a clear day?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Blue",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
    answer: "Blue Whale",
  },
];

const initialProducts = [
  { id: 1, name: "Laptop", price: 100 },
  { id: 2, name: "Desktop", price: 90 },
  { id: 3, name: "Mobile", price: 50 },
  { id: 4, name: "Camera", price: 40 },
  { id: 5, name: "Ps5", price: 45 },
  { id: 6, name: "Pendrive", price: 20 },
  { id: 7, name: "Airpot", price: 25 },
  { id: 8, name: "Cable", price: 5 },
  { id: 9, name: "Joystick", price: 15 },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const addToCart = (product) => {
    const updatedProducts = products.filter((p) => p.id !== product.id);
    setProducts(updatedProducts);
    setFilteredProducts(
      updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== productToRemove.id);
    setCart(updatedCart);
    const updatedProducts = [...products, productToRemove];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const increaseQuantity = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setError(
      newText.length > 100
        ? "Character limit exceeded (100 characters max)"
        : ""
    );
  };

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 px-3 py-1 text-sm border border-gray-300"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-red-500 text-white px-4 py-1 hover:bg-red-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No Product Found</p>
        )}
      </div>

      <h1 className="text-xl font-bold mb-4">Cart</h1>

      <ul className="space-y-2">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>
              {item.name} - ${item.price}
            </span>
            <div className="flex items-center space-x-2 mt-2">
              <button
                onClick={() => decreaseQuantity(item)}
                className="bg-red-300 px-2 py-1 rounded"
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => increaseQuantity(item)}
                className="bg-green-300 px-2 py-1 rounded"
              >
                +
              </button>
            </div>

            <p className="ml-4">
              Total: ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(item)}
              className="bg-red-500 text-white px-3 py-1 hover:bg-red-600 transition"
            >
              Remove
            </button>
          </li>
        ))}
        {cart.length === 0 && <p>No Cart Found</p>}
      </ul>

      {cart.length > 0 && (
        <div className="mt-4 text-lg font-semibold">
          Total: $
          {cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </div>
      )}

      <div className="mt-10 mb-5">
        <p>Message Area</p>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
          rows="4"
          cols="50"
        ></textarea>
        <div>
          <p>Character count: {text.length}</p>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-10 p-6 rounded-2xl  text-center">
        {showScore ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Quiz Completed </h2>
            <p className="text-xl">
              Your Score: {score} / {questions.length}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="text-lg mb-4">
              {questions[currentQuestion].question}
            </p>
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-red-500 text-white px-2 py-2 "
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
