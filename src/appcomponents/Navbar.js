import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { search, setSearch } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="Nav">
      <form className="searchform" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Post"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/newpost">New Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
