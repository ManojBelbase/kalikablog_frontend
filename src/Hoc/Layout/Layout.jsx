import React, { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Sidebar from "../../Component/Navbar/Sidebar";
import Footer from "../../Component/Footer/Footer";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <Navbar show={show} setShow={setShow} />
      <Sidebar show={show} setShow={setShow} />

      <div>{children}</div>
      <div className="ml-5">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
