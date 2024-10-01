import { useSelector } from "react-redux";
import "./Contact.css";
import { useContactMutation } from "../../../../redux/api/Authentication";
import { useEffect, useState } from "react";
import message from "antd/es/message";
import { Form } from "react-router-dom";

export function Contact() {
    const user = useSelector((state) => state.user.user);
    
    const [SendMail, { isLoading, isError, isSuccess }] = useContactMutation();
    const [text, setText] = useState("");
    
    const handleMail = async (e) => {
        try {
            SendMail(text).unwrap();
        } catch (error) {
            console.error("Failed to send mail:", error);
        }
    };
    
    useEffect(() => {
        if (isSuccess) {
            message.success("Mail sent successfully");
            setText("")
        } else if (isError) {
            console.error("Failed to send mail");
        }
    }, [isSuccess, isError])

    return (
        <div className="w-screen flex flex-col items-center justify-center contact-section">
            <div className="flex items-center justify-center top w-screen min-h-[600px] relative mt-10">
                <div className="w-full h-full absolute opacity-90 bg-[#00031c]"></div>
                <div className="w-[80%] flex items-center justify-center max-lg:flex-col max-lg:w-full">
                    <div className="text-white w-[40%] flex flex-col items-start justify-start max-lg:w-full max-lg:items-start max-lg:justify-center max-lg:pl-6 fade-in-left" style={{ zIndex: "1000" }}>
                        <h1 className="text-6xl font-bold mb-4 leading-[90px]">Say hi! Don’t <br /> be shy.</h1>
                        <p className="mb-8 max-w-[400px] max-lg:max-w-[100%]">
                            Feel free to reach out to our team using the contact information provided. Whether you have questions, need assistance, or are interested in partnership opportunities, we're here to help! Our team is dedicated to providing you with prompt and professional service.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white text-xl"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-white text-xl"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white text-xl"><i className="fab fa-github"></i></a>
                        </div>
                    </div>

                    <div className="w-[60%] p-6 rounded-lg shadow-lg max-lg:w-full fade-in-right" style={{ zIndex: "1000" }}>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-white font-semibold">Message</label>
                                <textarea 
                                    id="message" 
                                    rows="4" 
                                    value={text}
                                    className="mt-1 p-3 bg-white bg-opacity-90 border border-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" 
                                    placeholder="Your message"
                                    onChange={e => setText(e.target.value)}    
                                >
                                </textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-white font-semibold">Your name</label>
                                    <input 
                                        id="name" 
                                        value={user?.name}
                                        disabled={user?.name ? true : false}
                                        type="text" 
                                        className="mt-1 p-3 bg-white bg-opacity-90 border border-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" 
                                        placeholder="Enter your name">
                                    </input>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-white font-semibold">Email</label>
                                    <input 
                                        id="email" 
                                        type="email" 
                                        value={user?.email}
                                        disabled={user?.email ? true : false}
                                        className="mt-1 p-3 bg-white bg-opacity-90 border border-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" 
                                        placeholder="Enter your email">
                                    </input>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button 
                                    onClick={handleMail}
                                    className="px-6 py-3 text-white rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300 focus:outline-none focus:ring-4 active:scale-110">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20 w-[80%]">
                
                <div className="flex flex-col items-start justify-start gap-6 text-white w-full md:w-[50%] fade-in-left">
                    <h2 className="text-4xl font-bold">Contact info</h2>
                    <p className="text-gray-400 mb-6">
                        Review the contact options below to ensure we get your information to the right member of our team.
                    </p>
                    <div className="grid grid-cols-2 gap-6 w-full">
                        <div>
                            <h3 className="font-semibold">Head Office</h3>
                            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Call Us</h3>
                            <p>Support line: (808) 555-0111</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Support</h3>
                            <p>support@streamvid.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Email Us</h3>
                            <p>hello@example.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Press Inquiries</h3>
                            <p>pr@streamvid.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Advertising</h3>
                            <p>ad_proposal@example.com</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[50%] fade-in-right">
                    <iframe
                        className="w-full h-[400px] rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24301.637763478357!2d-0.1356825354499602!3d51.50336485431214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052f5175ce1d%3A0xff09b63d6d23d3c5!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1603414234531!5m2!1sen!2sus"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}