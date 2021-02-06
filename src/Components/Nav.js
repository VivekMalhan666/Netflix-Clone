import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", onkeydown);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"} `}>
      <img
        onClick={() => history.push("/")}
        className="nav_logo"
        src="https://whatchareading.com/wp-content/uploads/2015/01/Netflix_Logo_Digital-Video.png"
        alt="Netflix Logo"
      />
      <img
        onClick={() => history.push("/profile")}
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
