//this is where my followers will be displayed
import React from "react";

const Followers = props => {
  return (
    <>
      <div className="followersCont">
        {props.followers.map(person => (
          // key={person.id}
          <div className="followerCard">
            <img width="200px" src={person.avatar_url} alt="" />
            <h3>GitHub Name: {person.login}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Followers;
