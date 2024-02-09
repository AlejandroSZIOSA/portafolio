import { useThemeContext } from "@/utils/context/ThemeContext";

export default function Home() {
  const { state, dispatch } = useThemeContext();

  function handleToLightMode() {
    dispatch({ type: "toLight", background: "white", text: "black" });
  }

  /* console.log("hola"); */
  return (
    <main>
      <div>
        test1
        <p>Index</p>
        <button onClick={handleToLightMode}>To Light</button>
        <p>{state.background}</p>
      </div>
    </main>
  );
}
