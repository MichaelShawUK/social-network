import { redirect } from "react-router-dom";

const homeLoader = async () => {
  if (!localStorage.token) {
    return redirect("/login");
  }

  return null;
};

export default homeLoader;
