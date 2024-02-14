//INFO: Mobile first to IPhone 12 Pro
import { useState } from "react";
import HeroSection from "@/components/main/HeroSection";
import { useThemeContext } from "@/utils/context/ThemeContext";

//Reusable styles
const navItemBoxes = "w-[83px] h-9 underline";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div id="mainContainer" className="flex flex-col items-center">
      <header className="flex flex-col w-full bg-[#343434] items-center ">
        <h1 className="text-[#F24E1E] my-2 text-6xl">Portafolio</h1>
        <div className={isDarkMode ? "dark" : ""}>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
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
