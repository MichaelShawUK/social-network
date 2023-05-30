import { redirect } from "react-router-dom";
import axios from "axios";
import { database } from "../data/constants";

const homeLoader = async () => {
  if (!localStorage.token) {
    return redirect("/login");
  }

  const { data } = await axios({
    baseURL: database,
    headers: { Authorization: `Bearer ${localStorage.token}` },
  });

  if (data.message === "invalid token") {
    return redirect("/login");
  }

  return data;
};

export default homeLoader;
