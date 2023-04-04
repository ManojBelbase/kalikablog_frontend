import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const data = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Categories",
    path: "/Categories",
  },
  {
    name: "Travel",
    path: "/travel",
  },
  {
    name: "Food",
    path: "/food",
  },
  {
    name: "Technology",
    path: "/technology",
  },
  {
    name: "Business",
    path: "/business",
  },
];
const Sidebar = ({ show, setShow }) => {
  const location = useLocation();
  return (
    <div>
      <div
        className={`sidebar fixed top-0 right-0  text-black w-60 shadow-2xl h-screen  p-2 text-center bg-[#ffffff] ${
          show
            ? "translate-x-0 ease-in-out duration-200"
            : "translate-x-96 ease-in-out duration-300"
        }`}
      >
        <div
          className="absolute right-1 text-3xl"
          onClick={() => setShow(!show)}
        >
          <RxCross2 />
        </div>
        <div>
          {data.map((items, i) => {
            return (
              <div
                key={i}
                className="`text-white cursor-pointer py-2 w-11/12 text-center relative top-10 px-2"
              >
                <Link
                  to={items.path}
                  className={`flex items-center gap-2 text-lg border-2 py-1 px-2 w-full ${
                    location.pathname === items.path
                      ? "text-yellow-500"
                      : "text-black"
                  }`}
                >
                  <p>{items.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
