import Questions from "../../../../components/client/Questions/Questions";

export function About() {
    return (
        <div className="w-screen flex flex-col items-center justify-center contact-section">
            {/* Hero Section */}
            <div className="flex items-center justify-center w-full min-h-[600px] relative mt-10 overflow-hidden flex-col top">
                <div className="w-full h-full absolute opacity-90 bg-[#00031c]"></div>
                <h1 className="text-5xl font-extrabold text-white z-10 text-center leading-tight">
                    ABOUT US
                </h1>
                <p className="text-lg text-white z-10 mt-4 max-w-2xl text-center">
                    We are committed to providing the best service and experience for our users.
                    Our team is dedicated to ensuring your satisfaction with every interaction.
                </p>
            </div>

            {/* Mission Statement Section */}
            <div className="w-[90%] max-w-4xl mx-auto py-10 text-center">
                <h2 className="text-4xl font-semibold text-white">Our Mission</h2>
                <p className="mt-4 text-gray-300 text-lg">
                    To deliver high-quality content and services that inspire and inform our community.
                </p>
            </div>

            {/* Team Section */}
            <div className="w-[90%] max-w-4xl mx-auto py-10 text-center">
                <h2 className="text-4xl font-semibold text-white">Meet Our Team</h2>
                <div className="flex flex-wrap justify-center mt-6">
                    <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-bold text-white">John Doe</h3>
                            <p className="mt-2 text-gray-400">CEO & Founder</p>
                        </div>
                    </div>
                    <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-bold text-white">Jane Smith</h3>
                            <p className="mt-2 text-gray-400">Head of Development</p>
                        </div>
                    </div>
                    <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-bold text-white">Mike Johnson</h3>
                            <p className="mt-2 text-gray-400">Marketing Director</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-[90%]">
                <h2 className="text-4xl font-semibold text-center text-white">Frequently Asked Questions</h2>
                <Questions />
            </div>

            {/* Contact Section */}
            <div className="w-[90%] max-w-4xl mx-auto py-10 text-center">
                <h2 className="text-4xl font-semibold text-white">Get in Touch</h2>
                <p className="mt-4 text-gray-300">
                    Have questions? Reach out to us at <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a>
                </p>
            </div>
        </div>
    );
}
