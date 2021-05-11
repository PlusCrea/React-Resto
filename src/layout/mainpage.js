import React from "react";

import MainSlider from "../components/mainslider";
import About from "./about";
import Menu from "../components/menu";
import Gallery from "../components/gallery";
import Review from "../components/review";

export default function MainPage() {
  return (
    <div>
      <MainSlider />
      <About />
      <Menu />
      <Gallery />
      <Review />
      {/*
      <MainSlider listSlider={listSlider} />
       {listSlider ? <MainSlider listSlider={listSlider} /> : ""}
      <About />
      <Menu />
      <Gallery />
      <Review />
     */}
    </div>
  );
}
