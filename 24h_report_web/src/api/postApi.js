import axiosClient from "./axiosClient";

class PostApi {
  getAll = (params) => {
    const url = "/Post";
    return axiosClient.get(url, { params });
  };
}
const postApi = new PostApi();
export default postApi;
