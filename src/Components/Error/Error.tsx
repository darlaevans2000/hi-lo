import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";

const Error: FC = () => {
  return (
    <div className="error-404">
      <NavLink className="go-back" to="/hi-lo/">
        <img
          src="https://files.muzli.space/43e6e439756832db0ff5dd2b76ffef5c.jpeg"
          alt="404-img"
        />
      </NavLink>
    </div>
  );
};

export default Error;
