import React from "react";

export function ErrorSection7() {
  return (
    <div className="h-screen grid place-items-center text-center px-8">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-20 h-20 mx-auto"
        >
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18a1 1 0 100 2 1 1 0 000-2zm1 14h-2v-8h2v8z" />
        </svg>
        <h1 className="mt-10 text-3xl leading-snug text-blue-gray-700 md:text-4xl">
          Error 404 <br /> It looks like something went wrong.
        </h1>
        <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          Don&apos;t worry, our team is already on it. Please try refreshing the
          page or come back later.
        </p>
        <button
          onClick={() => window.location.href = "/"}
          className="w-full px-4 py-2 bg-gray-500 text-white rounded-md md:w-[8rem]"
        >
          Back Home
        </button>
      </div>
    </div>
  );
}

export default ErrorSection7;
