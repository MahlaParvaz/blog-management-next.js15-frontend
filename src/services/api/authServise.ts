import { ISignInValues, ISignUpValues } from '@/types/authTypes';
import http from '../core/httpServices';

export async function signinApi(data: ISignInValues) {
  return http.post(`/user/signin`, data).then(({ data }) => data);
}

export async function signupApi(data: ISignUpValues) {
  return http.post(`/user/signup`, data).then(({ data }) => data);
}

export async function getUserApi() {
  return http.get(`/user/profile`).then(({ data }) => data);
}
// export async function getAllUsersApi(options) {
//   return http.get(`/user/list`, options).then(({ data }) => data.data);
// }

export function logoutApi() {
  return http.post(`/user/logout`);
}
