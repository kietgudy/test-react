import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //Destructuring
    const { listUsers } = this.props;
    //Props
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My age's {user.age}</div>
              <hr></hr>
            </div>
          );
        })}
        {/* <div>My name's {name}</div>
        <div>My age's {age}</div> */}
      </div>
    );
  }
}

export default DisplayInfor;
