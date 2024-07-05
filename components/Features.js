import React from "react";
import CardGrid from "./Card";

const Features = () => {
  return (
    <div className="flex flex-col justify-start px-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-3xl">
          Stop procrastinating about your idea 
                    </h1>
          <p className="text-slate-400 ">
            Transform your idea into a market-ready MVP 
          </p>
        </div>
        <CardGrid />
      </div>
    </div>
  );
};

export default Features;
