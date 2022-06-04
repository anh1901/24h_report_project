import axiosClient from "./axiosClient";

class UserApi {
  getAll = (params) => {
    const url = "/Account";
    return axiosClient.get(url,  params );
  };
  getByEmail = (params) => {
    console.log(params.email);
    const url = "/Account/" + params.email;
    return axiosClient.get(url);
  };
}
const userApi = new UserApi();
export default userApi;