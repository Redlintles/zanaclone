import React from "react";
import { Link } from "react-router-dom";

interface SubNavProps {
  links: Array<{ text: string; to: string }>;
}

export default function SubNav({ links }: SubNavProps) {
  return (
    <nav className={"main-subnav"}>
      {links &&
        links.map((item, index) => (
          <Link key={index} className="main-subnav__link" to={item.to}>
            {item.text}
          </Link>
        ))}
    </nav>
  );
}
