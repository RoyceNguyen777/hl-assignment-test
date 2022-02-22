import { Button } from "antd";
import styled from "styled-components";
import colors from "../../../assets/colors";

const StyledIButton = styled(Button)`
  padding: 15px;
  background-color: ${(props) => props.color};
  border-radius: 25px;
  font-size: 20px;
  font-weight: 900;
  color: ${colors.white_text};
  box-shadow: 5px 5px 5px ${colors.dark_text};
  margin: 25px;
  cursor: pointer;
`;
export { StyledIButton };
