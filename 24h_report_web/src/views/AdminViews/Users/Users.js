import React, { Component } from "react";
import { Button } from "reactstrap";
import UserTable from "../components/UserTables/UserTable";

class Users extends Component {
  render() {
    return (
      <div className="animated fadeIn pl-3 pr-3 pt-2">
        <Button onClick={() => {}} color="primary" className="mb-3">
          <i className="icon-plus"> </i>
          <b>Tạo người dùng</b>
        </Button>
        <UserTable/>
      </div>
    );
  }
}

export default Users;
