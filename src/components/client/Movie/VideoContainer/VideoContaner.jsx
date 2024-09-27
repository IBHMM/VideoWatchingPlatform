import { useEffect, useState } from "react"
import { useSelector } from 'react-redux';
import { Btn_main } from "../../Layout/Items/Buttons/Btn_main";
import { Link } from "react-router-dom";
import { useUpdateUserMutation } from "../../../../redux/api/admin/user";

export function VideoContainer({movie}) {

    const [show, setShow] = useState(false);
    const [updateUser, {isLoading, isError, isSuccess}] = useUpdateUserMutation();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (!user) {
            setShow(true);
            return;
        }
        if (movie.isSubscriptionNeed && (user.subscription != "free" || user.subscription == null)) {
            updateUser({userId: user.id, updatedData: {watchList: [user.watchList, movie]}});
            setShow(true);
        }
        if (!movie.isSubscriptionNeed) {
            updateUser({userId: user.id, updatedData: {watchList: [user.watchList, movie]}});
            setShow(false);
        }
    }, [])  

    return (
        <div className="w-screen flex items-center justify-center mt-10 max-w-[2000px]">
            <div className="flex items-center justify-center w-[90%] relative">
                <video 
                    src={movie.videoUrl}
                    controls={true}
                    className="w-full h-full object-cover rounded-lg shadow-lg max-h-[700px]"
                >
                    Your browser does not support the video tag.
                </video>

                {show && <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center gap-5" style={{background: "rgba(0,0,0,0.5)"}}>
                    <p className="text-white text-[150%] text-center">
                        This content is for Diamond Plan members only.
                    </p>
                    <div className="flex items-center justify-center gap-5">
                        <Link to={"/client/home/plans"}>
                            <Btn_main text={"Upgrade"}/>
                        </Link>
                        {
                            !user && 
                            <Link to={"/client/registration/signin"}>
                                <Btn_main text={"Login"}/>
                            </Link>
                        }
                    </div>
                </div>}
            </div>
        </div>
    )
}