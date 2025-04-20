import Image from "next/image";

export default function BlogCards() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-xs relative group ">
          <Image
            src="/one.PNG"
            width={400}
            height={250}
            alt="Tech"
            className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105  "
          />
          <div className="p-4">
            <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Technology
            </span>
            <h2 className="font-bold text-lg mt-2">New In 2022 Tech</h2>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex items-center mt-4">
              <Image
                src="/1.jpg"
                width={100}
                height={100}
                alt="Jane Doe"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 text-sm">
                <p className="text-black font-bold">Jane Doe</p>
                <p className="text-gray-700">2h ago</p>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-xs relative group">
          <Image
            src="/two.PNG"
            width={400}
            height={250}
            alt="Food"
            className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="p-4">
            <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Food
            </span>
            <h2 className="font-bold text-lg mt-2">Delicious Food</h2>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex items-center mt-4">
              <Image
                src="/2.jpg"
                width={100}
                height={100}
                alt="Jony Doe"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 text-sm">
                <p className="text-black font-bold">Jony Doe</p>
                <p className="text-gray-700">Yesterday</p>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-xs relative group">
          <Image
            src="/three.PNG"
            width={400}
            height={250}
            alt="Car"
            className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="p-4">
            <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Automobile
            </span>
            <h2 className="font-bold text-lg mt-2">
              Race To Your Heart Content
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex items-center mt-4">
              <Image
                src="/3.jpg"
                width={100}
                height={100}
                alt="John Doe"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 text-sm">
                <p className="text-black font-bold">John Doe</p>
                <p className="text-gray-700">2d ago</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";

// export default function MultiStepForm() {
//   const [step, setStep] = useState(1);
//   const totalSteps = 3;

//   const stepLabels = ["Personal Info", "Contact Info", "Review"];

//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const nextStep = () => {
//     if (step < totalSteps) {
//       setStep(step + 1);
//     }
//   };

//   const prevStep = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   const progressWidth = `${(step / totalSteps) * 100}%`;

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl">
//       <div className="text-center mb-4 font-medium text-gray-600">
//         {stepLabels.map((label, index) => (
//           <span
//             key={index}
//             className={`${
//               index + 1 === step ? "text-blue-600 font-semibold" : ""
//             }`}
//           >
//             {label}
//             {index < stepLabels.length - 1 && (
//               <span className="mx-2 text-gray-400">→</span>
//             )}
//           </span>
//         ))}
//       </div>

//       <div className="mb-6">
//         <div className="w-full h-2 bg-gray-200 rounded-full">
//           <div
//             className="h-2 bg-blue-500 rounded-full transition-all duration-300"
//             style={{ width: progressWidth }}
//           ></div>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {step === 1 && (
//           <>
//             <label className="block mb-2 font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               placeholder="Enter your name"
//               onChange={handleChange}
//               className="w-full p-2 mb-4 border rounded"
//               required
//             />

//             <label className="block mb-2 font-medium">Age</label>
//             <input
//               type="number"
//               name="age"
//               value={formData.age}
//               placeholder="Enter your age"
//               onChange={handleChange}
//               className="w-full p-2 mb-4 border rounded"
//               required
//             />
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <label className="block mb-2 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               placeholder="Enter your email"
//               onChange={handleChange}
//               className="w-full p-2 mb-4 border rounded"
//               required
//             />

//             <label className="block mb-2 font-medium">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               placeholder="Enter your phone number"
//               onChange={handleChange}
//               className="w-full p-2 mb-4 border rounded"
//               required
//             />
//           </>
//         )}

//         {step === 3 && (
//           <div className="text-gray-700 space-y-3">
//             <div>
//               <strong>Name:</strong> {formData.name}
//             </div>
//             <div>
//               <strong>Age:</strong> {formData.age}
//             </div>
//             <div>
//               <strong>Email:</strong> {formData.email}
//             </div>
//             <div>
//               <strong>Phone:</strong> {formData.phone}
//             </div>
//           </div>
//         )}

//         <div className="flex justify-between mt-6">
//           {step > 1 && (
//             <button
//               type="button"
//               onClick={prevStep}
//               className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//             >
//               Back
//             </button>
//           )}

//           {step < totalSteps ? (
//             <button
//               type="button"
//               onClick={nextStep}
//               className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               type="submit"
//               className="ml-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }
