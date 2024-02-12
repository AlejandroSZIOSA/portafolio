import ThemeDemo from "@/components/ThemeDemo";

export default function Home() {
  /* console.log("hola"); */
  const navBox = "";

  return (
    <div id="mainContainer" className="flex flex-col items-center ">
      <header className="flex flex-col w-full bg-black">
        <h1 className="text-white">Portafolio</h1>
        <nav className="flex flex-row text-red-500">
          <ol className="inline-flex gap-3">
            <a>Start</a>
            <a>Skills</a>
            <a>projects</a>
            <a>Contact</a>
          </ol>
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
