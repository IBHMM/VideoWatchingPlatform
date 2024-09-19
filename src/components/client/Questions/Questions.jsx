import React from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: <p className="text-white font-semibold">1. What is StreamVid?</p>,
    children: (
      <p className="text-gray-300">
        Blandit libero volutpat sed cras ornare arcu dui. Interdum consectetur
        libero id faucibus nisl tincidunt eget nullam non. Vestibulum lectus
        mauris ultrices eros. Sit amet justo donec enim. Egestas purus viverra
        accumsan in. Venenatis a condimentum vitae sapien pellentesque habitant
        morbi tristique.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: <p className="text-white font-semibold"> 2. How can I subscribe? </p>,
    children: (
      <p className="text-gray-300">
        YBlandit libero volutpat sed cras ornare arcu dui. Interdum consectetur
        libero id faucibus nisl tincidunt eget nullam non. Vestibulum lectus
        mauris ultrices eros. Sit amet justo donec enim. Egestas purus viverra
        accumsan in. Venenatis a condimentum vitae sapien pellentesque habitant
        morbi tristique.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: <p className="text-white font-semibold">3. What devices support StreamVid? </p>,
    children: (
      <p className="text-gray-300">
        Blandit libero volutpat sed cras ornare arcu dui. Interdum consectetur
        libero id faucibus nisl tincidunt eget nullam non. Vestibulum lectus
        mauris ultrices eros. Sit amet justo donec enim. Egestas purus viverra
        accumsan in. Venenatis a condimentum vitae sapien pellentesque habitant
        morbi tristique.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: <p className="text-white font-semibold">4. Is there a free trial?</p>,
    children: (
      <p className="text-gray-300">
        Blandit libero volutpat sed cras ornare arcu dui. Interdum consectetur
        libero id faucibus nisl tincidunt eget nullam non. Vestibulum lectus
        mauris ultrices eros. Sit amet justo donec enim. Egestas purus viverra
        accumsan in. Venenatis a condimentum vitae sapien pellentesque habitant
        morbi tristique.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: <p className="text-white font-semibold"> 5. How do I cancel StreamVid TV? </p>,
    children: (
      <p className="text-gray-300">
        Blandit libero volutpat sed cras ornare arcu dui. Interdum consectetur
        libero id faucibus nisl tincidunt eget nullam non. Vestibulum lectus
        mauris ultrices eros. Sit amet justo donec enim. Egestas purus viverra
        accumsan in. Venenatis a condimentum vitae sapien pellentesque habitant
        morbi tristique.
      </p>
    ),
    style: panelStyle,
  },
];

const Questions = () => {
  const panelStyle = {
    marginBottom: 24,
    background: "rgb(25, 28, 51)",
    borderRadius: 4,
    color: "rgb(255,255,255)",
    border: "1px solid black",
    padding: "5px 0px",
  };

  const genExtra = (isActive) =>
    isActive ? <MinusOutlined style={{color: "#fff", fontSize: "16px"}}/> : <PlusOutlined style={{color: "#fff", fontSize: "16px"}}/>;

  return (
    <div className="relative flex items-center justify-center w-full mt-20 max-w-[2000px]">
      <div
        className="relative flex flex-col items-center justify-center w-[50%] gap-20 py-10 rounded-xl max-[800px]:w-full"
        style={{
          background: "#00031c",
          color: "white",
        }}
      >

        <p className="text-center font-bold text-[200%] max-[500px]:text-[120%]">
            Frequently Asked <br /> Questions
        </p>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIconPosition="right"
          expandIcon={({ isActive }) => genExtra(isActive)}
          items={getItems(panelStyle)}
          className="min-w-full"
        />
      </div>
    </div>
  );
};

export default Questions;
