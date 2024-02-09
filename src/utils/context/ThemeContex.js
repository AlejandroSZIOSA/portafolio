import { createContext, useReducer } from "react";
//1 create context
const ThemeContext = createContext();

//3 Initial state reducer obj

const initialState = {
  backgroundColor: "dark",
  textColor: "white",
};

//4 create reducer function dispatcher

function themeReducer(state, action) {
  switch (action.type) {
    case "toLight": {
      return { ...state, backgroundColor: "white", textColor: "black" };
    }
    case "toDark": {
      return { ...state, backgroundColor: "black", textColor: "white" };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

//2 Define Provider
export const ThemeProvider = ({ children }) => {
  //3 declare reducer  //5 pass reducers and initial states
  const [state, dispatch] = useReducer(themeReducer, initialState);

  //6 return the wrapper parent Context JSX.
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
