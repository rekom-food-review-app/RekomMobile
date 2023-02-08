const ROOT = 'http://ec2-54-178-104-216.ap-northeast-1.compute.amazonaws.com'

const API_URL_REGISTER = `${ROOT}/register/email`;
const API_URL_OTP = `${ROOT}/account/confirm-email`;
const API_AUTH = `${ROOT}/auth/email`;

export {API_URL_REGISTER, API_URL_OTP, API_AUTH}