import React from "react";
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router";
import App from "./App";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});