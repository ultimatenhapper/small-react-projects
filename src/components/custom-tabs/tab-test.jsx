import React from "react";
import Tabs from "./tabs";

import "./tabs.css";

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is tab one</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is tab two</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is tab three</div>,
    },
  ];

  const handleChange = (currentTabIndex) => {};
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
