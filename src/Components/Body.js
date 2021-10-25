import React from "react";
import '../css/Body.css';

const Body = () => {
    const welcomeText = ["W","E","L","C",'O','M','E']
    const textView = () => {
        return welcomeText.join("")
    }
    return(
        <div className = "Welcome">
            {textView()}
        </div>
    )
}

export default Body;