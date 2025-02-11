import React from "react";
import transition from "../transition";

const ContactPage = () => {
    return ( 
        <div>
            <h1>Contact</h1>
        </div>
     );
}

const WrappedContact = transition(ContactPage);
 
export default WrappedContact;