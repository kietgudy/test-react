import React from "react";

class UserInfor extends React.Component {
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

  //JSX
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  //Render
  render() {
    return (
      <div>
        My Name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
