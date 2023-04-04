import React, { useEffect, useState } from "react";
// import Data from '../Blogs/PostData'

import axios from "axios";
const Trending = () => {
  const [blogs, setblogs] = useState([]);
  const [Curindex, setCurIndex] = useState(0);
  const [Index, setIndex] = useState(false);
  console.log(setIndex);
  const fetchData = () => {
    try {
      axios
        .get("https://kalikablog.onrender.com/blog")
        .then((res) => {
          setblogs(res.data.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" ">
      <div className="text-5xl font-bold text-center mt-8">Trending</div>
      {blogs.map((curValue, key) => {
        return (
          <div key={key} className="">
            <div
              className={`${
                key === Curindex ? "block" : "hidden"
              } container grid grid-cols-2 place-items-center mt-10 `}
            >
              {/* image section */}
              <div className="image h-84 w-10/12 ">
                <img
                  src={curValue.image[0].path}
                  alt="imageww"
                  className="rounded-xl object-cover h-96 w-11/12 "
                />
              </div>
              <div className="infosec p-4 mr-10">
                <div className="catagory flex gap-1 items-center align-middle">
                  <p className="font-semibold text-lg">{curValue.title} </p>
                  <p className="text-gray-500 text-xs font-bold">&mdash;</p>
                  <p className="text-gray-500">{curValue.date}</p>
                </div>
                <div className="title mt-2">
                  <p className="text-4xl font-bold leading-12">
                    {curValue.title}
                  </p>
                </div>
                <div className="desc mt-2 m-2 text-gray-600">
                  <div
                    className={`${Index ? "line-clamp-none" : "line-clamp-4"}`}
                    dangerouslySetInnerHTML={{
                      __html: curValue.description,
                    }}
                  />
                </div>
                {/* writer  */}
                <div className="writer flex mt-2">
                  <div className="imgg">
                    <img
                      src={
                        "https://preview.colorlib.com/theme/magdesign/images/person_1.jpg"
                      }
                      alt=""
                      className="w-16 rounded-full"
                    />
                  </div>
                  <div className="info pl-3">
                    <p className="font-semibold">{curValue.author_name}</p>
                    <p>{"CEO and Founder"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* Slider button */}
      <div className="border-2 text-xl gap-2 flex justify-center">
        <button
          onClick={() => {
            setCurIndex((Curindex) =>
              Curindex === 0 ? blogs.length - 1 : Curindex - 1
            );
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            setCurIndex((Curindex) =>
              Curindex === blogs.length - 1 ? 0 : Curindex + 1
            );
          }}
        >
          <p>&gt;</p>
        </button>
      </div>
    </div>
  );
};

export default Trending;
