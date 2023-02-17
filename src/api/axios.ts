import axios from "axios"

const RekomAxios = axios.create({
  baseURL: 'http://ec2-54-178-104-216.ap-northeast-1.compute.amazonaws.com',
  // headers: {'X-Custom-Header': 'foobar'}
  headers: {'Authorization': 'bearer token...'}
});

export default RekomAxios