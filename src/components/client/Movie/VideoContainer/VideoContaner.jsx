import { useEffect, useState } from "react"
import { useSelector } from 'react-redux';
import { Btn_main } from "../../Layout/Items/Buttons/Btn_main";
import { Link } from "react-router-dom";
import { useUpdateUserMutation } from "../../../../redux/api/admin/user";
import { useUpdateMovieMutation } from "../../../../redux/api/admin/movie";

export function VideoContainer({movie}) {

    const [show, setShow] = useState(true);
    const [updateUser, {isLoading, isError, isSuccess}] = useUpdateUserMutation();
    const [updateMovie, {isLoading: MisLoading, isError: MisError, isSuccess: MisSuccess}] = useUpdateMovieMutation();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (movie.isSubscriptionNeed) {
            if (user.subscription == "diamond" || user.subscription == "platinium") {
                setShow(false);
                updateUser({userId: user?.id, updatedData: {History: [...user.History, movie]}});
                updateMovie({ movieId: movie.id, formData: {view: movie.view ? movie.view + 1 : 1}})
            }else {
                setShow(true);
            }
        }else {
            setShow(false);
            updateUser({userId: user?.id, updatedData: {History: [...user.History, movie]}});
            updateMovie({ movieId: movie.id, formData: {view: movie.view ? movie.view + 1 : 1}})
        }
    }, []);

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