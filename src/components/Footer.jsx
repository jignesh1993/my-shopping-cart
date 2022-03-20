import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        &copy; {currentYear} <strong>My Cart App</strong>{" "}
      </p>
    </footer>
  );
};

export default Footer;
