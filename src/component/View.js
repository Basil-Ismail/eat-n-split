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
      {friends.map((person, index) => (
        <Friend key={index} person={person} />
      ))}
    </>
  );
}

export default View;
