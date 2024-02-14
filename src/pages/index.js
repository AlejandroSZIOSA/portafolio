//INFO: Mobile first to IPhone 12 Pro

import { useEffect } from "react";
import { useThemeContext } from "@/utils/context/ThemeContext";
import HeroSection from "@/components/main/HeroSection";

//Reusable Tailwind styles
const navItemBoxes = "w-[83px] h-9 underline";

export default function Home() {
  //8 import context to the project
  const { state, dispatch } = useThemeContext();

  useEffect(() => {
    handleDarkModeClass();
  }, [state.isDarkMode]);

  const handleDarkModeClass = () => {
    if (!state.isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const toggleDarkMode = () => {
    if (state.isDarkMode) {
      dispatch({ type: "toLight" });
      /* console.log(state.isDarkMode); */
    } else {
      dispatch({ type: "toDark" });
      /* console.log(state.isDarkMode); */
    }

    /* setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark"); */
  };

  return (
    <div id="mainContainer" className="flex flex-col items-center">
      <header className="flex flex-col w-full bg-[#343434] dark:bg-white items-center ">
        <h1 className="text-[#F24E1E] my-2 text-6xl">Portafolio</h1>
        <div className={state ? "dark" : ""}>
          <button onClick={toggleDarkMode}>
            {state.isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
            {/* Your content goes here */}
          </div>
        </div>
        <nav className="p-4">
          <ul className="flex gap-2 text-2xl list-none m-0 p-0">
            <li className={navItemBoxes}>
              <a href="#" className="text-[#00D8FF] ml-3">
                Start
              </a>
            </li>
            <li className={navItemBoxes}>
              <a href="#" className="text-[#00D8FF] ml-3">
                Skills
              </a>
            </li>
            <li className={navItemBoxes}>
              <a href="#" className="text-[#00D8FF] ml-1">
                Projects
              </a>
            </li>
            <li className={navItemBoxes}>
              <a href="#" className="text-[#00D8FF] ml-1">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="py-4 m-0">
        <HeroSection />
      </main>
    </div>
  );
}
