import styled from "styled-components";
import { colors } from "../../../assets";

const Container = styled.div`
  margin: 0px 280px;
`;
const ContainerFluid = styled.div`
  margin: 0px;
  padding: 90px 480px;
  background-color: ${colors.green_bg};
  @media (min-width: 740px) and (max-width: 1300px) {
    padding: 45px 120px;
  }
`;
export { Container, ContainerFluid };
