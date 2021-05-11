import React from "react";
import Menu from "./menu";
import AltHeader from "../layout/altheader";
import About from "../layout/about";

export default function PageAbout() {
  return (
    <div>
      <AltHeader title={"About Us"} />
      <About />
      <Menu />
    </div>
  );
}
