import React from "react";

const SkeletonProductInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[400px] h-[20px] bg-slate-200 rounded-lg animate-pulse"></div>
      <div className="w-[70px] h-[20px] bg-slate-200 rounded-lg animate-pulse"></div>
      <div className="w-[400px] h-[20px] bg-slate-200 rounded-lg animate-pulse"></div>
      <div className="w-[400px] h-[20px] bg-slate-200 rounded-lg animate-pulse"></div>
      <div className="w-[100px] h-[20px] bg-slate-200 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default SkeletonProductInfo;
