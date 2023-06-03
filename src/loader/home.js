import { redirect } from "react-router-dom";

const homeLoader = async () => {
  console.log("1 Loader runs");
  if (!localStorage.token) {
    return redirect("/login");
  }

  return null;
};

export default homeLoader;
