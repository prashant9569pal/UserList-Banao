import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";

// Profile component receiving singleUser object as props
const Profile = ({ singleUser }) => {
  // Destructuring properties from singleUser object
  const { profile, jobTitle, Bio, avatar } = singleUser;

  return (
    // Main profile container with styling classes
    <div className="Profile bg-light rounded-lg py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="text-center">
                {/* Profile image section */}
                <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src={avatar} // Profile image source
                    alt="Profile"
                    // Error handling for image source - fallback to a default avatar image
                    onError={(e) => {
                      e.target.onerror = null; // Prevents looping
                      e.target.src = `./assets/avatars/5927577-${Math.floor(
                        Math.random() * 8 + 1
                      )}.png`;
                    }}
                  />
                </div>
                {/* Displaying user's full name */}
                <h3 className="text-3xl font-bold text-blue my-2">
                  {profile?.firstName} {profile?.lastName}
                </h3>
                {/* Displaying user's username */}
                <div className="text-sm text-blue-600 font-bold mb-4">
                  @{profile?.username}
                </div>
                {/* Displaying user's job title */}
                <div className="flex items-center justify-center text-dark mb-4">
                  <BsBriefcaseFill className="mr-2" />
                  <p className="text-sm justify-center">{jobTitle}</p>
                </div>
                {/* Displaying user's email */}
                <div className="flex items-center justify-center text-dark mb-4">
                  <MdMarkEmailUnread className="mr-2" />
                  <p className="text-sm">{profile?.email}</p>
                </div>
                {/* Displaying user's biography */}
                <div className="border-t border-gray-300 pt-6">
                  <p className="text-base text-gray-700">{Bio}</p>
                  {/* Placeholder for 'Show more' functionality */}
                  <a href="#pablo" className="text-indigo-600 block mt-2">
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting Profile component as default
export default Profile;
