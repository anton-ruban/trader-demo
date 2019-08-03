import axios from 'axios';
import {BASE_API_URL} from '@/config';

export default {
  sendVerificationCodeToEmail(email) {
    return axios.post(`${BASE_API_URL}/api/sendEmail`, {email});
  },
  register(payload) {
    return axios.post(`${BASE_API_URL}/api/register`, payload);
  },
  login(payload) {
    return axios.post(`${BASE_API_URL}/api/ipe2/login`, payload);
  },
  verifyCode(payload) {
    return axios({
      method: 'post',
      url: `${BASE_API_URL}/api/verifyCode`,
      data: payload
    });
  },
  alterPWD(payload) {
    return axios({
      method: 'post',
      url: `${BASE_API_URL}/api/alterPWD`,
      data: payload
    });
  },
  getGAuthQrCode(payload) {
    return axios({
      method: 'post',
      url: `${BASE_API_URL}/api/gAuth_QrCode`,
      data: payload
    });
  },
  gAuthFirstBind(payload) {
    return axios({
      method: 'post',
      url: `${BASE_API_URL}/api/gAuth_FirstBind`,
      data: payload
    });
  },
  gAuthVerify(payload) {
    return axios({
      method: 'post',
      url: `${BASE_API_URL}/api/gAuth_Verify`,
      data: payload
    });
  },
  closeGoogle(payload) {
    return axios({
      method: 'post',
      url: `${BASE_API_URL}/api/closeGoogle`,
      data: payload
    });
  }
}
