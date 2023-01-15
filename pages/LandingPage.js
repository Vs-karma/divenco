import Image from "next/image";
import React from "react";
import Brand from "../components/home-page/brand";
import Collections from "../components/home-page/Collections";
import NewWithTime from "../components/home-page/NewWithTime";
import hm from "../styles/Home.module.css";
function LandingPage() {
  return (
    <div className="z-0 w-full md:h-full">
      <div className="flex flex-col">
        <div className="h-screen bg-[#ED9C52] w-full">
          <div className="text-6xl md:text-9xl text-white top-10 z-0 font-[700] p-0 m-0 text-center tracking-widest">
            NIKE
          </div>
          <div className="relative h-full -top-56 md:-top-20">
            <Image
              src="/nikeshoed.png"
              alt="nikeShoe"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <Brand />
      <NewWithTime />
      <Collections />
    </div>
  );
}

export default LandingPage;
