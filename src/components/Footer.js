import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);

  return <h4>{user.name}</h4>;
};

export default Footer;
