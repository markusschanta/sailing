import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@markusschanta/sailing-link";

function SailingLink() {
  const ref = useRef();

  useEffect(() => {
    (new Runtime()).module(notebook, name => {
      if (name === "viewof date") return Inspector.into(ref.current.querySelector(".viewof-date"))();
      if (name === "viewof map") return Inspector.into(ref.current.querySelector(".viewof-map"))();
      if (name === "viewof time_slider") return Inspector.into(ref.current.querySelector(".viewof-time_slider"))();
      if (name === "viewof velocity_chart") return Inspector.into(ref.current.querySelector(".viewof-velocity_chart"))();
      if (name === "leaflet_css") return Inspector.into(ref.current.querySelector(".leaflet_css"))();
      return ["time_slider","velocity_chart","velocity_chart_updater","lat_long","feature_group_updater","map"].includes(name);
    });
  }, []);

  return (
    <div className="SailingLink" ref={ref}>
      <div className="viewof-date"></div>
      <div className="viewof-map"></div>
      <div className="viewof-time_slider"></div>
      <div className="viewof-velocity_chart"></div>
      <div className="leaflet_css"></div>
    </div>
  );
}

export default SailingLink;
