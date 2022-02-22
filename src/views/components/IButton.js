import React from "react";
import { StyledIButton } from "./styles/styledIButton";

export default function IButton(props) {
  const { title, style, width } = props;
  return (
    <StyledIButton {...props} style={{ ...style, width }}>
      {title}
    </StyledIButton>
  );
}
