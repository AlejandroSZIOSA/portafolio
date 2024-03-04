import React from "react";

//Reusable Tailwind styles
const navItemBoxes = "w-[83px] h-9 underline";

export default function NavBar() {
  return (
    <nav className="p-4">
      <ul className="flex gap-2 text-2xl list-none m-0 p-0">
        <li className={navItemBoxes}>
          <a href="#" className="text-[#00D8FF] ml-3">
            Start
          </a>
        </li>
        {/* <li className={navItemBoxes}>
              <a href="#" className="text-[#00D8FF] ml-3">
                Skills
              </a>
            </li> */}
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
  );
}
