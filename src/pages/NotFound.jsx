import React from "react";
import { Link } from "react-router-dom";
import { Btn_main } from "../components/client/Layout/Items/Buttons/Btn_main";

export function ErrorSection7() {
  return (
    <div className="h-[800px] w-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url("https://streamvid.gavencreative.com/wp-content/uploads/2023/04/kindpng_621510-1.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img 
        src="https://streamvid.gavencreative.com/wp-content/uploads/2023/04/404.png" 
        alt="404 Error" 
        className="mb-10 w-[30%] max-w-full" 
      />
      <p className="text-semibold text-white text-2xl sm:text-3xl">
        Oops! This page can’t be found anywhere.
      </p>
      <p className="text-semibold text-gray-500 text-base sm:text-lg mt-2"> 
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to={"/client/home/a"} className="mt-10 w-full sm:w-auto">
        <Btn_main text="Back to Home"/>
      </Link>
    </div>
  );
}

export default ErrorSection7;
