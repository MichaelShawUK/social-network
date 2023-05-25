import StyledPostHeader from "../styles/StyledPostHeader";

const PostHeader = () => {
  return (
    <StyledPostHeader>
      <img src={localStorage.getItem("avatar")} alt=""></img>
      <div>
        <div className="author">{`${localStorage.getItem(
          "firstName"
        )} ${localStorage.getItem("lastName")}`}</div>
        <div className="time-since">Time Posted</div>
      </div>
    </StyledPostHeader>
  );
};

export default PostHeader;
