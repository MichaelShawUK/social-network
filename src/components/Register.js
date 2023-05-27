import StyledButton from "../styles/StyledButton";
import StyledForm from "../styles/StyledForm";
import StyledLogin from "../styles/StyledLogin";
import RegisterSvg from "../assets/svg/RegisterSvg";
import { Link, useActionData } from "react-router-dom";

const Register = () => {
  const errors = useActionData();

  return (
    <StyledLogin>
      <StyledForm action="/register" method="POST">
        <h2>Get Started</h2>
        <label>
          <p className="error">{errors?.username}</p>
          Username
          <input type="text" name="username" autoFocus></input>
        </label>
        <label>
          <p className="error">{errors?.firstName}</p>
          First Name
          <input type="text" name="firstName"></input>
        </label>
        <label>
          <p className="error">{errors?.lastName}</p>
          Last Name
          <input type="text" name="lastName"></input>
        </label>
        <label>
          <p className="error">{errors?.password}</p>
          Password
          <input type="password" name="password"></input>
        </label>
        <label>
          Confirm Password
          <input type="password" name="confirmPassword"></input>
        </label>
        <div>
          <p className="error">{errors?.database}</p>
          <StyledButton type="submit">Register</StyledButton>
        </div>
        <p>
          Already have an account? <Link to="/login">Log In</Link>{" "}
        </p>
      </StyledForm>
      <RegisterSvg />
    </StyledLogin>
  );
};

export default Register;
