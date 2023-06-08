import StyledPendingRequest from "../styles/StyledPendingRequest";
import { useFetcher } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { database, demoUserId } from "../data/constants";

const PendingRequest = ({ request, update, setUpdate, setIsLoading }) => {
  let fetcher = useFetcher();

  const [error, setError] = useState(false);

  useEffect(() => {
    async function acceptRequest() {
      await axios({
        method: "POST",
        url: `${database}/friendship`,
        headers: { Authorization: `Bearer ${localStorage.token}` },
        data: { friend: request._id },
      });
      setIsLoading(false);
      setUpdate(!update);
    }

    async function rejectRequest() {
      await axios({
        method: "POST",
        url: `${database}/reject`,
        headers: { Authorization: `Bearer ${localStorage.token}` },
        data: { sender: request._id },
      });
      setIsLoading(false);
      setUpdate(!update);
    }

    if (fetcher.formData) {
      if (localStorage.getItem("userId") === demoUserId) {
        setError(true);
      } else {
        const formData = Object.fromEntries(fetcher.formData);
        setIsLoading(true);

        if (Object.keys(formData).includes("accept")) {
          acceptRequest();
        } else if (Object.keys(formData).includes("reject")) {
          rejectRequest();
        }
      }
    }
  }, [fetcher, request, update, setUpdate, setIsLoading]);

  return (
    <StyledPendingRequest>
      <img src={request.avatar} alt="" className="avatar"></img>
      <div className="name">{`${request.firstName} ${request.lastName}`}</div>
      <fetcher.Form>
        <input
          type="text"
          name="friend"
          defaultValue={request._id}
          readOnly
          hidden
        ></input>
        <input
          type="checkbox"
          name="accept"
          checked={true}
          readOnly
          hidden
        ></input>
        <button className="accept btn">Accept</button>
      </fetcher.Form>

      <fetcher.Form>
        <input
          type="text"
          name="sender"
          defaultValue={request._id}
          readOnly
          hidden
        ></input>
        <input
          type="checkbox"
          name="reject"
          checked={true}
          readOnly
          hidden
        ></input>
        <button className="reject btn">Reject</button>
      </fetcher.Form>
      {error && (
        <p className="error center pad">
          Handling friend requests is disabled for the demo. Create new account
          for full functionality
        </p>
      )}
    </StyledPendingRequest>
  );
};

export default PendingRequest;
