import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">About</h1>
              <h4>Address:</h4>
              <p>7th Main Rd, Abbaappa Layout, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076</p>
              <br/>
              <h4>Contact Number:</h4>
              <p>8618278785</p>
            </div>
            <p className="mid">
              <a 
                href="https://maps.app.goo.gl/V38CSSJYqzUQVDfP6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                7th Main Rd, Abbaappa Layout, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076
              </a>
            </p>
            <Link to={"./"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/Biryani.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
