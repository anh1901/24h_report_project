import React, { useEffect, useState } from "react";
import "@coreui/coreui-pro/dist/css/coreui.min.css";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";

import reportApi from "../../../../api/reportApi";
import {  Button, Col, Row } from "react-bootstrap";
import {  CModal, CModalBody, CModalFooter, CModalHeader, CSmartTable } from "@coreui/react-pro";
import { Markup } from "interweave";

//
const DeniedReportTable = () => {
  const [reports, setReports] = useState();
  async function loadReports() {
    try {
      const param = {status:4};
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
  const [editedDescription, setEditedDescription] = useState(null);
  const toggleDetails = async(id) => {
    setVisibleModal(!visibleModal)
    try {
      const param = { id: id };
      const response = await reportApi.find(param);
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
    <CModalHeader closeButton>Chi ti???t b??o c??o</CModalHeader>
    {details!==null?<>
      <CModalBody>
          <Row>
            {/* <Col>
              <p className="text-muted">
              H??nh ???nh:
              <br />
              {details.image!=='string' ? (
                <img
                  src={details.image}
                  style={{ height: "20rem", width: "30rem" }}
                ></img>
              ) : (
                <p>Kh??ng c?? ???nh</p>
              )}
            </p>
            <p className="text-muted">
              Video:
              <br />
              {details.video!=='string' ? (
                <source src={details.video} type="video/mp4" />
              ) : (
                <p>Kh??ng c?? video</p>
            )}
          </p>
            </Col> */}
            <Col>
                <b>?????a ??i???m: </b>{details.location}
              <br />
              <b>Th???i gian: </b>{details.timeFraud}
              <br />
              <b>Chi ti???t: </b>
              <Markup content={editedDescription} allowAttributes allowElements/>
            </Col>
            
            </Row>
         
        </CModalBody>
        <CModalFooter>
        
      </CModalFooter></>
        : <Row className="d-flex justify-content-center">
          <div class="spinner-border text-primary mb-5 mt-5" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </Row>}
      
    </CModal>
      {reports !== null && (
        <CSmartTable
          noItemsLabel="Kh??ng c?? d??? li???u..."
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
            categoryId: (item) => {
              switch(item.categoryId){
                case 2:
                return <td className="py">Email</td>;
                case 3:
                return <td className="py">Tin nh???n</td>;
                case 4:
                return <td className="py">Internet</td>;
                case 5:
                return <td className="py">??i???n tho???i</td>;
                default : return <td className="py">Kh??c</td>;
              }
            },
            timeFraud: (item) => {
              return <td className="py">{JSON.stringify(item.timeFraud).replace("T"," ").substring(1,JSON.stringify(item.timeFraud).length-1 )}</td>;
            },
            show_details: (item) => {
              return (
                <td className="py-2">
                  <Button onClick={() => toggleDetails(item.reportId)}>Chi ti???t</Button>
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

export default DeniedReportTable;
