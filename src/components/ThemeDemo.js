import { useThemeContext } from "@/utils/context/ThemeContext";

export default function ThemeDemo() {
  //8 import context to the project
  const { state, dispatch } = useThemeContext();

  //9 Consuming the Context with the reducer
  function handleToLightMode() {
    dispatch({ type: "toLight", background: "white", text: "black" });
  }

  function handleToDarkMode() {
    dispatch({ type: "toDark", background: "white", text: "black" });
  }

  return (
    <>
      <h1>Context test Component</h1>
      <button onClick={handleToLightMode}>To Light</button>
      <br />
      <button onClick={handleToDarkMode}>To Dark</button>
      <p>
        {state.background} {state.text}
      </p>
    </>
  );
}
