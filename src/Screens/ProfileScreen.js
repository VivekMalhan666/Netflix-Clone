import React from "react";
import "../assets/ProfileScreen.css";
import Nav from "../Components/Nav";

function ProfileScreen() {
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
      </div>
    </div>
  );
}

export default ProfileScreen;
