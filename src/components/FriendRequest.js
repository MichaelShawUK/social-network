import StyledButton from "../styles/StyledButton";
import StyledFriendRequest from "../styles/StyledFriendRequest";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { database } from "../data/constants";

const FriendRequest = ({ user, update, setUpdate }) => {
  const loggedInUserId = localStorage.getItem("userId");

  const friendIds = user.friends.map((friend) => friend._id);
  const isFriend = friendIds.includes(loggedInUserId);

  const friendRequestIds = user.friendRequests.map((request) => request._id);
  const isRequestPending = friendRequestIds.includes(loggedInUserId);

  let fetcher = useFetcher();

  useEffect(() => {
    async function unfriendUsers() {
      await axios({
        method: "POST",
        url: `${database}/friendship`,
        headers: { Authorization: `Bearer ${localStorage.token}` },
        data: { friend: user._id },
      });
      setUpdate(!update);
    }

    async function sendFriendRequest() {
      await axios({
        method: "POST",
        url: `${database}/befriend`,
        headers: { Authorization: `Bearer ${localStorage.token}` },
        data: { receiver: user._id },
      });
      setUpdate(!update);
    }

    if (fetcher.formData) {
      const formData = Object.fromEntries(fetcher.formData);

      if (Object.keys(formData).includes("isFriend")) {
        unfriendUsers();
      } else {
        sendFriendRequest();
      }
    }
  }, [fetcher, user, update, setUpdate]);

  return (
    <StyledFriendRequest>
      <img src={user.avatar} alt=""></img>
      <div className="name">{`${user.firstName} ${user.lastName}`}</div>
      {isRequestPending ? (
        <div className="pending">
          Awaiting {user.firstName}'s response from friendship request
        </div>
      ) : (
        <fetcher.Form>
          <input
            type="text"
            name="receiver"
            defaultValue={user._id}
            hidden
            readOnly
          ></input>
          <input
            type="checkbox"
            name="isFriend"
            checked={isFriend}
            readOnly
            hidden
          ></input>
          {isFriend ? (
            <StyledButton>Unfriend</StyledButton>
          ) : (
            <StyledButton>Friend Request</StyledButton>
          )}
        </fetcher.Form>
      )}
    </StyledFriendRequest>
  );
};

export default FriendRequest;
