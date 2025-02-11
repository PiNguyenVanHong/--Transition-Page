import React from "react";
import transition from "../transition";

const Homepage = () => {
    return ( 
        <div>
            <h1>Home</h1>
        </div>
     );
}

const WrappedHome = transition(Homepage);
 
export default WrappedHome;