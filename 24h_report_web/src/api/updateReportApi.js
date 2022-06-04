import axiosClient from "./axiosClient";

class UpdateReportApi {
  update = (params) => {
    const url = "/Report/StatusUpdate";
    console.log(params);
    return axiosClient.put(
      url + "?id=" + params.id + "&status=" + params.updateStatus
    );
  };
}
const updateReportApi = new UpdateReportApi();
export default updateReportApi;
//  https://reportsystemapi.conveyor.cloud/api/Account/Login?Email=nhatvi1801%40gmail.com&Password=123
