import { Button, Form, InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "../../components/styles/styledContainer";

export default function Algorithm() {
  const arrMain = [1, 2, 4, 5, 6];
  const oldElements = arrMain.filter((item) => item % 2 !== 0);
  const evenElemnts = arrMain.filter((item) => item % 2 === 0);
  const miniArr = arrMain.slice(0, 4);
  const miniSum = miniArr.reduce((newArr, item, obj, index) => {
    return (newArr = newArr + item);
  });
  const maxArr = arrMain.slice(1);
  const maxSum = maxArr.reduce((newArr, item, obj, index) => {
    return (newArr = newArr + item);
  });
  const [arrInput, setArrInput] = useState([]);
  const [disableInput, setDisableInput] = useState(false);

  const onFinish = (values) => {
    const newarr = [...arrInput, values.number];
    if (arrInput.length < 5) {
      setArrInput(newarr);
    } else {
      setDisableInput(true);
    }
  };
  useEffect(() => {
    document.title = "ALGORITHM - TEST";
  }, []);
  const sortArr = arrInput.sort((a, b) => a - b);
  const sortOldElements = sortArr.filter((item) => item % 2 !== 0);
  const sortEvenElemnts = sortArr.filter((item) => item % 2 === 0);
  const sortMiniArr = sortArr.slice(0, 4);
  const sortMiniSum =
    sortMiniArr.length === 0
      ? []
      : sortMiniArr.reduce((newArr, item, obj, index) => {
          return (newArr = newArr + item);
        });
  const sortMaxArr = sortArr.slice(1);
  const sortMaxSum =
    sortMaxArr.length === 0
      ? []
      : sortMaxArr.reduce((newArr, item, obj, index) => {
          return (newArr = newArr + item);
        });
  const exceptArr = [1, 2, 3, 4, 5];
  const handleExcep = (numb) => {
    const except = exceptArr.filter((item) => item !== numb);
    const sumExcept = except.reduce((newArr, item, obj, index) => {
      return (newArr = newArr + item);
    });
    return { except, sumExcept };
  };
  return (
    <Container>
      <div
        style={{ lineHeight: "1.6rem", padding: "50px", border: "2px solid " }}
      >
        <h1 style={{ textAlign: "center" }}>Algorithm</h1>
        <span>Array default : </span>[
        {arrMain.map((item) => {
          return <span> {item} ,</span>;
        })}
        ]
        <br />
        <span>Old Elements : </span>[
        {oldElements.map((item) => {
          return <span> {item} ,</span>;
        })}
        ]
        <br />
        <span>Even Elements : </span>[
        {evenElemnts.map((item) => {
          return <span> {item} ,</span>;
        })}
        ]
        <br />
        <span>Minimun Sum : </span>
        {miniSum}
        <br />
        <span>Maximun Sum : </span>
        {maxSum}
        <br />
        <br />
        <Form onFinish={onFinish} autoComplete={false}>
          <Form.Item
            label="Number of Array :"
            name="number"
            rules={[{ required: true, message: "Please input your Number!" }]}
          >
            <InputNumber min={1} max={10} disabled={disableInput} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <span>Array Input Default :</span>[
        {sortArr.map((item) => {
          return <span> {item} ,</span>;
        })}
        ]
        <br />
        <span>Old Elements : </span>[
        {sortOldElements.map((item) => {
          return <span> {item} ,</span>;
        })}
        ]
        <br />
        <span>Even Elements : </span>[
        {sortEvenElemnts.map((item) => {
          return <span> {item} ,</span>;
        })}
        ]
        <br />
        <span>Minimun Sum : </span>
        {sortMiniSum}
        <br />
        <span>Maximun Sum : </span>
        {sortMaxSum}
        <br />
        <span>If we sum everything except a number and Array default :</span>[
        {exceptArr.map((item) => {
          return <span> {item} ,</span>;
        })}
        ]
        <br />
        <span>Expect 01 : </span>[
        {handleExcep(1).except.map((item) => {
          return <span> {item} ,</span>;
        })}
        ] = {handleExcep(1).sumExcept}
        <br />
        <span>Expect 02 : </span>[
        {handleExcep(2).except.map((item) => {
          return <span> {item} ,</span>;
        })}
        ] = {handleExcep(2).sumExcept}
        <br />
        <span>Expect 03 : </span>[
        {handleExcep(3).except.map((item) => {
          return <span> {item} ,</span>;
        })}
        ] = {handleExcep(3).sumExcept}
        <br />
        <span>Expect 04 : </span>[
        {handleExcep(4).except.map((item) => {
          return <span> {item} ,</span>;
        })}
        ] = {handleExcep(4).sumExcept}
        <br />
        <span>Expect 05 : </span>[
        {handleExcep(5).except.map((item) => {
          return <span> {item} ,</span>;
        })}
        ] = {handleExcep(5).sumExcept}
      </div>
    </Container>
  );
}
