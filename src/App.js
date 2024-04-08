// Importing necessary modules and files
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";
import Navbar from "./Components/Home/Navbar/Navbar";
import Table from "./Components/Home/Table/Table";
import Profile from "./Components/Home/Profile/Profile";
import { useEffect, useState } from "react";
import Footer from "./Components/Home/Footer/Footer";
import img from "./Assets/85023-no-data.gif";

function App() {
  // State variables
  const [loading, setLoading] = useState(true); // Loading state
  const [users, setUsers] = useState([]); // State for storing user data
  const [singleUser, setSingleUser] = useState({}); // State for storing single user data
  const [error, setError] = useState(false); // Error state

  // Function to fetch single user data by id
  const handleOnClick = (id) => {
    axios
      .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
      .then((res) => {
        setSingleUser(res.data);
      });
  };

  // Effect hook to fetch users data
  useEffect(() => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => {
        if (res.status === 401 || res.status === 403 || res.status === 404) {
          return setError(true); // Set error state if there's an issue with the API response
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data); // Set users state with fetched data
        setSingleUser(data[0]); // Set singleUser state with the first user from the fetched data
        setLoading(false); // Set loading state to false when data is fetched
      });
  }, []);

  // If there's an error, display error message
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <img src={img} alt="" />
      </div>
    );
  }

  // If data is loading, display loading spinner
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Function to handle search filtering
  const handleSearch = (searchTerm) => {
    const filteredUsers = users.filter((user) =>
      user.profile.first.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers); // Update users state with filtered users
  };

  // Return the main JSX content
  return (
    <div className=" front custom-bg font-serif d-flex flex-column min-vh-100">
      {/* Navbar component with search functionality */}
      <Navbar handleSearch={handleSearch} />
      <div className="Body container-fluid">
        <div className="row">
          {/* Table component to display list of users */}
          <div className=" col-6">
            <Table handleOnClick={handleOnClick} users={users} />
          </div>
          {/* Profile component to display details of selected user */}
          <div className=" col-6 mb-3">
            {users?.length > 0 && <Profile singleUser={singleUser} />}
          </div>
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
