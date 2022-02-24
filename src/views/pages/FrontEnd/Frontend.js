import { Col, Row } from "antd";
import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import "../../../App.css";
import { colors, images } from "../../../assets";
import { auth, provider } from "../../../services/firebase/config";
import { stories } from "../../../services/mockdata";
import IButton from "../../components/IButton";
import ITitle from "../../components/ITitle";
import {
  Container,
  ContainerFluid,
} from "../../components/styles/styledContainer";
import { StyleParaph } from "../../components/styles/styleParaphrase";

export default function Frontend() {
  const [listStory, setListStory] = useState(() => {
    const filterlist = stories.filter((item) => item.key === 1)[0];
    return filterlist;
  });
  const [username, setUsername] = useState({});
  console.log(username.name);

  useEffect(() => {
    document.title = "FRONT END - TEST";
  }, []);

  const handleChangeStory = () => {
    if (listStory.key === 1) {
      const filterlist = stories.filter((item) => item.key === 2)[0];
      setListStory(filterlist);
    } else if (listStory.key === 2) {
      const filterlist = stories.filter((item) => item.key === 3)[0];
      setListStory(filterlist);
    } else if (listStory.key === 3) {
      const filterlist = stories.filter((item) => item.key === 4)[0];
      setListStory(filterlist);
    } else if (listStory.key === 4) {
      const filterlist = stories.filter((item) => item.key === 5)[0];
      setListStory(filterlist);
    }
  };

  return (
    <div>
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <div className="justify-between" style={{ marginBottom: "12px" }}>
            <Col span={12}>
              <img src={images.logo} alt={images.logo} width="55" />
            </Col>
            <Col span={12}>
              <div className="justify-between">
                <div style={{ marginRight: 15, lineHeight: "1.2rem" }}>
                  <p style={{ margin: 0, color: colors.dark_text }}>
                    <i>Handicrafted by</i>
                  </p>
                  <p style={{ margin: 0, textAlign: "end", color: "#000000" }}>
                    Jim HLS
                  </p>
                </div>
                <img src={images.logoLogin} alt={images.logoLogin} width="55" />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
      <ContainerFluid
        style={{
          textAlign: "center",
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
                color: listStory.key === 5 ? colors.green_bg : colors.dark_text,
                textAlign: listStory.key === 5 ? "center" : "none",
                fontWeight: listStory.key === 5 ? "900" : "unset",
                fontSize: listStory.key === 5 ? 30 : 20,
                lineHeight: "1.7rem",
                marginBottom: "45px",
              }}
            >
              {listStory.value}
            </p>
          </Col>
          <Col>
            <div className="flex" style={{ margin: "80px " }}>
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
                onClick={() => {
                  handleChangeStory();
                  // record the vote in database
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
                onClick={() => {
                  handleChangeStory();
                  // record the vote in database
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
            materials  contained on this website are provided for general
            information only and <br /> do not constitute  any form of advice. HLS
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
