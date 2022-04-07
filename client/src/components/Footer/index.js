import React from "react";
import logo from "../../assets/images/My-project.jpg";
const Footer = () => {
  return (
    <footer className="">
      <div className="container">&copy;2022 By OCSS</div>
      <img src={logo} width={150} height={150} alt="Company logo" />
    </footer>
  );
};

export default Footer;
