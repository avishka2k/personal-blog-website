import React from "react";
import Blogimg from "../images/blog-img.webp";
import { FaUser, FaCalendarAlt } from "react-icons/fa";


function BlogCard() {
  return (
    <div className="flex flex-col bg-card-color shadow-md rounded-[5px] overflow-hidden">
      <img src={Blogimg} className="h-[18rem] cursor-pointer" alt="" />
      <div className="flex flex-col p-4 h-full">
        <div className="flex flex-col">
          <div className="flex flex-row text-[13px]">
            <div className="flex flex-row gap-2 mr-7 items-center">
              <FaUser className="text-white" />
              <p className="text-pink">Admin</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <FaCalendarAlt className="text-white" />
              <p className="">February 25, 2022</p>
            </div>
          </div>
          <p className="text-white font-bold mt-4 mb-2 cursor-pointer hover:underline">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <p>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row"></div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
