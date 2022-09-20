import React from "react";
import "../styles/Profile.css";
import coverImage from "../assets/teamwork-groupomania.webp";
import profileImage from "../assets/user-avatar.webp";

function Profile(user) {
  // console.log(user);
  return (
    <>
      <div className="profile-container">
        <div className="cover-container">
          <img className="cover-image" src={coverImage} alt="" />
        </div>
        <div className="user-info-container">
          <img className="profile-image" src={profileImage} alt="" />
          <h3 className="profile-name">
            {user.name} {user.lastName} Prénom Nom
          </h3>
          <span className="user-position">Position</span>
        </div>
      </div>
    </>
  );
}

export default Profile;
