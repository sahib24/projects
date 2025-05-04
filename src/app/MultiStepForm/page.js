"use client";

import React, { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    comment: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("---- Submitted Data ----");
    console.log(`Name: ${formData.name}`);
    console.log(`Age: ${formData.age}`);
    console.log(`Email: ${formData.email}`);
    console.log(`Phone: ${formData.phone}`);
    console.log(`Comment: ${formData.comment || "None"}`);
    console.log(
      `Rating: ${formData.rating} ${formData.rating > 1 ? "stars" : "star"}`
    );

    setIsSubmitted(true);
  };

  const progress = (step / 3) * 100;

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4"> Thank You!</h2>
        <p className="text-gray-700 mb-6">
          Your form has been submitted successfully.
        </p>

        <div className="text-left space-y-2">
          <p>
            <span className="font-semibold">Name:</span> {formData.name}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {formData.age}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {formData.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {formData.phone}
          </p>
          <p>
            <span className="font-semibold">Comment:</span>{" "}
            {formData.comment || "None"}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {formData.rating}{" "}
            {formData.rating > 1 ? "stars" : "star"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <div className="mb-6">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">Step {step} of 3</p>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
              required
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
              required
            />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Review</h2>

            <textarea
              name="comment"
              placeholder="Leave a comment..."
              value={formData.comment}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded"
              rows="4"
            />

            <div className="mt-4">
              <label className="font-semibold mb-2 block">Rating:</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={`text-2xl ${
                      formData.rating >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    onClick={() => setFormData({ ...formData, rating: star })}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
