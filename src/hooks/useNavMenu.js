import { useEffect, useContext } from "react";
import NavMenuContext from "../context/navMenu";

const useNavMenu = () => {
  const setShowMenu = useContext(NavMenuContext)[1];

  useEffect(() => {
    setShowMenu(false);
  }, [setShowMenu]);
};

export default useNavMenu;
