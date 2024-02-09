import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "Kiet",
//     address: "Quang Ngai",
//     age: 23,
//   };

//   handleClick = (event) => {
//     console.log("Click me");

//     //Merge state => React Class
//     this.setState({
//       name: "Kiet Nguyen",
//       age: Math.floor(Math.random() * 100) + 1,
//     });
//   };

//   //JSX
//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };
//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "- ramdom",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   //Render
//   render() {
//     return (
//       <div>
//         My Name is {this.state.name} and I'm {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <label>Your age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfor = (props) => {
  // state = {
  //   name: "",
  //   address: "Quang Ngai",
  //   age: "",
  // };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Quang Ngai");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
    // this.setState({
    //   name: event.target.value,
    // });
  };
  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
    // this.setState({
    //   age: event.target.value,
    // });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "- ramdom",
      name: name,
      age: age,
    });
  };

  //JSX
  return (
    <div>
      My Name is {name} and I'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <label>Your age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
