import axios from "axios";
import { getToken } from "./SessionHelper";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types/globals/globalsType";
import { logout, setToken } from "@/helper/SessionHelper";
import { getNewAccessToken } from "@/services/auth.service";



const axiosInstance = axios.create();
axiosInstance.defaults.headers.post['Content-Type'] = "application/json";
axiosInstance.defaults.headers['Accept'] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const accessToken = getToken();
    if(accessToken){
        config.headers.Authorization = accessToken;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(
    //@ts-ignore
    function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const responseObject : ResponseSuccessType = {
        data: response?.data?.data,
        meta: response?.data?.meta
    }
    return responseObject;
  }, async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error?.status === 401){
     
      const config = error.config;
      const res = await getNewAccessToken();
      if(res?.data?.accessToken){
        config.headers["Authorization"] = res?.data?.accessToken;
        setToken(res?.data?.accessToken)
      }else{
         logout()
      }
    }
    else{
       const responseObject : IGenericErrorResponse = {
        statusCode: error?.response?.status || 500,
        message: error?.response?.data?.message || "Something Weng Wrong",
        errorMessages: error?.response?.data?.message
      }
      //return Promise.reject(error);
       return responseObject;

    }
    
   
  });

export default axiosInstance;