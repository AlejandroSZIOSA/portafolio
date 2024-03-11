import React from "react";
import CardViewProject from "./CardViewProject";

/* TODO: 
-Add image link as Props
-Use a list with columns Css
-Use API Object List 
-Use component cardViewProject 
*/

export default function ProjectsSection() {
  return (
    <div className="py-14">
      <h2>Project Section</h2>
      <CardViewProject />
    </div>
  );
}
