import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  console.log("hola");
  return (
    <main class="light" className="flex bg-black dark:text-red-500">
      <div>
        test1
        <p>Index</p>
      </div>
    </main>
  );
}
