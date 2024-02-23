import ModalCreateUsers from "./ModalCreateUsers";
import "./ManageUsers.scss";

const ManageUsers = (props) => {
  return (
    <div>
      <div classNameName="manage-user-container">
        <div classNameName="title">ManageUsers</div>
        <div classNameName="users-content">
          <div>
            <button>Add new user</button>
          </div>
          <div>
            Table users
          </div>
            <ModalCreateUsers />
        </div>
      </div>
    </div>
  );
};
export default ManageUsers;
