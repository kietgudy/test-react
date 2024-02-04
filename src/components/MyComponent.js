import React from "react";
class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        My Component
        {Math.random()}
      </div>
    );
  }
}
export default MyComponent;
