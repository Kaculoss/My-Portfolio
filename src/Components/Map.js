import React from "react";
import Ptext from "./Ptext";

export default function Map() {
  return (
    <div
      className="Map"
      style={{
        background: "url('/images/Home map1.png') no-repeat center 20% / cover",
      }}
    >
      <div className="container">
        <div className="map-card">
          <h3 className="map-card-heading">Here is me</h3>
          <Ptext>Zongo, Koforidua, Ghana</Ptext>
          <a
            href="https://www.google.com/maps/place/6%C2%B006'26.2%22N+0%C2%B015'08.5%22W/@6.1049181,-0.2530573,16.25z/data=!4m6!3m5!1s0xfdf41a62be536bb:0xedee0697264e8164!7e2!8m2!3d6.1072905!4d-0.252361"
            target="_blank"
            rel="noreferrer"
            className="map-card-link"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </div>
  );
}
