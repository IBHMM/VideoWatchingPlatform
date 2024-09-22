import { Link } from 'react-router-dom';
import './Plans.css'

export function Plans() {

  const handlePlan = (plan) => {
    localStorage.setItem('plan', plan);
  }

  return (
    <div className="relative flex items-center justify-center w-full max-w-[2000px]">
      <div className="relative flex flex-col items-center justify-center w-[90%] gap-20 py-10 rounded-xl text-white">
        <div className="flex items-center justify-center gap-3 flex-col opacity-0 translate-y-10 animate-fade-in-up">
          <p className="text-center font-bold text-[36px] leading-tight">
            Choose The Plan That <br /> Suits For You
          </p>
          <p className="text-gray-300 text-center text-[16px]">
            We present 3 packages that you can choose to start watching various
            movies you like at <br /> low prices and according to your needs
          </p>
        </div>

        <div className="flex items-center justify-center gap-1 flex-wrap">
          <div className="flex flex-col items-center p-10 rounded-lg shadow-lg w-[300px] opacity-0 translate-y-10 animate-fade-in-up animation-delay-100">
            <div className="flex flex-col items-center justify-center mb-6">
              <p className="text-gray-300 text-[20px] font-bold uppercase">
                Free Plan
              </p>
              <p className="text-[30px] text-violet-600 font-bold">Free.</p>
            </div>
            <ul className="text-gray-300 text-start mb-6 space-y-2">
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Unlimited access to thousands of shows and movies
              </li>
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Watch on your favorite devices
              </li>
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Switch plans or cancel anytime
              </li>
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Download from thousands of titles to watch offline
              </li>
            </ul>
            <button className="mt-auto px-6 py-2 border border-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white transition-colors">
              Choose Plan
            </button>
          </div>

          <div className="flex flex-col items-center bg-[#151539] p-10 rounded-lg shadow-lg w-[300px] opacity-0 translate-y-10 animate-fade-in-up animation-delay-200">
            <div className="flex flex-col items-center justify-center mb-6">
              <p className="text-gray-300 text-[20px] font-bold uppercase">
                Diamond Plan
              </p>
              <p className="text-[30px] text-violet-600 font-bold">$9.99</p>
              <p className="text-gray-300 text-[16px]">per Month</p>
            </div>
            <ul className="text-gray-300 text-start mb-6 space-y-2">
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Unlimited access to thousands of shows and movies with limited
                ads
              </li>
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Watch on your favorite devices
              </li>
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Switch plans or cancel anytime
              </li>
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Download from thousands of titles to watch offline
              </li>
            </ul>
            <Link 
              to={"/client/home/billing"}
              onClick={() => handlePlan('diamond')}
              className="mt-auto px-6 py-2 border border-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white transition-colors">
              Choose Plan
            </Link>
          </div>

          <div className="flex flex-col items-center p-10 rounded-lg shadow-lg w-[300px] opacity-0 translate-y-10 animate-fade-in-up animation-delay-300">
            <div className="flex flex-col items-center justify-center mb-6">
              <p className="text-gray-300 text-[20px] font-bold uppercase">
                Platinum Plan
              </p>
              <p className="text-[30px] text-violet-600 font-bold">$39.99</p>
              <p className="text-gray-300 text-[16px]">every 2 Months</p>
            </div>
            <ul className="text-gray-300 text-start mb-6 space-y-2">
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Unlimited access to thousands of shows and movies with limited
                ads
              </li>
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Watch on your favorite devices
              </li>
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Switch plans or cancel anytime
              </li>
              <li className="text-sm relative pl-4">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-500 rounded-full"></span>
                Download from thousands of titles to watch offline
              </li>
            </ul>
            <Link 
              to={"/client/home/billing"}
              onClick={() => handlePlan('platinum')}
              className="mt-auto px-6 py-2 border border-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white transition-colors">
              Choose Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
