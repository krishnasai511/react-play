import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
    this.state = {
      count: 1,
      userObj: { name: "" },
    };
  }

  async componentDidMount() {
    console.log("Child component did mount");
    console.log(this.props.name);
    const data = await fetch("https://api.github.com/users/krishnasai511");
    const jsonData = await data.json();

    this.setState({
      userObj: jsonData,
    });
  }

  componentDidUpdate() {
    console.log("Component updated!!!");
  }

  componentWillUnmount() {
    console.log("Component Unmounted!!");
  }

  render() {
    console.log("child render");
    return (
      <div>
        <h1>{this.state.userObj.login}</h1>;
        <img src={this.state.userObj.avatar_url} alt="avatar" />
      </div>
    );
  }
}

export default ProfileClass;
