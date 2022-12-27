import React from "react";
import "./NavbarAndFooter.css";
function Footer({ arrayTest, name, surname, className, ...platformProps }) {
  let classNames = ["footer", className].join(" ").trim();

  return (
    <div className={classNames} {...platformProps}>
      {name} {surname}
    </div>
  );
}

export default Footer;
