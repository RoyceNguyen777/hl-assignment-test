import React from "react";
import colors from "../../assets/colors";
import { StyledIButton } from "./styles/styledIButton";

export default function IButton(props) {
  const { title } = props;
  return <StyledIButton {...props}>{title}</StyledIButton>;
}
