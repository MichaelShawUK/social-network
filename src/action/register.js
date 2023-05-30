import axios from "axios";
import { database } from "../data/constants";
import { redirect } from "react-router-dom";

const registerAction = async ({ request }) => {
  const errors = {};
  const { username, firstName, lastName, password, confirmPassword } =
    Object.fromEntries(await request.formData());

  if (!username) {
    errors.username = "Username is required";
  } else if (!firstName) {
    errors.firstName = "First name is required";
  } else if (!lastName) {
    errors.lastName = "Last name is required";
  } else if (!password) {
    errors.password = "Password is required";
  } else if (password !== confirmPassword) {
    errors.password = "Passwords do not match";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  try {
    const response = await axios({
      method: "post",
      baseURL: database,
      url: "register",
      data: {
        username,
        firstName,
        lastName,
        password,
      },
    });

    if (response?.data?.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("firstName", response.data.firstName);
      localStorage.setItem("lastName", response.data.lastName);
      localStorage.setItem("avatar", response.data.avatar);
      return redirect("/");
    } else {
      errors.database = response.data.message;
      return errors;
    }
  } catch (err) {
    errors.database = err.message;
    return errors;
  }
};

export default registerAction;
