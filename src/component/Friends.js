import { useState } from "react";

function Friend({ person }) {
  return (
    <div className="Friend">
      <h2>{person?.name || "Ahmed"}</h2>
    </div>
  );
}

function Friends({ friends, setFriends }) {
  const [showPopup, setShowPopup] = useState(false);
  const [friendsName, setFriendsName] = useState("");

  const handleAddFriendClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const friend = {
      name: friendsName,
      image: "https://via.placeholder.com/50",
    };
    setFriends([...friends, friend]);
    setFriendsName("");
    closePopup();
  };
  return (
    <div className="Friends">
      {!showPopup && (
        <button className="btn" onClick={handleAddFriendClick}>
          Add friends
        </button>
      )}

      {showPopup && (
        <div>
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    className="btn"
                    type="text"
                    value={friendsName}
                    onChange={(e) => setFriendsName(e.target.value)}
                    placeholder="Enter a text here!"
                  />
                </div>

                <div className="button-group">
                  <button type="submit" className="btn">
                    submit
                  </button>
                  <button className="btn btn-cancel" onClick={closePopup}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Friends;
export { Friend };
