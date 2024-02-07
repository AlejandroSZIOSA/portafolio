/* import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
 */

import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./ThemeContex";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  /* const { state } = useTheme();
  
  useEffect(() => {
    
  }, [state.theme]); */

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <MyApp Component={Component} pageProps={pageProps} />
);
