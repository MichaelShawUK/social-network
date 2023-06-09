import StyledButton from "../styles/StyledButton";
import StyledLogin from "../styles/StyledLogin";
import { Link, useFetcher } from "react-router-dom";
import useNavMenu from "../hooks/useNavMenu";
import LoginSvg from "../assets/svg/LoginSvg";
import { useEffect, useContext, useState } from "react";
import LoggedInContext from "../context/loggedIn";
import Loading from "./Loading";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.state === "submitting") {
      setIsLoading(true);
      setUsername(Object.fromEntries(fetcher.formData).username);
      setPassword(Object.fromEntries(fetcher.formData).password);
    }
    if (fetcher.state === "idle") {
      setIsLoading(false);
      if (fetcher.data) {
        setErrors(fetcher.data);
      }
    }
  }, [fetcher]);

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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledLogin>
          <fetcher.Form method="POST">
            <h2>Welcome Back</h2>
            <label>
              <p className="error">{errors?.username}</p>
              Username
              <input
                type="text"
                name="username"
                defaultValue={username}
              ></input>
            </label>
            <label>
              <p className="error">{errors?.password}</p>
              Password
              <input
                type="password"
                name="password"
                defaultValue={password}
              ></input>
            </label>
            <div>
              <p className="error">{errors?.database}</p>
              <StyledButton type="submit">Log In</StyledButton>
              <StyledButton onClick={handleDemo}>Demo Tour</StyledButton>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>{" "}
            </p>
          </fetcher.Form>
          <LoginSvg />
        </StyledLogin>
      )}
    </>
  );
};

export default Login;
