import StyledButton from "../styles/StyledButton";
import StyledForm from "../styles/StyledForm";
import StyledLogin from "../styles/StyledLogin";
import { Link, useActionData } from "react-router-dom";
import useNavMenu from "../hooks/useNavMenu";
import LoginSvg from "../assets/svg/LoginSvg";
import { useEffect, useContext } from "react";
import LoggedInContext from "../context/loggedIn";

const Login = () => {
  const errors = useActionData();

  const setLoggedIn = useContext(LoggedInContext)[1];

  useEffect(() => {
    setLoggedIn(false);
  }, [setLoggedIn]);

  function handleDemo(e) {
    e.target.form[0].value = "Test";
    e.target.form[1].value = "User";
  }

  useNavMenu();

  return (
    <StyledLogin>
      <StyledForm method="POST">
        <h2>Welcome Back</h2>
        <label>
          <p className="error">{errors?.username}</p>
          Username
          <input type="text" name="username" autoFocus></input>
        </label>
        <label>
          <p className="error">{errors?.password}</p>
          Password
          <input type="password" name="password"></input>
        </label>
        <div>
          <p className="error">{errors?.database}</p>
          <StyledButton type="submit">Log In</StyledButton>
          <StyledButton onClick={handleDemo}>Demo Tour</StyledButton>
        </div>
        <p>
          Don't have an account? <Link to="/register">Register</Link>{" "}
        </p>
      </StyledForm>
      <LoginSvg />
    </StyledLogin>
  );
};

export default Login;
