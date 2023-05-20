import { useEffect, useContext } from "react";
import NavMenuContext from "../context/navMenu";

const useNavMenu = () => {
  const [showMenu, setShowMenu] = useContext(NavMenuContext);

  useEffect(() => {
    setShowMenu(false);
  }, []);
};

export default useNavMenu;
