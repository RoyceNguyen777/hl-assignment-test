import { Col, Row } from "antd";
import React from "react";
import {
  Container,
  ContainerFluid,
} from "../../components/styles/styledContainer";
import "../../../App.css";
import { colors, images } from "../../../assets";
import ITitle from "../../components/ITitle";
import IButton from "../../components/IButton";
import { StyleParaph } from "../../components/styles/styleParaphrase";

export default function Frontend() {
  return (
    <div>
      <Container>
        <Row>
          <div className="justify-between" style={{ marginBottom: "12px" }}>
            <Col span={12}>
              <img src={images.logo} alt={images.logo} width="55" />
            </Col>
            <Col span={12}>Firebase</Col>
          </div>
        </Row>
      </Container>
      <ContainerFluid
        style={{
          textAlign: "end",
          color: colors.white_text,
          marginBottom: "70px",
        }}
      >
        <ITitle
          title="A joke a day keeps the doctor away"
          fontSize={40}
          style={{ whiteSpace: "nowrap", marginBottom: 0 }}
        />
        <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
      </ContainerFluid>
      <Container>
        <Row>
          <Col>
            <p
              style={{
                color: colors.dark_text,
                fontSize: 20,
                lineHeight: "1.7rem",
              }}
            >
              A child asked his father, "How were people born?" So his father
              said, "Adam and Eve made babies, then their babies became adults
              and made babies, and so on." The child then went to his mother,
              asked her the same question and she told him, "We were monkeys
              then we evolved to become like we are now." The child ran back to
              his father and said, "You lied to me!" His father replied, "No,
              your mom was talking about her side of the family."
            </p>
          </Col>
          <Col>
            <div className="justify-between" style={{ margin: "100px " }}>
              <IButton
                title="this is Funny!"
                width="350px"
                color={colors.blue_btn}
                style={{
                  borderRadius: 0,
                  color: colors.white_text,
                  borderWidth: 0,
                  boxShadow: "none",
                }}
              />
              <IButton
                title="this is not Funny!"
                width="350px"
                color={colors.green_bg}
                style={{
                  borderRadius: 0,
                  color: colors.white_text,
                  borderWidth: 0,
                  boxShadow: "none",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <StyleParaph>
            This website is created as part of Hlsolutions program. The
            materials contained on this website are provided for general
            information only and do not constitute any form of advice. HLS
            assumes no responsibility for the accuracy of any particular
            statement and accepts no liability for any loss or damage which may
            arise from reliance on the information contained on this site.
            <p style={{ color: "#646464" }}> Copyright 2021 HLS</p>
          </StyleParaph>
        </Row>
      </Container>
    </div>
  );
}
