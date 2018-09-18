import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from "axios";

import Jobs from "./Jobs";

configure({ adapter: new Adapter() });

jest.mock("axios");

describe("Jobs", () => {
  beforeEach(() => {
    // jest.mock('https://data.cityofnewyork.us/resource/6fic-ympf.json?$limit=16&$offset=$0')
    // .get()
    // window.fetch = jest.fn().mockImplementation(() =>
    //   Promise.resolve({
    //     json: () => Promise.resolve("the data is fetched")
    //   })
    // );
    // const renderJobs = shallow(<Jobs />);
  });
  it("should fetch the right data", () => {
    const renderJobs = shallow(<Jobs />);
    const mock = jest.fn()

    expect(renderJobs.state().page).toEqual(1);
    renderJobs.stimulate("click");
    expect(renderJobs.state().page).toEqual(1);
  });

  it("the state is reset when the next button is clicked", () => {
    const res = [{ data: "it works" }];
    const renderJobs = shallow(<Jobs />);
    axios.get.mockImplementation(() => Promise.resolve(res));
    return renderJobs.dataJobs().then(jobs => expect(jobs).toEqual(res));
  });
});
