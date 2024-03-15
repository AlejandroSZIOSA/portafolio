import React from "react";
import Image from "next/image";

/* TODO: Fix Image problem */
export default function CardViewProject({ project }) {
  const { title, description, imgUrl, gitHubLink } = project;

  //console.log(imgUrl);
  return (
    <div>
      <h2>{title}</h2>
      <Image src={imgUrl} width={300} height={300} alt="no image" />
      <h3>{description}</h3>
      <h3>{gitHubLink}</h3>
    </div>
  );
}
