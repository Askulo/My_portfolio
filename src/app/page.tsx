"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  About,
  Contact,
  Experience,
  Hero,
  Feedbacks,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const page = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-primary z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
