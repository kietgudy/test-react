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
  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  };

  render() {
    return (
      <div>
        My Name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default MyComponent;
