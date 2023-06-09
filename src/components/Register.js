import StyledButton from "../styles/StyledButton";
import StyledLogin from "../styles/StyledLogin";
import RegisterSvg from "../assets/svg/RegisterSvg";
import { Link, useFetcher } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.state === "submitting") {
      setIsLoading(true);
      const formData = Object.fromEntries(fetcher.formData);
      setForm((f) => {
        return {
          ...f,
          ...formData,
        };
      });
    }
    if (fetcher.state === "idle") {
      setIsLoading(false);
      if (fetcher.data) {
        setErrors(fetcher.data);
      }
    }
  }, [fetcher]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledLogin>
          <fetcher.Form method="POST">
            <h2>Get Started</h2>
            <label>
              <p className="error">{errors?.username}</p>
              Username
              <input
                type="text"
                name="username"
                defaultValue={form.username}
              ></input>
            </label>
            <label>
              <p className="error">{errors?.firstName}</p>
              First Name
              <input
                type="text"
                name="firstName"
                defaultValue={form.firstName}
              ></input>
            </label>
            <label>
              <p className="error">{errors?.lastName}</p>
              Last Name
              <input
                type="text"
                name="lastName"
                defaultValue={form.lastName}
              ></input>
            </label>
            <label>
              <p className="error">{errors?.password}</p>
              Password
              <input
                type="password"
                name="password"
                defaultValue={form.password}
              ></input>
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                defaultValue={form.confirmPassword}
              ></input>
            </label>
            <div>
              <p className="error">{errors?.database}</p>
              <StyledButton type="submit">Register</StyledButton>
            </div>
            <p>
              Already have an account? <Link to="/login">Log In</Link>{" "}
            </p>
          </fetcher.Form>
          <RegisterSvg />
        </StyledLogin>
      )}
    </>
  );
};

export default Register;
