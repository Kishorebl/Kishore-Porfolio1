import React from "react";
import group13 from "../assets/group-13.png";

export const LogInCc = () => {
  return (
    <div className="flex h-[1024px] items-center gap-[301px] pl-0 pr-[99px] py-0 relative bg-[#410000e8] w-full min-w-[1440px]">
      <div className="flex-col w-[583px] h-[1024px] items-center gap-[46px] pl-[125px] pr-[194px] py-[422px] bg-[#200000e8] rounded-[15px] backdrop-blur-[388.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(388.7px)_brightness(100%)] flex justify-center relative">
        <img
          className="relative w-[210.23px] h-[179.54px] mt-[-65.77px]"
          alt="Group"
          src={group13}
        />
        <p className="relative w-[511px] h-[86px] mb-[-64.77px] ml-[-123.50px] mr-[-123.50px] [font-family:'Netflix_Sans-Light',Helvetica] font-light text-white text-3xl text-center tracking-[0] leading-[normal]">
          Join Cine Club 🎬   <br />
          Create your free account & start watching!
        </p>
      </div>
      <div className="flex-col h-[686px] items-start gap-[33px] p-10 flex-1 grow bg-[#200303] rounded-[43px] flex justify-center relative">
        <div className="relative self-stretch mt-[-0.50px] [font-family:'Netflix_Sans-Medium',Helvetica] font-medium text-[#e4101f] text-[40px] text-center tracking-[0] leading-[normal]">
          Sign Up
        </div>
        <div className="flex items-start gap-2.5 pl-[9px] pr-[305px] pt-1.5 pb-[23px] relative self-stretch w-full flex-[0_0_auto] bg-[#f9fbfc] rounded-xl">
          <input
            type="text"
            placeholder="Name"
            className="relative w-full mt-[-1.00px] [font-family:'Netflix_Sans-Light',Helvetica] font-light text-[#393939] text-[15px] bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex items-start gap-2.5 pl-[9px] pr-[305px] pt-1.5 pb-[23px] relative self-stretch w-full flex-[0_0_auto] bg-[#f9fbfc] rounded-xl">
          <input
            type="date"
            placeholder="Date of Birth"
            className="relative w-full mt-[-1.00px] [font-family:'Netflix_Sans-Light',Helvetica] font-light text-[#393939] text-[15px] bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex items-start gap-2.5 pl-[9px] pr-[305px] pt-1.5 pb-[23px] relative self-stretch w-full flex-[0_0_auto] bg-[#f9fbfc] rounded-xl">
          <input
            type="email"
            placeholder="Email"
            className="relative w-full mt-[-1.00px] [font-family:'Netflix_Sans-Light',Helvetica] font-light text-[#393939] text-[15px] bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex items-start gap-2.5 pl-[9px] pr-[305px] pt-1.5 pb-[23px] relative self-stretch w-full flex-[0_0_auto] bg-[#f9fbfc] rounded-xl">
          <input
            type="tel"
            placeholder="Mobile Number"
            className="relative w-full mt-[-1.00px] [font-family:'Netflix_Sans-Light',Helvetica] font-light text-[#393939] text-[15px] bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex items-start gap-2.5 pl-[9px] pr-[305px] pt-1.5 pb-[23px] relative self-stretch w-full flex-[0_0_auto] bg-[#f9fbfc] rounded-xl">
          <input
            type="password"
            placeholder="Create Password"
            className="relative w-full mt-[-1.00px] [font-family:'Netflix_Sans-Light',Helvetica] font-light text-[#393939] text-[15px] bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex items-start gap-2.5 pl-[9px] pr-[305px] pt-1.5 pb-[23px] relative self-stretch w-full flex-[0_0_auto] bg-[#f9fbfc] rounded-xl">
          <input
            type="password"
            placeholder="Confirm Password"
            className="relative w-full mt-[-1.00px] [font-family:'Netflix_Sans-Light',Helvetica] font-light text-[#393939] text-[15px] bg-transparent border-none outline-none"
          />
        </div>
        <button className="items-center gap-2.5 pl-0 pr-[11px] py-2 self-stretch w-full flex-[0_0_auto] bg-[#e4101f] rounded-xl flex justify-center relative hover:bg-[#c40e1a] transition-colors">
          <div className="w-[125px] [font-family:'Netflix_Sans_-Bold',Helvetica] font-bold text-[#f9fbfc] relative mt-[-1.00px] text-[15px] text-center tracking-[0] leading-[normal]">
            Create Account
          </div>
        </button>
      </div>
    </div>
  );
};