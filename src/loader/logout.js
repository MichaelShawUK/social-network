import { redirect } from "react-router-dom";

const logoutLoader = () => {
  localStorage.clear();
  return redirect("/login");
};

export default logoutLoader;
