import React from "react";
import CardGrid from "./Card";

const How = () => {
  return (
    <div className="flex flex-col justify-start px-8">
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
        <CardGrid />
      </div>
    </div>
  );
};

export default How;
