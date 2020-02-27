// 公共类型的interface
export type Method =
  | 'get'
  | 'GET'
  | 'DELETE'
  | 'delete'
  | 'POST'
  | 'post'
  | 'PUT'
  | 'put'
  | 'PATCH'
  | 'patch'
  | 'OPTIONS'
  | 'options';

export interface AxiosRequestConfig {
  url: string
  method?: Method;
  data?: any
  param?: any
}
