import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Kiet",
    address: "Quang Ngai",
    age: 23,
  };
  //JSX
  render() {
    return (
      <div>
        My Name is {this.state.name} and from {this.state.address}
      </div>
    );
  }
}
export default MyComponent;
