import { Outlet } from "react-router-dom";
import { Navbar } from "../../../components/client/Navbar/Navbar";
import { useGetuserQuery, useRefreshMutation } from "../../../redux/api/Authentication";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/user";
import { LoaderAnimation } from "../../../components/client/Layout/Animation/PageLoader";
import { Footer } from "../../../components/client/Footer/Footer";

export const Home = () => {
    const { data, isSuccess, isError, error, refetch } = useGetuserQuery();
    const [refreshToken, { isSuccess: isRefreshSuccess, isError: isRefreshError }] = useRefreshMutation();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isSuccess) {
            dispatch(setUser(data.user));
            setLoading(false);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError && (error.status === 401)) {
            refreshToken();
        }else {
            setLoading(false);
        }
    }, [isError]);

    useEffect(() => {
        if (isRefreshSuccess) {
            refetch();
        }
    }, [isRefreshSuccess]);

    useEffect(() => {
        if (isRefreshError) {
            setLoading(false);
        }
    }, [isRefreshError]);

    return (
        <>
            {loading ? <LoaderAnimation /> : 
                <div className="flex flex-col items-center justify-center">
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            }
        </>
    );
};
