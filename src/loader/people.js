import { redirect } from "react-router-dom";
import axios from "axios";
import { database } from "../data/constants";

const peopleLoader = async () => {
  if (!localStorage.token) {
    return redirect("/login");
  }

  const { data } = await axios({
    url: `${database}/people`,
    headers: { Authorization: `Bearer ${localStorage.token}` },
  });

  return data;
};

export default peopleLoader;
