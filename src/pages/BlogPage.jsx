import React from "react";
import Blogimg from "../images/blog-img.webp";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

function BlogPage() {
  return (
    <div className="container flex flex-col max-w-[50rem] px-5 m-auto">
      <div className="my-10">
        <h1 className=" text-center text-white font-bold text-3xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <div className=" text-pink font-bold text-center my-3">
          Home
          <span className=" text-white">
            {" > "}
            <span className="text-gray">Technology</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <img
          src={Blogimg}
          alt="Blog img"
          className="h-[30rem] w-full rounded-[5px] shadow-md mb-5"
        />
        <div className="flex flex-row justify-between">
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
          <div className="flex flex-row">
            <div className="flex flex-row gap-2 items-center cursor-pointer">
              <IoMdShareAlt className="text-white text-xl" />
              Share
            </div>
          </div>
        </div>
        <div className="my-10 text-[23px] text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae
            dignissimos quibusdam saepe. Pariatur, maiores. Voluptatum facilis
            neque ducimus inventore nisi est officiis? Possimus nemo recusandae
            ratione architecto soluta debitis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Architecto laboriosam odit est
            repellat distinctio necessitatibus iusto. Ex, reiciendis voluptatum.
            Necessitatibus dolore hic non sit quibusdam delectus reprehenderit
            distinctio vitae nemo!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eos
            assumenda? Natus mollitia possimus iste eaque voluptates modi, ipsam
            id nam, vero necessitatibus nemo voluptatem eveniet quisquam totam
            alias. Consequuntur!
          </p>
          <br />
          <p className="shadow-md bg-card-color p-5 rounded-[5px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            suscipit repellat consectetur.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero
            saepe molestiae, voluptates autem, ipsa, sunt quo vero distinctio
            qui facilis? Aliquid autem hic omnis quis consequatur in, sequi
            quasi! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aliquam nesciunt eaque doloremque accusamus dignissimos nam quis
            temporibus dolores libero rerum ipsam, maiores magni repellat
            tempore officiis quae veniam repellendus itaque? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Perspiciatis tempora officia
            quasi voluptate explicabo adipisci! Eligendi culpa impedit aut nulla
            quasi officiis dolorum nihil blanditiis, dolore, necessitatibus quos
            reiciendis totam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique ipsum natus voluptates mollitia quidem aut autem
            consectetur perspiciatis voluptas excepturi quasi odio minima
            dolores recusandae nam reiciendis, sit, quas delectus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
