"use client";

import React, { useState } from "react";

const FormHandling = () => {
  const fruitOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];

  const colorOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
  ];

  const hobbyOptions = [
    { value: "reading", label: "Reading" },
    { value: "traveling", label: "Traveling" },
    { value: "coding", label: "Coding" },
  ];

  const [fruit, setFruit] = useState("");
  const [color, setColor] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const [finalResult, setFinalResult] = useState(null);

  const handleFruitChange = (event) => {
    setFruit(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleHobbyChange = (event) => {
    const value = event.target.value;
    setHobbies((prev) =>
      prev.includes(value)
        ? prev.filter((hobby) => hobby !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinalResult({
      fruit: fruitOptions.find((opt) => opt.value === fruit)?.label || "",
      color: colorOptions.find((opt) => opt.value === color)?.label || "",
      hobbies: hobbies
        .map((h) => hobbyOptions.find((opt) => opt.value === h)?.label || h)
        .join(", "),
    });
  };

  return (
    <div className="flex flex-col items-center pt-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Form Handling</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-red-500 text-white p-8 rounded shadow-md w-[90%] max-w-xl"
      >
        <div>
          <p className="font-semibold mb-1">Select a fruit:</p>
          <select
            value={fruit}
            onChange={handleFruitChange}
            className="block w-full p-2 border rounded text-black"
          >
            <option value="">-- Choose an option --</option>
            {fruitOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {fruit && (
            <p className="text-green-200 mt-2">
              You selected:{" "}
              {fruitOptions.find((opt) => opt.value === fruit)?.label}
            </p>
          )}
        </div>

        <div>
          <p className="font-semibold mb-1">Select a color:</p>
          {colorOptions.map((opt) => (
            <label key={opt.value} className="block">
              <input
                type="radio"
                name="color"
                value={opt.value}
                checked={color === opt.value}
                onChange={handleColorChange}
                className="mr-2"
              />
              {opt.label}
            </label>
          ))}
          {color && (
            <p className="text-green-200 mt-2">
              You selected:{" "}
              {colorOptions.find((opt) => opt.value === color)?.label}
            </p>
          )}
        </div>

        <div>
          <p className="font-semibold mb-1">Select your hobbies:</p>
          {hobbyOptions.map((opt) => (
            <label key={opt.value} className="block">
              <input
                type="checkbox"
                value={opt.value}
                checked={hobbies.includes(opt.value)}
                onChange={handleHobbyChange}
                className="mr-2"
              />
              {opt.label}
            </label>
          ))}
          {hobbies.length > 0 && (
            <p className="text-green-200 mt-2">
              You selected:{" "}
              {hobbies
                .map((h) => hobbyOptions.find((opt) => opt.value === h)?.label)
                .join(", ")}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-white text-red-600 font-semibold px-6 py-2 rounded w-full hover:bg-red-100 transition"
        >
          Submit
        </button>

        {finalResult && (
          <div className="mt-6 p-4 border rounded bg-green-100 text-green-900">
            <h2 className="font-semibold text-lg mb-2">Submitted Data:</h2>
            <p>
              <strong>Fruit:</strong> {finalResult.fruit}
            </p>
            <p>
              <strong>Color:</strong> {finalResult.color}
            </p>
            <p>
              <strong>Hobbies:</strong> {finalResult.hobbies}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormHandling;
