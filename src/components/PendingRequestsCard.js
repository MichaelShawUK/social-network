import PendingRequest from "./PendingRequest";
import StyledPendingRequestsCard from "../styles/StyledPendingRequestsCard";
import LoadingCard from "./LoadingCard";
import { useState } from "react";

const PendingRequestsCard = ({ requests, update, setUpdate }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <StyledPendingRequestsCard>
      <h3>Friend Requests</h3>
      <div className="requests">
        {requests.map((request) => (
          <PendingRequest
            request={request}
            key={request._id}
            update={update}
            setUpdate={setUpdate}
            setIsLoading={setIsLoading}
          />
        ))}
      </div>
      {isLoading && <LoadingCard />}
    </StyledPendingRequestsCard>
  );
};

export default PendingRequestsCard;
