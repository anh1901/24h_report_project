import { CBadge, CSmartTable } from "@coreui/react-pro";
import React, { Component, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Button, Input } from "semantic-ui-react";
import reportApi from "../../../api/reportApi";
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
const columns = [
  {
    key: "reportId",
    _style: { width: "20%" },
    _props: { className: "fw-semibold" },
  },
  {
    key: "location",
    _style: { width: "20%" },
    _props: { className: "fw-semibold" },
  },
  {
    key: "createTime",
    _style: { width: "20%" },
    _props: { className: "fw-semibold" },
  },
  {
    key: "timeFraud",
    _style: { width: "20%" },
    _props: { className: "fw-semibold" },
  },
  {
    key: "description",
    _style: { width: "20%" },
    _props: { className: "fw-semibold" },
  },
  {
    key: "categoryId",
    _style: { width: "20%" },
    _props: { className: "fw-semibold" },
  },
  {
    key: "status",
    _style: { width: "20%" },
    _props: { className: "fw-semibold" },
  },
];

const SendReport = () => {
  const [reports, setReports] = useState();
  const [searchId, setSearchId] = useState("");
  async function handle_search() {
    try {
      const param = { id: searchId };
      const response = await reportApi.find(param);
      setReports(response);
    } catch (e) {
      alert(e.message);
    }
  }
  const handle_change = (event) => {
    setSearchId(event.target.value);
  };

  useEffect(() => {
    handle_search();
  }, [handle_search]);
  return (
    <div
      className="animated fadeIn"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Row className="pb-3">
        <Input
          placeholder="Tìm kiếm báo cáo"
          className="mb-3 mr-3"
          value={searchId}
          onChange={handle_change}
        />
        <Button style={{ height: "40px" }} onClick={() => handle_search}>
          Tìm
        </Button>
      </Row>

      {reports !== null && (
        <CSmartTable
          activePage={1}
          clickableRows
          columns={columns}
          items={reports}
          itemsPerPage={5}
          pagination
          scopedColumns={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
          }}
          tableProps={{
            striped: true,
            hover: true,
          }}
        />
      )}
    </div>
  );
};

export default SendReport;
