import styled from "@emotion/styled";
import React from "react";

interface IconProps {
  type: string;
}

const Icon = ({ type }: IconProps) => {
  return (
    <span className="material-icons" style={{ color: "inherit" }}>
      {type}
    </span>
  );
};

export default Icon;
