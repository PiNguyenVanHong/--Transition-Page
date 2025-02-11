import React from "react";
import transition from "../transition";

const AboutPage = () => {
    return ( 
        <div>
            <h1>About</h1>
        </div>
     );
}

const WrappedAbout = transition(AboutPage);
 
export default WrappedAbout;