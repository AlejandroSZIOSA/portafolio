import React from "react";

/* TODO: Fix Image problem */
export default function CardViewProject() {
  return (
    <div>
      <h1>CardView Title</h1>
      <img
        className="w-32 h-20 object-cover rounded-full"
        src="/src/assets/projects-img/testImg.png"
      />
      <h2>Description</h2>
    </div>
  );
}
