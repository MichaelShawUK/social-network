import StyledComment from "../styles/StyledComment";

const Comment = () => {
  return (
    <StyledComment>
      <header>
        <div className="author">Name</div>
        <div className="time-since">Time Posted</div>
      </header>
      <div>
        Maecenas id accumsan velit. Cras ac eros justo. Curabitur varius
        consequat pulvinar. Mauris tincidunt mollis.
      </div>
    </StyledComment>
  );
};

export default Comment;
