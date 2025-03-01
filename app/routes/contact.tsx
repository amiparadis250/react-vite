import React from "react";
import { Link } from "react-router-dom";
import Navbar from "~/components/Navbar";

export function Contact(){
    return (
        <div>
            <Navbar />
            <h1>Contact</h1>
            <Link to="/">Go back</Link>
      </div>
    )

}

export default Contact;