import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Kiet Gody", age: "16" },
//       { id: 2, name: "Kiet Gody 2", age: "20" },
//       { id: 3, name: "Kiet Gody 3", age: "36" },
//     ],
//   };

//   handleAddNewUser = (userOjb) => {
//     console.log(userOjb);
//     this.setState({
//       listUsers: [userOjb, ...this.state.listUsers],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({ listUsers: listUsersClone });
//   };
//   //JSX
//   render() {
//     return (
//       <div>
//         <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//         <br />
//         <br />
//         <DisplayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser}/>
//       </div>
//     );
//   }
// }
const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Kiet Gody", age: "16" },
    { id: 2, name: "Kiet Gody 2", age: "20" },
    { id: 3, name: "Kiet Gody 3", age: "36" },
  ]);
  const handleAddNewUser = (userOjb) => {
    setListUsers([userOjb, ...listUsers]);
    // this.setState({
    //   listUsers: [userOjb, ...this.state.listUsers],
    // });
  };
  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
    // this.setState({ listUsers: listUsersClone });
  };
  return (
    <div>
      <AddUserInfor handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};
export default MyComponent;
