import { Image } from "antd";
import { Loader } from "../../../../components/admin/Layout/Animation/Loading";
import { FaTrashAlt } from "react-icons/fa";

export function AddForm({handleAdd, formRef, handleChange, picture, setPicture, AisLoading}) {
  return (
    <div className="w-screen h-screen flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-30">
      <form
        onSubmit={handleAdd}
        ref={formRef}
        className="bg-white rounded-md shadow-md space-y-4 w-[600px] p-10 relative"
      >
        <h2 className="text-xl font-bold mb-6">Add New User</h2>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="picture"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-200"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16V4m0 0L3.5 7.5M7 4l3.5 3.5M21 14v6m-4-6v6m-6-6v6m6-6h-4"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
            </div>
            <input
              id="picture"
              type="file"
              className="hidden"
              onChange={handleChange}
            />
          </label>
        </div>

        {picture && (
          <div className="relative border p-3 rounded-xl px-3 transition-all duration-500">
            <Image
              width={90}
              height={60}
              src={URL.createObjectURL(picture)}
              alt="Uploaded"
            />
            <button
              type="button"
              onClick={() => setPicture(null)}
              className="absolute top-0 right-0 h-full flex items-center justify-center text-white p-2 rounded-full"
            >
              <FaTrashAlt className="text-lg text-red-400" />
            </button>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          {AisLoading ? <Loader /> : "Submit"}
        </button>
      </form>
    </div>
  );
}
