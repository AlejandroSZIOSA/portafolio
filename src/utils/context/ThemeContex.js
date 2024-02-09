import { createContext, useReducer } from "react";
//1 create context
const ThemeContext = createContext();

//3 Initial state reducer obj

const initialState = {
  backgroundColor: "black",
  textColor: "white",
};

//4 create reducer function dispatcher

function themeReducer(state, action) {
  switch (action.type) {
    case "toDark": {
    }
    case "toLight": {
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

//2 Define Provider
export const ThemeProvider = ({ children }) => {
  //3 declare reducer
  const [state, dispatch] = useReducer();
};
