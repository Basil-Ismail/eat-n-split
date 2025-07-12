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
  const [showPopup, setShowPopup] = useState(false);
  const handleAddFriendClick = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="Friends">
      <button onClick={handleAddFriendClick}>Add friends</button>
      {friends.map((person, index) => (
        <Friend key={index} person={person} />
      ))}
      {showPopup && (
        <div>
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h3>Add New Friend</h3>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Friends;
