import React, { useState } from "react";
import { BsFillPeopleFill, BsSearch } from "react-icons/bs";

const Navbar = ({ handleSearch }) => {
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle changes in the search input
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    handleSearch(searchTerm); // Calls the handleSearch function passed as prop with the search term
  };

  return (
    <div className="Navbar">
      <div className="bg-light">
        <header className="border-bottom mb-8">
          <div className="container d-flex justify-content-between align-items-center px-4 px-md-8">
            {/* Logo */}
            <a
              href="/"
              className="d-inline-flex align-items-center text-dark text-2xl md-text-3xl font-weight-bold gap-2.5"
              aria-label="logo"
            >
              <BsFillPeopleFill className="text-primary" />
              Users
            </a>

            {/* Search bar */}
            <form onSubmit={handleSubmit} className="d-flex align-items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                className="form-control me-2"
                placeholder="Search by name..."
              />
              <button className="btn btn-outline-primary" type="submit">
                <BsSearch />
              </button>
            </form>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
