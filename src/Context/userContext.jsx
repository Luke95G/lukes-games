import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUsername, setLoggedInUserName] = useState({
    name: "grumpy19",
    img_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });

  return (
    <UserContext.Provider value={{ loggedInUsername, setLoggedInUserName }}>
      {props.children}
    </UserContext.Provider>
  );
};