import React, { useEffect, useState } from "react";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";

import updateReportApi from "../../../../api/updateReportApi";
import { Button, Col, Row } from "react-bootstrap";
import {  CModal, CModalBody, CModalFooter, CModalHeader, CSmartTable } from "@coreui/react-pro";
import reportApi from "../../../../api/reportApi";
import { Markup } from "interweave";

//
const NewReportTable = () => {
  const [reports, setReports] = useState();
  async function loadReports() {
    try {
      const param = {status:1};
      const response = await reportApi.getByStatus(param);
      
      setReports(response);
    } catch (e) {
      alert(e.message);
    }
  }
  async function update_report_status(id, status) {
    try {
      const param = { id: id, updateStatus: status };
      const response = await updateReportApi.update(param);
      console.log("Response", response);
      // window.location.reload();
      loadReports();
      setVisibleModal(false);
    } catch (e) {
      alert(e.message);
    }
  }
  useEffect(() => {
    loadReports();
  }, [loadReports]);
  //
  const [details, setDetails] = useState(null);
  const [editedDescription, setEditedDescription] = useState(null);
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
      key: "location",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },
   
    {
      key: "timeFraud",
      _style: { width: "10%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "description",
      _style: { width: "20%" },
      _props: { className: "fw-semibold" },
    },
    {
      key: "categoryId",
      _style: { width: "10%" },
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

  const toggleDetails = async(id) => {
    setVisibleModal(!visibleModal)
    try {
      const param = { id: id };
      const response = await reportApi.find(param);
      console.log(response)
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
    <CModalHeader closeButton>Chi tiết báo cáo</CModalHeader>
    {details!==null?<>
      <CModalBody>
          <Row>
            <Col>
                <b>Địa điểm: </b>{details.location}
              <br />
              <b>Thời gian vụ việc: </b>{details.timeFraud}
              <br />
              <b>Thời gian viết: </b>{details.createTime}
              <br />
              <b>Người gửi: </b>{details.userId}
              <br />
              <b>Phân loại: </b>{details.categoryId}
              <br />
              <b>Chi tiết: </b>
              <Markup content={editedDescription} allowAttributes allowElements />
            </Col>
            </Row>
         
        </CModalBody>
        <CModalFooter>
          
          <Button 
            variant="warning"
            size="sm"
            onClick={() => update_report_status(details.reportId, 2)}
          >
            Chờ xác thực
          </Button>
      </CModalFooter></>
        : <Row className="d-flex justify-content-center">
          <div class="spinner-border text-primary mb-5 mt-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </Row>}
      
    </CModal>
      {reports !== null && (
        <CSmartTable
          noItemsLabel="Không có dữ liệu..."
          draggable
          activePage={1}
          cleaner
          clickableRows
          columns={columns}
          columnFilter
          columnSorter
          items={reports}
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
            timeFraud: (item) => {
              return <td className="py">{JSON.stringify(item.timeFraud).replace("T"," ").substring(1,JSON.stringify(item.timeFraud).length-1 )}</td>;
            },
            categoryId: (item) => {
              switch(item.categoryId){
                case 2:
                return <td className="py">Email</td>;
                case 3:
                return <td className="py">Tin nhắn</td>;
                case 4:
                return <td className="py">Internet</td>;
                case 5:
                return <td className="py">Điện thoại</td>;
                default : return <td className="py">Khác</td>;
              }
            },
            show_details: (item) => {
              return (
                <td className="py-2">
                  <Button onClick={() => toggleDetails(item.reportId)}>Chi tiết</Button>
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

export default NewReportTable;
