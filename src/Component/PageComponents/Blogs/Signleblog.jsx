import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Signleblog = () => {
  const { id } = useParams();
  const [Blogs, setBlogs] = useState([]);
  const fetchData = () => {
    try {
      axios
        .get(`https://kalikablog.onrender.com/blog/${id}`)
        .then((res) => {
          setBlogs([res.data.data]);
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
    <div>
      <div className="">
        {Blogs.map((val, i) => {
          return (
            <div key={i} className="mx-56 mt-10">
              {/* Writer  */}
              <div className="writer mx-auto flex flex-col items-center ">
                <div className="imgg">
                  <img
                    src={val.image[0].path}
                    alt="w"
                    className="w-16 rounded-full border-2 "
                  />
                </div>
                <div className="info pl-3 text-gray-500">
                  <p className="font-semibold">{"Sergy Campbell"}</p>
                  <p>{"CEO and Founder"}</p>
                </div>
              </div>
              {/* Title and intro */}
              <div className="title mt-5">
                <p className="font-bold text-4xl text-center">
                  {
                    "Your most unhappy customers are your greatest source of learning."
                  }
                </p>
                <p className="text-gray-500 text-xl text-center pt-3">
                  {
                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
                  }
                </p>
              </div>
              {/* single image */}
              <div className="singleimage w-full mt-5">
                <img src={val.image[0].path} alt="" className="rounded-lg" />
              </div>
              {/* Content */}
              <div className="desc mt-5 text-gray-500 text-xl">
                {val.description}
                {val.description}
                {val.description}
              </div>
              <div className="multiImages mt-5 grid grid-cols-3 gap-1">
                {val.image.map((val, i) => (
                  <div className="w-fit bg-cover h-fit">
                    <img
                      src={val.path}
                      key={i}
                      className="w-96 h-72 object-cover rounded-xl"
                    />
                  </div>
                ))}
              </div>
              {/* Content */}
              <div className="desc mt-5 text-gray-500 text-xl">
                {val.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Signleblog;
