import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  render() {
    const myInfor = ["a", "b", "c"];
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="Kiet Gody" age="25" />
        <hr />
        <DisplayInfor name="Kiet Gody 2" age={26} myInfor={myInfor} />
      </div>
    );
  }
}
export default MyComponent;
