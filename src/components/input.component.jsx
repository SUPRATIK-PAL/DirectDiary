import { useState } from "react"

const Inputbox = ({name, type, id, value, placeholder, icon}) => {

    const[passwordVisibile, setPasswordVisible] = useState(false);
    return (
        <div className="w-[100%] relative mb-4">

            <input
            name={name} 
            type={type == "password" ? passwordVisibile ? "text" : "password" : type}
            placeholder={placeholder}
            defaultValue={value}
            id={id}
            className="input-box"
            />
    
            <i className={"fi " + icon + " input-icon"}></i>

            {
                type == "password" ? 
                <i className={"fi fi-sr-eye" + (passwordVisibile ? "" : "-crossed") + " input-icon left-[auto] cursor-pointer right-6"} onClick={() => setPasswordVisible((curr) => !curr)}></i> :
                ""
            }
        </div>
        )
}

export default Inputbox