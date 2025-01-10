import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../../assets/230071601049-modified.png";
const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Fudail Zafar</div>
        <div className="profile-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          vitae, voluptatibus ex fuga mollitia temporibus. Soluta enim
          distinctio at eveniet ducimus cum non error ipsam vitae assumenda sed,
          nam optio!
        </div>
        <div className="profile-button">
          <a href="mailto:fudail.zafar@gmail.com">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
