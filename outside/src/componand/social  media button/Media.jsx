import { ImTwitter , GrInstagram , ImTelegram } from "react-icons/all";
import "./Media.css"

const Media = () =>{
    return(
        <div className="w-100 d-flex justify-content-center gap-5">
            <button className="Medial-buton fs-3"><ImTwitter/></button>
            <button className="Medial-buton fs-3"><GrInstagram/></button>
            <button className="Medial-buton fs-3"><ImTelegram/></button>
        </div>
    )
}

export default Media