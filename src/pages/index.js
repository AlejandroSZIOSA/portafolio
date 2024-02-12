const navItemBoxes = "w-[83px] h-9 bg-[#444444] rounded-sm underline";

export default function Home() {
  return (
    <div id="mainContainer" className="flex flex-col items-center">
      <header className="flex flex-col w-full bg-[#343434] items-center ">
        <h1 className="text-[#F24E1E] my-3 text-6xl">Portafolio</h1>
        <nav className="p-2">
          <ul className="flex gap-2 text-2xl text-[#00D8FF] list-none m-0 p-0">
            <li className={navItemBoxes}>
              <a>Start</a>
            </li>
            <li className={navItemBoxes}>
              <a>Skills</a>
            </li>
            <li className={navItemBoxes}>
              <a>Projects</a>
            </li>
            <li className={navItemBoxes}>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/*     <div>
          <ThemeDemo />
        </div> */}
      </main>
    </div>
  );
}
