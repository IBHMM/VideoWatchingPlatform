import spinner from '../../../../assets/icons/spinner.png'

export function LoaderAnimation() {
    return (
        <div className='w-screen h-screen flex items-center justify-center' style={{ background: "rgb(0, 3, 28)" }}>
            <img src={spinner} alt="Loading..." className=' animate-spin'/>
        </div>
    )
}