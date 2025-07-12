import Friends, { Friend } from "./Friends";
import { useState } from "react";
function View() {
  const [friends, setFriends] = useState([]);

  return (
    <>
      <div className="header">
        <h1> Eat 'N Split </h1>
        <Friends friends={friends} setFriends={setFriends} />
      </div>
      <div className="container">
        {friends.map((person, index) => (
          <Friend key={index} person={person} />
        ))}
      </div>
    </>
  );
}

export default View;
