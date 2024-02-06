import React, { createContext, useContext, useReducer } from "react";

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
}

export const ThemeProvider = ({ children }) => {
  // your code here
};

// Create and use your own hook instead of using useContext in the components
export const useTheme = () => useContext(ThemeContext);
