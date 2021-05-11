import React from "react";
import Gallery from "./gallery";
import Review from "./review";
import AltHeader from "../layout/altheader";

export default function PageGallery() {
  return (
    <div>
      <AltHeader title={"Gallery"} />
      <Gallery />
      <Review />
    </div>
  );
}
