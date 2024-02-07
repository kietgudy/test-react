import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Kiet Gody", age: "16" },
      { id: 2, name: "Kiet Gody 2", age: "20" },
      { id: 3, name: "Kiet Gody 3", age: "36" },
    ],
  };

  handleAddNewUser = (userOjb) => {
    console.log(userOjb);
    this.setState({
      listUsers: [userOjb, ...this.state.listUsers],
    });
  };
  //JSX
  render() {
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}
export default MyComponent;
