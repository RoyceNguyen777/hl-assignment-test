import { Typography } from "antd";

const { Title } = Typography;

export default function ITitle(props) {
  const { fontSize, color, title } = props;
  return (
    <Title {...props} style={{ fontSize, color }}>
      {title}
    </Title>
  );
}
