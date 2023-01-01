import React from "react";
import Notes from "./Notes";

export const Home = (props) => {
  return (
    <div>
      <Notes showalert={props.showalert} />
    </div>
  );
};
