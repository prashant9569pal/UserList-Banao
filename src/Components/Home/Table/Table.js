import React from "react";
import Profile from "../Profile/Profile";
import TableRow from "./TableRow";

const Table = ({ setSingleUser, handleOnClick, users }) => {
  return (
    // Responsive wrapper for the table
    <div className="table-responsive">
      {/* Actual table */}
      <table className="table table-hover table-striped text-center">
        {/* Table header */}
        <thead className="bg-dark text-white">
          <tr>
            {/* Column headers */}
            <th scope="col" className="text-lg font-weight-bold px-4 py-3">
              ID
            </th>
            <th scope="col" className="text-lg font-weight-bold px-4 py-3">
              Avatar
            </th>
            <th scope="col" className="text-lg font-weight-bold px-4 py-3">
              Name
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Mapping over the users array to render table rows */}
          {users?.map((user) => (
            // TableRow component for each user
            <TableRow key={user.id} user={user} handleOnClick={handleOnClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
