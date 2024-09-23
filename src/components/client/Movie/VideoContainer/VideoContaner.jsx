  
export function VideoContainer({url}) {

    return (
        <div className="w-screen flex items-center justify-center mt-10 max-w-[2000px]">
            <div className="flex items-center justify-center w-[90%]">
                <video 
                    src={url}
                    controls={true}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}