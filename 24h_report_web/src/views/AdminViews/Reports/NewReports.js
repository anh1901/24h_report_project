import React, { Component } from "react";
import NewReportTable from "../components/ReportTables/NewReportTable";

class NewReports extends Component {
  render() {
    return (
      <div className="animated fadeIn pl-3 pr-3 pt-5">
        <NewReportTable />
      </div>
    );
  }
}

export default NewReports;
