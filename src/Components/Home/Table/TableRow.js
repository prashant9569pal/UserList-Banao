import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";

const TableRow = ({ user, handleOnClick }) => {
  const { id, Bio, avatar, createdAt, jobTitle, profile } = user;

  return (
    <tr
      className="border-bottom bg-light border-gray cursor-pointer "
      onClick={() => handleOnClick(id)}
    >
      <td className="text-sm text-dark font-weight-bold px-4 py-3">{id}</td>
      <td className="text-sm text-dark font-light px-4 py-3">
        <div className="avatar">
          <img
            className="rounded-circle"
            src={avatar}
            alt="Avatar"
            onError={(e) => {
              e.target.onerror = null; // prevents looping
              e.target.src = `./assets/avatars/5927577-${Math.floor(
                Math.random() * 8 + 1
              )}.png`;
            }}
            style={{ width: "50px", height: "50px" }} // Adjust size here
          />
        </div>
      </td>
      <td className="text-sm text-dark font-light px-4 py-3">
        {profile.firstName} {profile.lastName}
      </td>
    </tr>
  );
};

export default TableRow;
