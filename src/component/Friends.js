import { useState } from "react";

function Friend({ person }) {
  return (
    <div className="Friend">
      <h2>{person?.name || "Ahmed"}</h2>
    </div>
  );
}

function Friends() {
  const [friends, setFriends] = useState([]);
  return (
    <div className="Friends">
      <button>Add friends</button>
      {friends.map((person, index) => {
        <Friend key={index} person={person} />;
      })}
    </div>
  );
}

export default Friends;
