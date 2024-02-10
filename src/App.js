import "./App.css";
import "normalize.css";
import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Alignment, Button, Navbar } from "@blueprintjs/core";
import { Tag, Tab, Tabs } from "@blueprintjs/core";
import "./components/SymptomsTab";
import SymptomsTab from "./components/SymptomsTab";

function App() {
  const handleTabChange = () => {};
  return (
    <div>
      <Navbar class="bp5-navbar bp5-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Clinical Page</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp5-dark" icon="print" text="Print Rx" />
          <Navbar.Divider />
          <Button
            className="bp5-dark"
            icon="document"
            text="Get Previous Visit Details"
          />
        </Navbar.Group>
      </Navbar>

      <div className="container">
        <h3 style={{ textAlign: "center", color: "white" }}>
          {" "}
          Patient Details
        </h3>
        <div>
          <Tag className="EntryField"> Patient ID</Tag>{" "}
          <input
            className="Header"
            class="bp5-dark"
            Placeholder="Enter Patient ID"
            type="text"
          />
          <Tag className="EntryField">Name</Tag>{" "}
          <input className="Header" class="bp5-dark" Placeholder="Enter Name" />
          <Tag className="EntryField">Age</Tag>{" "}
          <input
            className="Header"
            class="bp5-dark"
            type="number"
            Placeholder="Enter Age"
          />
          <Tag className="EntryField">Sex</Tag>
          <select className="Header" class="bp5-dark" id="sex" name="sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>{" "}
          <Tag className="EntryField">Phone Number</Tag>{" "}
          <input
            className="Header"
            class="bp5-dark"
            type="number"
            Placeholder="Enter Number"
          />
          <Tag className="EntryField">Date of Birth</Tag>{" "}
          <input className="Header" class="bp5-dark" type="date" />
          <Tag className="EntryField">Address</Tag>{" "}
          <input
            className="AddressInput"
            class="bp5-dark"
            type="text"
            Placeholder="Enter Address"
          />
        </div>
      </div>
      <div className="container">
        <br />
        <div className="Modebtn">
          <Button
            icon="edit"
            intent="success"
            data-inline="true"
            style={{ width: "200px" }}
          >
            Edit Mode
          </Button>{" "}
          <Button icon="eye-open" data-inline="true" style={{ width: "200px" }}>
            Preview
          </Button>
        </div>
        <br />
      </div>
      <div>
        <Tabs vertical={true} onChange={handleTabChange} selectedTabId="aa">
          <Tab
            id={"aa"}
            panel={
              <div>
                <h3>Hello</h3>
              </div>
            }
            title="Chief Complaint"
            style={{ margin: "10px", color: "white", fontWeight: "bold" }}
          >
            {" "}
          </Tab>
          <Tab
            id={"bb"}
            title="History"
            style={{ margin: "10px", color: "white", fontWeight: "bold" }}
          ></Tab>{" "}
          <Tab
            id={"cc"}
            title="Observation"
            style={{ margin: "10px", color: "white", fontWeight: "bold" }}
          ></Tab>
          <Tab
            id={"dd"}
            title="Diagnosis"
            style={{ margin: "10px", color: "white", fontWeight: "bold" }}
          ></Tab>
          <Tab
            id={"ee"}
            title="Medicine"
            style={{ margin: "10px", color: "white", fontWeight: "bold" }}
          ></Tab>
          <Tab
            id={"ff"}
            title="Advice"
            style={{ margin: "10px", color: "white", fontWeight: "bold" }}
          ></Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
