import { useEffect } from "react";
import { ThemeProvider, useTheme } from "@/components/ThemeContex";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  /* useEffect(() => {
    // Your code here. Add the dark class to the <html /> tag
    // with vanilla js.
    const bodyEl = document.querySelector("html");
    bodyEl.classList.add("dark");
  }, [state.theme]); */

  return <Component {...pageProps} />;
}

/* export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);
 */
