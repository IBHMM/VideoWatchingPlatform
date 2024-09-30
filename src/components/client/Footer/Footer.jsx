import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


export function Footer() {
    return (
        <section className="flex flex-col items-center justify-center w-screen p-10 gap-[30px] mt-[30px]" style={{ background: "rgb(22, 25, 52)", zIndex: "100" }}>
            <div className="flex space-x-6 mb-4">
                <Link target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-white text-xl hover:text-violet-600" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white text-xl hover:text-violet-600" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white text-xl hover:text-violet-600" />
                </Link>
                <Link target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-white text-xl hover:text-violet-600" />
                </Link>
            </div>
            <div className="text-white text-xs flex flex-wrap justify-center">
                {["About Us", "Contact Us", "Download", "Cookie Policy", "Privacy Policy", "Terms", "My Account"].map((text, index) => (
                    <span key={text} className={`${index < 6 ? 'after:content-["|"] after:mx-3' : ''} text-[15px] font-[200] p-1`}>
                        <Link className="hover:text-violet-500 p-1">
                            {text}
                        </Link>
                    </span>
                ))}
            </div>
            <div className="text-white text-sm">
                © 2024 Your Company. All rights reserved.
            </div>
        </section>
    );
}
