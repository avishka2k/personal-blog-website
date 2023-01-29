import React from "react";
import Rnimg from "../images/rn-img.jpg";
import RecentPost from "../components/RecentPost";

function RecentPostCard() {
  return (
    <div className="flex flex-col rounded-[5px] bg-card-color shadow-md h-max w-full p-5">
      <h1 className=" font-bold text-xl">Recent Posts</h1>
      <div className="w-[7rem] h-[3px] rounded-lg bg-pink mt-1 mb-4" />
      <RecentPost
        img={Rnimg}
        title="This is my recent img blog in this web page"
        date="February 23, 2022"
      />
      <RecentPost
        img={Rnimg}
        title="This is my recent img blog in this web page"
        date="February 23, 2022"
      />
      <RecentPost
        img={Rnimg}
        title="This is my recent img blog in this web page"
        date="February 23, 2022"
      />
      <RecentPost
        img={Rnimg}
        title="This is my recent img blog in this web page"
        date="February 23, 2022"
      />
    </div>
  );
}

export default RecentPostCard;
