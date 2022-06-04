import React, { useEffect, useState } from "react";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";

import reportApi from "../../../../api/reportApi";
import { Button, Col, Row } from "react-bootstrap";
import {  CModal, CModalBody, CModalFooter, CModalHeader, CSmartTable } from "@coreui/react-pro";
import { Markup } from "interweave";

//
const ReportTableNew = () => {
  const [reports, setReports] = useState();
  async function loadReports() {
    try {
      const param = {status:3};
      const response = await reportApi.getByStatus(param);
      setReports(response);
    } catch (e) {
      alert(e.message);
    }
  }
 
  useEffect(() => {
    loadReports();
  }, [loadReports]);
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

  const getBadge = (status) => {
    switch (status) {
      case "New":
        return "success";
      case "Pending":
        return "warning";
      case "Approved":
        return "primary";
      case "Denied":
        return "danger";
      default:
        return "secondary";
    }
  };
  const toggleDetails = async(id) => {
    setVisibleModal(!visibleModal)
    try {
      const param = { id: id };
      const response = await reportApi.find(param);
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
              <p className="text-muted">
              Hình ảnh:
              <br />
              {details.image!=='string' ? (
                <img
                  src={details.image}
                  style={{ height: "20rem", width: "30rem" }}
                ></img>
              ) : (
                <p>Không có ảnh</p>
              )}
            </p>
            <p className="text-muted">
              Video:
              <br />
              {details.video!=='string' ? (
                <source src={details.video} type="video/mp4" />
              ) : (
                <p>Không có video</p>
            )}
          </p>
            </Col>
            <Col>
                <b>Địa điểm: </b>{details.location}
              <br />
              <b>Thời gian: </b>{details.timeFraud}
              <br />
              <b>Chi tiết: </b>
              <Markup content={details.description} />
            </Col>
            </Row>
         
        </CModalBody>
        <CModalFooter>
       
      </CModalFooter></>
        : <Row className="d-flex justify-content-center">
          <div class="spinner-border text-primary" role="status">
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
            timeFraud: (item) => {
              return <td className="py">{JSON.stringify(item.timeFraud).replace("T"," ").substring(1,JSON.stringify(item.timeFraud).length-1 )}</td>;
            },
            description: (item) => {
              return (<td className="py">{JSON.stringify(item.description).length>50?JSON.stringify(item.description).substring(0,49)+"..." :item.description}</td>);
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

export default ReportTableNew;
