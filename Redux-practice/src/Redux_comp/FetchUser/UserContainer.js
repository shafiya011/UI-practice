import React from "react";
// import "..//App.css"
// import "/Users/shafiyafareena/Documents/redux-practice/my-redux/src/App.css"
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchUsers } from "./UserAction";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import store from "../Store";

function UserContainer({ userData }) {
  // const userOps=useSelector(state =>state.userOps)
  // console.log(userOps)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    // fetchUsers();
  }, []);

  return userData.loading ? (
    <div>Loading</div>
  ) : userData?.error ? (
    <h3>{userData?.error}</h3>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        <table className="userTable">
          <thead>
            <th>Name</th>
            <th>Mail Id</th>
          </thead>

          {userData &&
            userData?.users?.map((user) => (
              <tr>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state?.userOps,
  };
};
// const mapDispatchToProps = (dispatch) => {
// return {
//   fetchusers: () => dispatch(fetchUsers()),
// };
// };

export default connect(mapStateToProps)(UserContainer);
