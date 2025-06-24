import React from "react";
import "./Productdata.css";
import SupportCards from "./SupportCards";
import IconMarquee from "../Pages/pagedata/IconMarquee";

const Productdata = () => {
  return (
    <>
      <div className="text-pagedata">
        <p>Helpful products,<br />
        built with you in mind</p>
      </div>
      <IconMarquee/>
      <SupportCards/>
    </>
  );
};

export default Productdata;
