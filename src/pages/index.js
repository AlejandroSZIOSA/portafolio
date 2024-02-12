//INFO: IPhone 12 Pro

//Reusable styles
const navItemBoxes = "w-[83px] h-9 bg-[#5B5B5B] rounded-sm underline";

export default function Home() {
  return (
    <div id="mainContainer" className="flex flex-col items-center">
      <header className="flex flex-col w-full bg-[#343434] items-center ">
        <h1 className="text-[#F24E1E] my-2 text-6xl">Portafolio</h1>
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
        <section id="heroSection" className="flex flex-col items-center">
          <div className="size-80 bg-white"></div>
          <p className="text-4xl">
            Hi! My name is <strong>Gabriel Sazo </strong>I am learning build
            Frontend aplications for Web and Mobile.
          </p>
        </section>
      </main>
    </div>
  );
}
