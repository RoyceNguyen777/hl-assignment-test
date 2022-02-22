import { Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import colors from "../../../assets/colors";
import IButton from "../../components/IButton";
import ITitle from "../../components/ITitle";

export default function Home() {
  let navigate = useNavigate();

  return (
    <div
      style={{
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <Col span={24}>
          <ITitle
            title="Hello ZenS Company !!!  I'm Nguyễn Thành Thư - FrontEnd Developers"
            fontSize="40px"
            color={colors.dark_text}
          />
        </Col>
        <Col span={24}>
          <div style={{ width: "400px", margin: "auto" }}>
            <IButton
              color={colors.blue_btn}
              title="Front End"
              onClick={() => {
                navigate("/frontend");
              }}
            />
            <IButton
              color={colors.green_bg}
              title="Algorithm"
              onClick={() => {
                navigate("/algorithm")
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
