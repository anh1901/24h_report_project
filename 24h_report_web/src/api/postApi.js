import axiosClient from "./axiosClient";

class PostApi {
  getAll = (params) => {
    const url = "/Post";
    return axiosClient.get(url, { params });
  };
  getById = (params) => {
    const url = "/Post/"+params.id;
    return axiosClient.get(url);
  };
  getByIdAndStatus = (params) => {
    const url = "/Post?EditorID="+params.EditorID+"&Status="+params.Status;
    return axiosClient.get(url);
  };
  getByStatus = (params) => {
    const url = "/Post?Status="+params.Status;
    return axiosClient.get(url);
  };
}
const postApi = new PostApi();
export default postApi;
