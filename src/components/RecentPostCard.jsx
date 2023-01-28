import React from "react";

function RecentPostCard(props) {
  return (
    <div className="flex flex-row gap-3 my-2">
      <img src={props.img} className="w-[4rem] h-[4rem] rounded-[4px]" alt="" />
      <div className="flex flex-col justify-between">
        <p className=" leading-4">
          {props.title}
        </p>
        <p className=" text-[11px]">{props.date}</p>
      </div>
    </div>
  );
}

export default RecentPostCard;
