import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Toycategory.css";
import ToyCategoryCard from "./ToyCategoryCard";

const ToyCategory = () => {
  const [activeTab, setActiveTab] = useState("Classic Cars");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://toy-store-sever.vercel.app/alltoys/category?category=${activeTab}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [activeTab]);

  console.log(activeTab);

  const handleTabSelect = (index) => {
    if (index == 0) {
      setActiveTab("Classic Car");
    } else if (index == 1) {
      setActiveTab("Space Explorers");
    } else if (index == 2) {
      setActiveTab("Oceanic Adventures");
    } else if (index == 3) {
      setActiveTab("Fire and Rescue");
    } else if (index == 4) {
      setActiveTab("Extreme Sports Vehicles");
    }
  };

  return (
    <div>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Toy Categories</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel onSelect={handleTabSelect}>
            <TabList>
              <Tab>Classic Cars</Tab>
              <Tab>Space Explorers</Tab>
              <Tab>Oceanic Adventures</Tab>
              <Tab>Fire and Rescue</Tab>
              <Tab>Extreme Sports Vehicles</Tab>
            </TabList>
            <TabPanel>
              <div className="md:flex justify-evenly">
                {data.slice(0,3).map((singleData) => (
                  <ToyCategoryCard
                    props={singleData}
                    key={singleData.index}
                  ></ToyCategoryCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
            <div className="md:flex justify-evenly space-y-5">
                {data.slice(0,3).map((singleData) => (
                  <ToyCategoryCard
                    props={singleData}
                    key={singleData.index}
                  ></ToyCategoryCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
            <div className="md:flex justify-evenly space-y-5">
                {data.slice(0,3).map((singleData) => (
                  <ToyCategoryCard
                    props={singleData}
                    key={singleData.index}
                  ></ToyCategoryCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
            <div className="md:flex justify-evenly space-y-5">
                {data.slice(0,3).map((singleData) => (
                  <ToyCategoryCard
                    props={singleData}
                    key={singleData.index}
                  ></ToyCategoryCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
            <div className="md:flex justify-evenly space-y-5">
                {data.slice(0,3).map((singleData) => (
                  <ToyCategoryCard
                    props={singleData}
                    key={singleData.index}
                  ></ToyCategoryCard>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default ToyCategory;
