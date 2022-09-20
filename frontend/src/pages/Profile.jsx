import React from "react";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

import "../styles/Profile.css";

function UserProfile() {
    return (<>
        <Header />
        <div className="profile-page-container">
            <div className="user-profile-container">
                <Profile />
            </div>
        </div>
        <Footer />
    </>);
}

export default UserProfile;