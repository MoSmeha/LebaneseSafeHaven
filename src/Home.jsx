import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBarHome from "./SearchBarH";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <Content />
    </div>
  );
}
function Content() {
  return (
    <div className="content">
      <div className="Welcome">
        Finding a home, <span>Together</span>
      </div>
      <div className="desc">
        Find safe and welcoming rental options tailored for you.
      </div>
      <SearchBarHome />
    </div>
  );
}
