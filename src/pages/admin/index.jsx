import { useNavigate } from 'react-router-dom';
import { Outlet, useLoaderData } from "react-router-dom"
import { Sidebar } from "../../components/admin/Layout/Sidebar/Sidebar"
import { useEffect } from "react";
import { message } from "antd";


export const Admin = () => {

    const loaderdata = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loaderdata) {
            message.error('You are not authorized to access this page');
            navigate('/client/registration/signin');
        }

        if (loaderdata.role != "admin") {
            message.error('You are not authorized to access this page');
            navigate('/client/home');
        }
    }, [])

    return (
        <>
            <Sidebar />
            <div className="min-[700px]:ml-[300px]">
                <Outlet />
            </div>
        </>
    )
}