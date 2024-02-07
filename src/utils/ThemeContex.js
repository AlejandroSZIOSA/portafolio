import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
  theme: "light",
  userPreferences: {
    fontSize: "medium",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  // your code here
  switch (action.type) {
    case "toDarkMode": {
      return {
        ...state,
        theme: "dark",
      };
    }
    case "toLightMode": {
      return {
        ...state,
        theme: "light",
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const ThemeProvider = ({ children }) => {
  // your code here
  const [state, dispatch] = useReducer(themeReducer, initialState);
};

// Create and use your own hook instead of using useContext in the components
export const useTheme = () => useContext(ThemeContext);
