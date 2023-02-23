import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"

const RekomAxios = axios.create({
  baseURL: 'http://ec2-54-178-104-216.ap-northeast-1.compute.amazonaws.com',
  headers: {'Authorization': 'bearer token...'}
});

RekomAxios.interceptors.request.use(async function (config) {
  let accessToken = await AsyncStorage.getItem("accessToken")
  config.headers.Authorization = `bearer ${accessToken}`
  // config.headers["Content-Type"] = 'multipart/form-data'
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


export default RekomAxios