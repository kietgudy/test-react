import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Kiet",
    address: "Quang Ngai",
    age: 23,
  };

  handleClick = (event) => {
    console.log("Click me");

    //Merge state => React Class
    this.setState({
      name: "Kiet Nguyen",
      age: Math.floor(Math.random() * 100) + 1,
    });
  };
  
  handleOnMouseOver(event) {
    // console.log(event);
  }
  //JSX
  render() {
    return (
      <div>
        My Name is {this.state.name} and I'm {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    );
  }
}
export default MyComponent;
