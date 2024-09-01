import { useNavigate } from 'react-router-dom';
import { Flex, Input, message } from "antd";
import { useVerifyMutation } from "../../../../redux/api/Authentication";
import { useEffect, useState } from "react";
import { Loader } from '../../../../components/client/Layout/Animation/Loader';
import Title from 'antd/es/skeleton/Title';

export const Verify = () => {
    const [Verify, { isLoading, isError, isSuccess }] = useVerifyMutation(); 
    const [code, setCode] = useState(undefined)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = localStorage.getItem("email");
        Verify({ email, code}); 
    }

    useEffect(() => {
        if (isSuccess) {
            navigate(`/client/registration/forget/change`);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            message.error("Verification failed. Please try again.");
        }
    }, [isError]);

    const onChange = (text) => {
        setCode(text);
    };
    
    const sharedProps = {
        onChange,
    };

    return (
        <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Verification
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
            
                <Flex gap="large" align="flex-center" vertical>
                    <Input.OTP mask="🔒" {...sharedProps}/>
                </Flex>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                >
                    {isLoading ? <Loader /> : "Verify"}
                </button>
            </form>
        </>
    );
};
