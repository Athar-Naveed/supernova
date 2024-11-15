"use client";
import { useState } from "react";
import HandlePost from "./HandlePost";
import { Toaster } from "react-hot-toast";
const GCard = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div>
        <div className="heading text-center">
          <span>Write on our Wall</span>
        </div>
        <div className="form">
          <div className="uname my-12 mx-8 sm:grid">
            <label htmlFor="uname" className="label-text pb-3">
              Your name:
            </label>
            <input
              type="text"
              placeholder="Your name here.."
              onChange={(e) => setName(e.currentTarget.value)}
              className="input input-bordered w-full max-w-xs text-sm"
              autoComplete="off"
            />
          </div>
          <div className="umsg my-12 mx-8 grid">
            <label htmlFor="umsg" className="label-text pb-3">
              Your message:
            </label>
            <textarea
              placeholder="Your message to us.."
              onChange={(e) => setMessage(e.currentTarget.value)}
              className="textarea textarea-bordered h-24 md:w-[75%]"
              autoComplete="off"
            ></textarea>
          </div>
          <div className="mb-4 cursor-pointer text-center font-bold text-lg ml-2 p-1 w-[50%] sm:w-[30%] md:w-[20%] xl:w-[10%] rounded-md hover:text-white bg-gradient-to-r from-indigo-400 to-cyan-400">
            <div className="bg-white rounded-md hover:bg-gradient-to-r from-indigo-400 to-cyan-400">
              <button
                onClick={() => HandlePost(name, message)}
                className="cursor-pointer"
              >
                Post
                <Toaster />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GCard;
