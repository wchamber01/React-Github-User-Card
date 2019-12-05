//this is where my profile will be displayed
import React from "react";

const Profile = props => {
  return (
    <div className="profileCard">
      <img width="250px" src={props.user.avatar_url} alt="William" />
      <div className="nameDiv">
        <h2>{props.user.name}</h2>
        <h4>GitHub Name: {props.user.login}</h4>
        <h4>Followers: {props.user.followers}</h4>
        <h5>Bio: {props.user.bio}</h5>
      </div>
    </div>
  );
};

export default Profile;
