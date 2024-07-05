import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <header className="flex flex-col justify-start gap-8 px-8">
      <p className="font-bold text-base">Fornitemvp</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-3xl">
            Launch your next product with speed, affordability, and ease.
          </h1>
          <p className="text-slate-400 ">
            Transform your idea into a market-ready MVP in under 14-days,
            complete with everything you need to launch and operate it.
          </p>
        </div>
        <Button className="w-fit font-semibold">Contact</Button>
      </div>
    </header>
  );
};

export default Hero;
