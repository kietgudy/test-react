import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //Destructuring
    const { age, name } = this.props;
    //Props
    return (
      <div>
        <div>My name's {name}</div>
        <div>My age's {age}</div>
      </div>
    );
  }
}

export default DisplayInfor;
