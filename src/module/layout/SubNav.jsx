import React from "react";
import { Link, useLocation } from "react-router-dom";

export const SubNav = ({ subNavData }) => {
  const location = useLocation();

  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sub-header">
      <nav className="navbar sub-nav">
        <div className="container-fluid px-2">
          {/* Direct horizontal scroll container with shrinking text */}
          <div className="navbar-nav d-flex flex-row overflow-auto w-100 text-nowrap justify-content-start gap-3">
            {subNavData &&
              subNavData.map((item, index) => {
                const isAnchor = item.path.startsWith("#");
                return isAnchor ? (
                  <a
                    key={index}
                    href={item.path}
                    className="nav-link flex-shrink-0"
                    onClick={(e) => handleAnchorClick(e, item.path.slice(1))}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className={`nav-link flex-shrink-0 ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
          </div>
        </div>
      </nav>
    </div>
  );
};
