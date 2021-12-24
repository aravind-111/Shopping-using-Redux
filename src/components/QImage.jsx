import React from "react";
import ReactImageZoom from "react-image-zoom";

function QImage({ zoom, src, className }) {
  console.log(zoom);
  return zoom ? (
    <ReactImageZoom img={src} width={200} height={200} zoomWidth={200} />
  ) : (
    <img className={className} src={src} alt="" />
  );
}

export default QImage;
