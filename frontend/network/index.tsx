// TODO: FIX THESE LINT ERRORS
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

export const serverUrl = "http://localhost";

const enforceTrailingSlash = (url: string): string => {
  return url.endsWith("/") ? url : url + "/";
};

export function getRequest(uri: string, searchParams: string) {
  const params = searchParams ? searchParams : "";
  return axios.get(enforceTrailingSlash(`${serverUrl}${uri}`) + params);
}

export function deleteRequest(uri: string) {
  return axios.delete(enforceTrailingSlash(`${serverUrl}${uri}`));
}

export function patchRequest(uri: string, data) {
  return axios.patch(enforceTrailingSlash(`${serverUrl}${uri}`), data);
}

export function postRequest(uri: string, data) {
  return axios.post(enforceTrailingSlash(`${serverUrl}${uri}`), data);
}
