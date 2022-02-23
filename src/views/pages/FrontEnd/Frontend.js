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
  ContainerFluid
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
  },[]);

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
        <Row>
          <div className="justify-between" style={{ marginBottom: "12px" }}>
            <Col span={12}>
              <img src={images.logo} alt={images.logo} width="55" />
            </Col>
            <Col span={12}>
              <div className="justify-between">
                <img
                  src={username.photoURL}
                  alt={username.photoURL}
                  width="50"
                  style={{
                    marginRight: "10px",
                  }}
                />
                <h4>{username.name}</h4>
                {!username.name ? (
                  <IButton
                    title="Login "
                    width="100px"
                    color={colors.blue_btn}
                    style={{
                      color: colors.white_text,
                      borderWidth: 0,
                      margin: 0,
                      padding: "5px",
                      boxShadow: "none",
                    }}
                    onClick={() => {
                      signInWithPopup(auth, provider)
                        .then((result) => {
                          setUsername({
                            name: result.user.displayName,
                            email: result.user.emai,
                            photoURL: result.user.photoURL,
                          });
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                  />
                ) : (
                  <IButton
                    title="Login Out "
                    width="150px"
                    color={colors.blue_btn}
                    style={{
                      color: colors.white_text,
                      borderWidth: 0,
                      margin: 0,
                      padding: "5px",
                      boxShadow: "none",
                      marginLeft: "10px",
                    }}
                    onClick={() => {
                      setUsername("");
                    }}
                  />
                )}
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
              }}
            >
              {listStory.value}
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
