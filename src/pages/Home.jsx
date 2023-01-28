import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Ap from "../images/ap.png";
import Rnimg from "../images/rn-img.jpg";
import RecentPostCard from "../components/RecentPostCard";

function Home() {
  return (
    <div className="container flex flex-col h-[500rem] max-w-6xl m-auto">
      <div className="my-20">
        <h1 className=" text-center text-6xl">Blogs</h1>
        <h5 className=" text-pink font-bold text-lg text-center my-3">Home</h5>
      </div>
      <div className="flex flex-row gap-5 w-full">
        <div className="flex flex-col h-[30rem] w-full bg-pink">left</div>
        <div className="flex flex-col h-auto w-[25rem] gap-5">
          <div className="flex flex-col rounded-[5px] bg-card-color w-full py-5 px-2">
            <h1 className=" text-center mb-4 font-bold text-white">
              Avishka Prbath
            </h1>
            <img
              src={Ap}
              className=" w-[9rem] rounded-full m-auto"
              alt="avishka's pic"
            />
            <p className="mt-4 text-center">
              Undergraduate software engineering with a passion for developing
              innovative programs that accelerate the efficiency and
              effectiveness of organizational success.
            </p>
            <div className="flex flex-row items-center gap-4 m-auto mt-4">
              <BsGithub className=" text-white text-[1.5rem]" />
              <MdEmail className=" text-white text-3xl" />
              <BsLinkedin className=" text-white text-xl" />
            </div>
          </div>
          <div className="flex flex-col rounded-[5px] bg-card-color w-full p-5">
            <h1 className=" font-bold text-xl">Recent Post</h1>
            <div className="w-[7rem] h-[3px] rounded-lg bg-pink mt-1 mb-4" />
            <RecentPostCard
              img={Rnimg}
              title="This is my recent img blog in this web page"
              date="February 23, 2022"
            />
            <RecentPostCard
              img={Rnimg}
              title="This is my recent img blog in this web page"
              date="February 23, 2022"
            />
            <RecentPostCard
              img={Rnimg}
              title="This is my recent img blog in this web page"
              date="February 23, 2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
