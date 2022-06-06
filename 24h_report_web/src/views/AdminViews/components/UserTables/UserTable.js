import React, { useEffect, useState } from "react";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";

import { Button, Col, Row } from "react-bootstrap";
import {  CModal, CModalBody, CModalFooter, CModalHeader, CSmartTable } from "@coreui/react-pro";
import userApi from "../../../../api/UserApi";

//
const UserTable = () => {
  const [users, setUsers] = useState();
  async function loadUsers() {
    try {
      const param = {};
      const response = await userApi.getAll(param);
      setUsers(response);
    } catch (e) {
      alert(e.message);
    }
  }
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);
  //
  const [details, setDetails] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false)
  const columns = [
    {
      key: "index",
      filter: false,
      sorter: false,
      _style: { width: "5%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "email",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "role",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },
    
    {
      key: "show_details",
      label: "Options",
      _style: { width: "1%" },
      filter: false,
      sorter: false,
      _props: { className: "fw-semibold" },
    },
  ];

  const toggleDetails = async(email) => {
    setVisibleModal(!visibleModal)
    try {
      const param = { email:email };
      const response = await userApi.getByEmail(param);
      setDetails(response);
      
    } catch (e) {
      alert(e.message);
    }
  };
  useEffect(() => {
    
  })
  return (
    <>
    <CModal size="lg" alignment="center" visible={visibleModal} onClose={() => (setVisibleModal(false),setDetails(null))}>
    <CModalHeader closeButton>Chi tiết người dung</CModalHeader>
    {details!==null?<>
      <CModalBody>
            
          <b>Email: </b>{details.email}
          <br />
          <b>Password: </b>{details.password}
          <br />
          <b>Role: </b>
          {details.role.roleName}
        </CModalBody>
        </>
        : <Row className="d-flex justify-content-center">
          <div class="spinner-border text-primary mb-5 mt-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </Row>}
      
    </CModal>
      {users !== null && (
        <CSmartTable
          noItemsLabel="Không có dữ liệu..."
          draggable
          activePage={1}
          cleaner
          clickableRows
          columns={columns}
          columnFilter
          columnSorter
          items={users}
          itemsPerPageSelect
          itemsPerPage={10}
          pagination
          scopedColumns={{
            index: (item) => {
              return (<td className="py-2">{item._id}</td>);
            },
            
            role: (item) => {
              switch(item.role.roleName){
                case "User":
                return <td className="py text-primary">User</td>;
                case "Staff":
                return <td className="py text-secondary">Staff</td>;
                case "Editor":
                return <td className="py text-danger">Editor</td>;
                case "Editor Manager":
                return <td className="py text-info">Editor Manager</td>;
                case "Admin":
                return <td className="py text-warning">Admin</td>;
                default : return <td className="py">Khác</td>;
              }
            },
            show_details: (item) => {
              return (
                <td className="py-2">
                  <Button onClick={() => toggleDetails(item.email)}>Chi tiết</Button>
                </td>
              );
            },
          }}
          tableFilter
          tableProps={{
            striped: true,
            hover: true,
          }}
        />
      )}
      
    </>
  );
};

export default UserTable;
