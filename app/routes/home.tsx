import React from "react";
import { Link } from "react-router-dom";
import Navbar from "~/components/Navbar";


function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline text-red-600">Home Page</h1>
      <p>Welcome to the first Homepage built using React Vite</p>
      <Link to="/about" state={{ 
        name: "Ami Paradis Ishimwe", 
        title: "React Developer", 
        description: "Building awesome web applications!"
      }}>
        Go to About Page
      </Link>
    </div>
  );
}

export default Home;
