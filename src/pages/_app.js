/* import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
 */

import { useEffect } from "react";
import { ThemeProvider } from "../utils/context/ThemeContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  /* const { state } = useTheme();
  
  useEffect(() => {
    
  }, [state.theme]); */

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
