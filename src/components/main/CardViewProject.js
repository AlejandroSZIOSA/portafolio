import React from "react";
import Image from "next/image";
import testImg from "/src/assets/projects-img/testImg.png";

/* TODO: Fix Image problem */
export default function CardViewProject() {
  return (
    <div>
      <h2>Project Title</h2>
      <Image src={testImg} width={200} height={200} />
      <h3>Description</h3>
    </div>
  );
}
