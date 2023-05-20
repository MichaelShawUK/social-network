import { redirect } from "react-router-dom";

const profileLoader = async () => {
  if (!localStorage.token) {
    return redirect("/login");
  }

  return null;
};

export default profileLoader;
