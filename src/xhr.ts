import {AxiosRequestConfig} from './types/index'

export default (config: AxiosRequestConfig):void => {
  const {data=null, url, method="get"} = config;

  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);
  request.send(data);

}
