import axios, { AxiosResponse } from "axios";

export const serverUrl = "http://localhost";

const enforceTrailingSlash = (url: string): string => {
  return url.endsWith("/") ? url : url + "/";
};

export function getRequest<ResponseType>(
  uri: string,
  searchParams: string
): Promise<AxiosResponse<ResponseType>> {
  const params = searchParams ? searchParams : "";
  return axios.get(enforceTrailingSlash(`${serverUrl}${uri}`) + params);
}

export function deleteRequest<ResponseType>(
  uri: string
): Promise<AxiosResponse<ResponseType>> {
  return axios.delete(enforceTrailingSlash(`${serverUrl}${uri}`));
}

export function patchRequest<DataType, ResponseType>(
  uri: string,
  data: DataType
): Promise<AxiosResponse<ResponseType>> {
  return axios.patch(enforceTrailingSlash(`${serverUrl}${uri}`), data);
}

export function postRequest<DataType, ResponseType>(
  uri: string,
  data: DataType
): Promise<AxiosResponse<ResponseType>> {
  return axios.post(enforceTrailingSlash(`${serverUrl}${uri}`), data);
}
