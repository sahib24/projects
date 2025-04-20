"use client";
import React, { useState } from "react";

const ExpandButton = () => {
  const [width, setWidth] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const increaseWidth = () => {
    if (width < 100) {
      setWidth(width + 20);
    }
  };

  const decreaseWidth = () => {
    if (width > 0) {
      setWidth(width - 20);
    }
  };

  const handleClick = (clickedIndex) => {
    if (openIndex === clickedIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(clickedIndex);
    }
  };

  const items = [
    {
      question: "How to learn UI/UX?",
      answer:
        "Start by understanding the fundamentals of both User Experience (UX) and User Interface (UI) design.",
    },
    {
      question: "What is Acme?",
      answer:
        "Acme is a platform that helps anyone learn UX/UI design principles.",
    },
    {
      question: "Is it free?",
      answer:
        "The course will cover fundamentals of UX/UI, including: Design Thinking, Wireframing, and Visual design principles.",
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4 space-y-8">
      <div className="flex flex-col items-center justify-start p-6 bg-gray-50 rounded-lg shadow">
        <div className="w-full">
          <div className="w-full h-6 bg-gray-300 rounded">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-500 rounded"
              style={{ width: `${width}%` }}
            ></div>
          </div>
          <div className="mt-6 flex justify-center gap-6">
            <button
              className="px-5 py-2 bg-green-600 text-white font-medium rounded"
              onClick={increaseWidth}
            >
              Increase
            </button>
            <button
              className="px-5 py-2 bg-red-600 text-white font-medium rounded"
              onClick={decreaseWidth}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((Item, index) => (
          <div key={index} className="bg-white shadow p-4 rounded">
            <div
              onClick={() => handleClick(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <span className="font-medium text-black">{Item.question}</span>
              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700 transition-all duration-300">
                {Item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandButton;
