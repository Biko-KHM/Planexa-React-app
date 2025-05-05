import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover your next adventure with AI
        </span>
      </h1>
      <p className="text-xl text-gray-500 text-center">
        your personalized trip planner and travel curator,creating..... custom
      </p>
      <Link to={"/create-trip"}>
        <button>get started it is free</button>
      </Link>
    </div>
  );
}

export default Hero;
