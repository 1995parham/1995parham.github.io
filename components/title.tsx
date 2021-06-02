import Divier from "./divider";
import React from "react";

type TitpProps = {
  title: string;
};

function Title({ title }: TitpProps) {
  return (
    <div className="main-title">
      <h1>{title}</h1>
      <Divier />
    </div>
  );
}

export default Title;
