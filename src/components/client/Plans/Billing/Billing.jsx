import React, { useState } from "react";

export const Billing = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCVC] = useState("");

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length > 16) value = value.slice(0, 16); 
    const formattedValue = value
      .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4")
      .trim();
    setCardNumber(formattedValue);
  };

  const handleCVCChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length > 3) value = value.slice(0, 3); 
    setCVC(value);
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center w-screen">
      <div className="max-w-4xl mt-10 px-6 py-8 rounded-lg min-w-[80%]">
        
        <div className="bg-blue-100 text-blue-700 text-sm px-4 py-3 rounded-md mb-4">
          A Payment Gateway must be set up before any payments will be processed.
        </div>
        
        <div className="bg-[#1c1c47] border border-blue-600 px-4 py-4 rounded-md mb-6">
          <h2 className="text-lg font-bold mb-2">Membership Level Change</h2>
          <p className="text-gray-300">
            You have selected the <strong className="text-white">Diamond Plan</strong> membership level.
          </p>
          <ul className="text-sm list-disc list-inside text-gray-400 mt-2">
            <li>Unlimited access to thousands of shows and movies with limited ads</li>
            <li>Watch on your favorite devices</li>
            <li>Switch plans or cancel anytime</li>
            <li>Download from thousands of titles to watch offline</li>
          </ul>
          <p className="text-sm text-gray-400 mt-4">
            The price for membership is <strong className="text-white">$9.99 per Month</strong>.
          </p>
        </div>

        <div className="bg-yellow-100 text-yellow-700 text-sm px-4 py-3 rounded-md mb-6">
          You are logged in as <strong>koreon</strong>. If you would like to use a different account for this membership, log out now.
        </div>
        
        <div className="flex gap-8 w-full max-[550px]:flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Billing Address</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="address1" className="block text-sm">Address 1</label>
                <input
                  type="text"
                  id="address1"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="address2" className="block text-sm">Address 2</label>
                <input
                  type="text"
                  id="address2"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm">City</label>
                <input
                  type="text"
                  id="city"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="state" className="block text-sm">State</label>
                  <input
                    type="text"
                    id="state"
                    className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="postalCode" className="block text-sm">Postal Code</label>
                  <input
                    type="text"
                    id="postalCode"
                    className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm">Country</label>
                <select
                  id="country"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                >
                  <option>United States</option>
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm">Phone</label>
                <input
                  type="text"
                  id="phone"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="confirmEmail" className="block text-sm">Confirm Email</label>
                <input
                  type="email"
                  id="confirmEmail"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                />
              </div>
            </form>
          </div>

          {/* Payment Information */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Payment Information We Accept</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="#### #### #### ####"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="expirationDate" className="block text-sm">Expiration Date</label>
                  <select
                    id="expirationMonth"
                    className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label htmlFor="expirationYear" className="block text-sm">Year</label>
                  <select
                    id="expirationYear"
                    className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                  >
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="cvc" className="block text-sm">Security Code (CVC)</label>
                <input
                  type="text"
                  id="cvc"
                  value={cvc}
                  onChange={handleCVCChange}
                  placeholder="###"
                  className="w-full bg-[#12123a] border border-gray-600 rounded-md px-4 py-2 text-sm"
                />
              </div>

              <button className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-500 transition-colors">
                Submit and Check Out
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};