import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomActiveLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#E2E8F0" : "#94A3B8",
          padding: match ? "6px" : "0px",
          paddingLeft: match ? "10px" : "0px",
          paddingRight: match ? "10px" : "0px",
          borderRadius: "10%",
          backgroundColor: match ? "#1F2937" : "",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomActiveLink;
