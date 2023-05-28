import PendingRequest from "./PendingRequest";
import StyledPendingRequestsCard from "../styles/StyledPendingRequestsCard";

const PendingRequestsCard = ({ requests, update, setUpdate }) => {
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
          />
        ))}
      </div>
    </StyledPendingRequestsCard>
  );
};

export default PendingRequestsCard;
