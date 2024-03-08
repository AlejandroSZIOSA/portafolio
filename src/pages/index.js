//INFO: Mobile first to IPhone 12 Pro

import { useEffect } from "react";
import { useThemeContext } from "@/utils/context/ThemeContext";
import HeroSection from "@/components/main/HeroSection";
import NavBar from "@/components/main/NavBar";
import ProjectsSection from "@/components/main/ProjectsSection";

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
      <header className="flex flex-col w-full bg-[#343434] dark:bg-white items-center">
        <h1 className="text-[#F24E1E] my-2 text-5xl">Portafolio</h1>
        <div className={state ? "dark" : ""}>
          <button
            className="bg-slate-400 w-24 h-7 rounded-sm"
            onClick={toggleDarkMode}
          >
            {state.isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
            {/* Your content goes here */}
          </div>
        </div>
        <NavBar />
      </header>
      <main className="flex flex-col items-center">
        <HeroSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
