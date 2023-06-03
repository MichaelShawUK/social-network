import { redirect } from "react-router-dom";

const peopleLoader = async () => {
  if (!localStorage.token) {
    return redirect("/login");
  }

  return null;
};

export default peopleLoader;
