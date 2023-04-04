import React, { useState, useEffect } from "react";
import axios from "axios";
const Categories = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchData = () => {
    try {
      axios
        .get("https://kalikablog.onrender.com/blog")
        .then((res) => {
          console.log("cate" + res);
          setBlogs(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-9/12 m-auto">
      <p className="text-gray-400 m-5">CATEGORIES</p>
      <div>
        {blogs.map((val, i) => {
          return (
            <div key={i} className="flex m-5 mb-5">
              <div className="imagesec w-4/12 mr-5">
                <img
                  src={val.image[0].path}
                  alt="imagee"
                  className="rounded-xl bg-cover bg-fixed "
                />
              </div>
              <div className="infosec p-4">
                <div className="category flex mb-3">
                  <p className="font-bold">{val.title}</p>-
                  <p className="text-gray-400">{val.date}</p>
                </div>
                <div className="content">
                  <p className="font-bold text-2xl">
                    Your most unhappy customers are your greatest source of
                    learning.
                  </p>
                  <p className="text-gray-500">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
