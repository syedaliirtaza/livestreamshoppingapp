import React from "react";
import Link from "next/link";

function signup() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <style>
        {`
        body {
          background-image: linear-gradient(to bottom right, #FEC163, #DE4313);
        }
      `}
      </style>
      <div className="max-w-xl mx-auto bg-white shadow-md rounded px-8 py-6 sm:px-10 sm:py-8">
        <form
          action="https://send.pageclip.co/QL4zR6QGILiCb55sRChBydgPTNBNSXq1/signup"
          class="pageclip-form"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Baskett Signup
            </h2>
            <p className="text-gray-600">
              Be the first to sign up to baskett and get exclusive access
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-gray-700 font-bold mb-2"
            >
              Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="checkpoint"
              className="block text-gray-700 font-bold mb-2"
            >
              Are you a seller or buyer?
            </label>
            <select
              name="checkpoint"
              id="checkpoint"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select an option</option>
              <option>Seller</option>
              <option>Buyer</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 font-bold mb-2"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Lahore"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signup;
