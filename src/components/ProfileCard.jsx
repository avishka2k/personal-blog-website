import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";


function ProfileCard(props) {
  return (
    <div className="flex flex-col rounded-[5px] sm:shadow-md sm:bg-card-color h-max pb-10 sm:py-5 px-20 sm:px-2">
      <h1 className=" text-center mb-4 font-bold text-2xl  sm:text-xl text-white">Avishka Prbath</h1>
      <img
        src={props.img}
        className=" w-[9rem] rounded-full m-auto"
        alt="avishka's pic"
      />
      <p className="mt-4 text-center">
        {props.bio}
      </p>
      <div className="flex flex-row items-center gap-4 m-auto mt-4">
        <BsGithub className=" text-white text-[1.5rem] cursor-pointer" />
        <MdEmail className=" text-white text-3xl cursor-pointer" />
        <BsLinkedin className=" text-white text-xl cursor-pointer" />
      </div>
    </div>
  );
}

export default ProfileCard;
