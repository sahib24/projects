// "use client";
// import React, { useState } from "react";

// export default function Hello() {
//   const [price, setPrice] = useState(9);
//   const [priceH2, setPriceH2] = useState(49);
//   const [priceP, setPriceP] = useState(99);
//   const [priceH3, setPriceH3] = useState(999);

//   const increaseHandle = () => {
//     setPrice((prev) => prev + 1);
//     setPriceH2(priceH2 + 1);
//     setPriceP(priceP + 1);
//     setPriceH3(priceH3 + 1);
//   };

//   const decreaseHandle = () => {
//     if (price > 0) {
//       setPrice(price - 1);
//     }

//     if (priceH2 > 0) {
//       setPriceH2(priceH2 - 1);
//     }

//     if (priceP > 0) {
//       setPriceP(priceP - 1);
//     }
//     if (priceH3 > 0) {
//       setPriceH3(priceH3 - 1);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen gap-4">
//       <h1>Price : {price}</h1>
//       <div className="flex gap-4">
//         <button
//           onClick={increaseHandle}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Increase
//         </button>
//         <button
//           onClick={decreaseHandle}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Decrease
//         </button>
//       </div>
//       <div className="flex flex-col items-center gap-2 mt-4">
//         <h2 className="text-xl">Price : {priceH2}</h2>
//         <p className="text-sl">Price : {priceP}</p>
//         <h3 className="text-xs">Price : {priceH3}</h3>
//       </div>
//     </div>
//   );
// }

// // "use client";

// // import React, { useState } from "react";

// // const ShoppingCart = () => {
// //   const products = [
// //     { id: 1, name: "Product 1", price: 20 },
// //     { id: 2, name: "Product 2", price: 40 },
// //     { id: 3, name: "Product 3", price: 60 },
// //   ];

// //   const [cart, setCart] = useState([]);

// //   const addToCart = (product) => {
// //     setCart((prevCart) => [...prevCart, product]);
// //   };

// //   const removeFromCart = (productId) => {
// //     const index = cart.findIndex((item) => item.id === productId);
// //     if (index !== -1) {
// //       const updatedCart = [...cart];
// //       updatedCart.splice(index, 1);
// //       setCart(updatedCart);
// //     }
// //   };

// //   return (
// //     <div className="shopping-cart">
// //       <h2 className="text-xl font-bold mb-4">Products</h2>
// //       <div className="product-list mb-8">
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className="product p-4 border rounded shadow mb-4"
// //           >
// //             <h3 className="text-lg font-semibold">{product.name}</h3>
// //             <p className="text-gray-500">Price: ${product.price}</p>
// //             <button
// //               className="bg-blue-500 text-white p-2 rounded mt-2"
// //               onClick={() => addToCart(product)}
// //             >
// //               Add to Cart
// //             </button>
// //           </div>
// //         ))}
// //       </div>

// //       <h2 className="text-xl font-bold mb-4">Cart</h2>
// //       <div className="cart">
// //         {cart.length === 0 ? (
// //           <p>Your cart is empty.</p>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //             {cart.map((item, index) => (
// //               <div key={index} className="card p-4 border rounded shadow-sm">
// //                 <h3 className="text-lg font-semibold">{item.name}</h3>
// //                 <p className="text-gray-500">Price: ${item.price}</p>
// //                 <button
// //                   className="bg-red-500 text-white p-2 rounded mt-2"
// //                   onClick={() => removeFromCart(item.id)}
// //                 >
// //                   Remove
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShoppingCart;

// "use client";

// import React, { useState } from "react";

// const questions = [
//   {
//     question: "What is the capital of France?",
//     options: ["Berlin", "Madrid", "Paris", "London"],
//     answer: "Paris",
//   },
//   {
//     question: "Which language runs in a web browser?",
//     options: ["Python", "C", "Java", "JavaScript"],
//     answer: "JavaScript",
//   },
//   {
//     question: "What does CSS stand for?",
//     options: [
//       "Central Style Sheet",
//       "Cascading Style Sheets",
//       "Computer Style System",
//       "Creative Style Syntax",
//     ],
//     answer: "Cascading Style Sheets",
//   },
//   {
//     question: "What is the color of the sky on a clear day?",
//     options: ["Red", "Blue", "Green", "Yellow"],
//     answer: "Blue",
//   },
//   {
//     question: "What is the largest mammal on Earth?",
//     options: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
//     answer: "Blue Whale",
//   },
// ];

// export default function QuizApp() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);

//   const handleAnswer = (selected) => {
//     if (selected === questions[currentQuestion].answer) {
//       setScore(score + 1);
//     }

//     const next = currentQuestion + 1;
//     if (next < questions.length) {
//       setCurrentQuestion(next);
//     } else {
//       setShowScore(true);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 rounded-2xl  text-center">
//       {showScore ? (
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Quiz Completed </h2>
//           <p className="text-xl">
//             Your Score: {score} / {questions.length}
//           </p>
//         </div>
//       ) : (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">
//             Question {currentQuestion + 1} of {questions.length}
//           </h2>
//           <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
//           <div className="grid gap-4">
//             {questions[currentQuestion].options.map((option, index) => (
//               <button
//                 key={index}
//                 className="bg-red-500 text-white px-2 py-2 "
//                 onClick={() => handleAnswer(option)}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
