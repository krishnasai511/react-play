import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import React from "react";
import Profile from "./Profile";

class About extends React.Component {
  /**
   *
   * sequence
   * 1. constructor
   * 2. render
   * 3.componentDidMount
   */

  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    //Best place to make an api call
    console.log("Parent Component Did mount");
    this.timer = setInterval(() => {
      console.log("interval started");
    }, 1000);
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is the about page</p>
        {/* <Outlet /> */}
        <ProfileClass name="somename" />
        <Profile />
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export default About;
