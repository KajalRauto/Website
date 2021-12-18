import React from "react";
// import { Button } from "react-bootstrap";
import { Slider1 } from "../Includes/Slider";
import { Vmv } from "./Include/Vmv";
import { Services } from "./Include/Services";
import { Link, NavLink } from "react-router-dom";
import { Footer } from "../Includes/Footer";
import { Navbar1 } from "../Includes/Navbar"
export const Home = () => {
  return (
    <div>
      <Navbar1 />
      <Slider1 />
      <div className="Company">

        <h3  className="my-2" style={{color:"red"}}>Our Company</h3>
        <div className="underline mx-auto my-2"></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <Link to="/about">Read more</Link>
        <Vmv />
        <Services />
      </div>
     
        <Footer />
        <NavLink to={`/contact`} className="btn btn-success">
        Contact
      </NavLink>
    </div>
  );
};
