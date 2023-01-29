import React from "react";
import ProfileCard from "../components/ProfileCard";
import Ap from "../images/ap.png";
import RecentPostCard from "../components/RecentPostCard";
import BlogCard from "../components/BlogCard";

function Home() {
  return (
    <div className="container flex flex-col max-w-[70rem] px-5 m-auto">
      <div className="my-10">
        <h1 className=" text-center text-6xl">Blogs</h1>
        <h5 className=" text-pink font-bold text-lg text-center my-3">Home</h5>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 mb-10">
        <div className="flex flex-col sm:max-w-[17rem] gap-5 sm:sticky sm:top-5 h-max">
          <ProfileCard
            img={Ap}
            bio="Undergraduate software engineering with a passion for developing innovative programs that accelerate the efficiency and effectiveness of organizational success."
          />
        </div>
        <div className="flex flex-col w-full h-max gap-5">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="md:flex flex-col min-w-[17rem] max-w-[35rem] hidden gap-5 sticky top-5 h-max">
          <RecentPostCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
