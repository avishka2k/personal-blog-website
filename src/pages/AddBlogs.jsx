import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { storage } from "../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";

function AddBlogs() {
  const imagesListRef = ref(storage, "images/");
  const [title, setTitle] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [blogText, setBlogText] = useState("");
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const addNewBlog = async () => {
    await addDoc(userCollectionRef, {
      title: title,
      date: dateString,
      blog_text: blogText,
    });

    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const current = new Date();
  const date = `${current.getDate()}/${
    monthNames[current.getMonth()]
  }/${current.getFullYear()}`;
  const dateString = date.toString();

  return (
    <div className="flex flex-col max-w-[50rem] m-auto my-20">
      <div className=" flex flex-col gap-10">
        <input
          type="text"
          placeholder="What are you writing about?"
          name="title"
          className="rounded-md bg-card-color text-2xl placeholder:text-2xl italic placeholder:font-bold p-5"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <div className="flex flex-col gap-5">
          {/* {imageUrls ? <img src={imageUpload} className=" h-[30rem]" /> : ""} */}
          <input
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
            type="file"
            accept=".jpg, .jpeg, .png, .webp"
            className="w-fit cursor-pointer"
          />
        </div>
        <textarea
          rows="15"
          placeholder="Write something..."
          name="title"
          className="rounded-md bg-card-color text-2xl placeholder:text-2xl italic placeholder:font-bold p-5"
          onChange={(event) => {
            setBlogText(event.target.value);
          }}
        />
        <div className="flex flex-row gap-5">
          <button
            type="reset"
            className="bg-gray text-pink w-full h-14 rounded-md text-2xl"
          >
            Clear
          </button>
          <button
            onClick={addNewBlog}
            className="bg-pink w-full h-14 rounded-md text-2xl"
          >
            Add blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBlogs;
