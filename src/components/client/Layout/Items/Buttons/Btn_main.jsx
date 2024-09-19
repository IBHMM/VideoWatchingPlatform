import './Btn_main.css'

export function Btn_main({ text, width, height }) {

    return (
        <button className="main-button" style={{width, height}}>
            {text}
        </button>
    )
}