import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "defaultname",
    email: "default email",
  },
});

userContext.displayName = "userContext";

export default userContext;
