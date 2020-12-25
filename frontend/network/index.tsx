import axios, { AxiosResponse } from "axios";

export const serverUrl = "http://localhost";

const enforceTrailingSlash = (url: string): string => {
  return url.endsWith("/") ? url : url + "/";
};

export function getRequest<T>(
  uri: string,
  searchParams: string
): Promise<AxiosResponse<T>> {
  const params = searchParams ? searchParams : "";
  return axios.get(enforceTrailingSlash(`${serverUrl}${uri}`) + params);
}

export function deleteRequest<T>(uri: string): Promise<AxiosResponse<T>> {
  return axios.delete(enforceTrailingSlash(`${serverUrl}${uri}`));
}

export function patchRequest<T>(
  uri: string,
  data: T
): Promise<AxiosResponse<T>> {
  return axios.patch(enforceTrailingSlash(`${serverUrl}${uri}`), data);
}

export function postRequest<T>(
  uri: string,
  data: T
): Promise<AxiosResponse<T>> {
  return axios.post(enforceTrailingSlash(`${serverUrl}${uri}`), data);
}
