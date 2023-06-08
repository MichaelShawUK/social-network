import { Link } from "react-router-dom";
import error from "../assets/images/error.png";
import StyledError from "../styles/StyledError";

const Error = () => {
  return (
    <StyledError>
      <h1>An Error has occurred</h1>
      <img src={error} alt=""></img>
      <p>
        Return to <Link to="/">Home</Link>
      </p>
    </StyledError>
  );
};

export default Error;
