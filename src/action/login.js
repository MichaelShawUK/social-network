import { database } from "../data/constants";
import axios from "axios";
import { redirect } from "react-router-dom";

const loginAction = async ({ request }) => {
  const errors = {};
  const { username, password } = Object.fromEntries(await request.formData());

  if (username && password) {
    try {
      const response = await axios({
        method: "post",
        url: "login",
        baseURL: database,
        data: {
          username,
          password,
        },
      });

      console.log(response.data);
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
  }

  if (!username) {
    errors.username = "Username is required";
  } else if (!password) {
    errors.password = "Password is required";
  }
  return errors;
};

export default loginAction;
