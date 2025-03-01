import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "~/components/Navbar";

const About: React.FC = () => {
  const location = useLocation();
  const { name, title, description } = location.state || {
    name: "Ami Paradis Ishimwe",
    title: "Default Title",
    description: "Default Description",
  };

  return (
    <div>
      <Navbar />
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to="/">Go to Home Page</Link>
      <Link to="/contact">Go to Contact Page</Link>
    </div>
  );
};

export default About;
