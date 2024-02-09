import { ThemeProvider } from "../utils/context/ThemeContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  //App with Context and reducer
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
