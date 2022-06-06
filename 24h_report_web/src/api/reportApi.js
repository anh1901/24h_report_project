import axiosClient from "./axiosClient";

class ReportApi {
  getAll = (params) => {
    const url = "/Report";
    return axiosClient.get(url,  params );
  };
  getByStatus = (params) => {
    const url = "/Report?Status=" + params.status;
    return axiosClient.get(url);
  };
  send = (params) => {
    const url = "/Report";
    console.log(params);
    return axiosClient.post(url, params);
  };
  find = (params) => {
    const url = "/Report/" + params.id;
    return axiosClient.get(url);
  };
}
const reportApi = new ReportApi();
export default reportApi;
