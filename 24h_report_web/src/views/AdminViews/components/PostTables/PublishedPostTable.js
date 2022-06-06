import React, { useEffect, useState } from "react";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";

import { Button, Row } from "react-bootstrap";
import {  CBadge, CModal, CModalBody, CModalHeader, CSmartTable } from "@coreui/react-pro";
import postApi from "../../../../api/postApi";
import { Markup } from "interweave";


//
const PublishedPostTable = () => {
  const [posts, setPosts] = useState();
  async function loadPosts() {
    try {
      const param = {Status:3};//Crafted only
      const response = await postApi.getByStatus(param);
      setPosts(response);
    } catch (e) {
      alert(e.message);
    }
  }
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);
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
      key: "title",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "createTime",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "description",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },

    {
      key: "status",
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
  const getBadge = (status) => {
    switch (status) {
      case "Crafted":
        return "primary";
      case "Hidden":
        return "warning";
      case "Public":
        return "success";
      default:
        return "secondary";
    }
  };
  const [editedDescription, setEditedDescription] = useState(null);

  const toggleDetails = async(id) => {
    setVisibleModal(!visibleModal)
    try {
      const param = { id:id };
      const response = await postApi.getById(param);
      const metaDescription=JSON.stringify(response.description).replace("<img","<img style=\"width:55rem;height:30rem;padding-left:2rem;padding-right:2rem\"").replace("<iframe","<iframe style=\"width:55rem;height:30rem;padding-left:2rem;padding-right:2rem\"").replace(/\\/g, "");
      const description =metaDescription.substring(1, metaDescription.length-1);
      setEditedDescription(description);
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
            
          <b>PostId: </b>{details.postId}
          <br />
          <b>Title: </b>{details.title}
          <br />
          <b>Phân loại: </b>
          {details.category.type}
          <br/>
          <b>Ngày được tạo: </b>{details.createTime}
          <br />
          <b>Nội dung: </b><Markup content={editedDescription} allowAttributes allowElements/>
          <br />
        </CModalBody>
        </>
        : <Row className="d-flex justify-content-center">
          <div class="spinner-border text-primary  mb-5 mt-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </Row>}
      
    </CModal>
      {posts !== null && (
        <CSmartTable
          noItemsLabel="Không có dữ liệu..."
          draggable
          activePage={1}
          cleaner
          clickableRows
          columns={columns}
          columnFilter
          columnSorter
          items={posts}
          itemsPerPageSelect
          itemsPerPage={10}
          pagination
          scopedColumns={{
            index: (item) => {
              return (<td className="py-2">{item._id}</td>);
            },
            description: (item) => {
              return (<td className="py" style={{textOverflow:"ellipsis", overflow:"hidden",whiteSpace:"nowrap",maxWidth:"20rem"}}><Markup content={item.description} allowAttributes allowElements blockList={["img","iframe"]} noHtml={true}/></td>);
            },
            createTime: (item) => {
              return <td className="py">{JSON.stringify(item.createTime).replace("T"," ").substring(1,JSON.stringify(item.createTime).length-1 )}</td>;
            },
            status:  (item) => (
              <td>
                <CBadge color={getBadge(item.status.trim())}>{item.status}</CBadge>
              </td>
            ),
            show_details: (item) => {
              return (
                <td className="py-2">
                  <Button onClick={() => toggleDetails(item.postId)}>Chi tiết</Button>
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

export default PublishedPostTable;
