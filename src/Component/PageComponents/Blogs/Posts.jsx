import React, { useState, useEffect } from "react";
// import Data from './PostData'
import axios from "axios";
import { Link } from "react-router-dom";
const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [Index, setIndex] = useState(false);
  const fetchData = () => {
    try {
      axios
        .get("https://kalikablog.onrender.com/blog")
        .then((res) => {
          setBlogs(res.data.data);
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
    <div className="pl-10">
      <div className="grid grid-cols-3 mt-10 ">
        {blogs.map((CurElem, i) => {
          return (
            // posts div
            <div
              key={i}
              className="hover:scale-105 transition-all duration-300"
            >
              <Link to={`/singleblog/${CurElem._id}`} className="">
                <div className="container w-11/12 shadow-lg p-2">
                  <div
                    className="h-[280px] rounded-xl w-full bg-lime-500 group-hover:scale-105 transition-all duration-300"
                    style={{
                      backgroundImage: `url(${CurElem.image[0].path})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="catagory flex mt-4">
                    <p className="font-semibold">{CurElem.title} </p>
                    <p className=" w-3">-</p>
                    <p className="text-gray-500">{CurElem.date}</p>
                  </div>
                  <div className="title mt-2">
                    <p className="text-lg font-bold leading-6">
                      {CurElem.author_name}
                    </p>
                  </div>
                  <div className="desc mt-2">
                    <div
                      className={`${
                        Index ? "line-clamp-none" : "line-clamp-2"
                      } `}
                      dangerouslySetInnerHTML={{ __html: CurElem.description }}
                    />
                  </div>
                  <div className="writer flex mt-2">
                    <div className="imgg">
                      <img
                        src={
                          "https://preview.colorlib.com/theme/magdesign/images/person_1.jpg"
                        }
                        alt="w"
                        className="w-16 rounded-full"
                      />
                    </div>
                    <div className="info pl-3">
                      <p className="font-semibold">{"Sergy Campbell"}</p>
                      <p>{"CEO and Founder"}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* most popular courses */}
      <div className="">
        <p className="text-3xl font-bold text-center m-6 ">
          Most Popular Courses
        </p>
        <div className="overflow-scroll flex gap-5">
          {blogs.map((CurElem, i) => {
            return (
              <div>
                <div className=" w-96 rounded-lg">
                  <div key={i} className=" shadow-2xl rounded-md p-3 ">
                    <div className="image h-full rounded-xl aspect-[4/3] overflow-hidden">
                      <img
                        src={CurElem.image[0].path}
                        alt=""
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="catagory flex mt-4">
                      <p className="font-semibold">{CurElem.title} </p>
                      <p className=" w-3">-</p>
                      <p className="text-gray-500">{CurElem.date}</p>
                    </div>
                    <div className="title mt-2">
                      <p className="text-lg font-bold leading-6">
                        {CurElem.author_name}
                      </p>
                    </div>
                    <div className="desc">
                      <div
                        className={`${
                          Index ? "line-clamp-none" : "line-clamp-3"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: CurElem.description,
                        }}
                      />
                    </div>
                    <div className="writer flex mt-2">
                      <div className="imgg bg-cover w-fit h-fit">
                        <img
                          src={CurElem.image[0].path}
                          alt="w"
                          className="w-12 rounded-full overflow-hidden object-cover bg-red-600 h-12"
                        />
                      </div>
                      <div className="info pl-3">
                        <p className="font-semibold">{"Sergy Campbell"}</p>
                        <p>{"CEO and Founder"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
