import mobxStore from '@/mobxStore';
import axios, { AxiosRequestConfig } from 'axios';
import { overrideFetch } from '.';

// const baseURL = 'https://api.herui.club/filmticketing';
// const baseURL = ''; // 使用umi本地mock
const baseURL = 'http://rap2api.taobao.org/app/mock/302425'; // 使用rap2 mock接口

// 使用axios重写rap请求方法
const customFetch = () => {
  overrideFetch(
    ({ url, method, params }) =>
      new Promise<any>((resolve, reject) => {
        const config: AxiosRequestConfig =
          // 为POST方法时将数据放入body中，否则作为参数
          method === 'POST'
            ? {
                method,
                url,
                data: params,
                baseURL,
                headers: { token: mobxStore.user.getToken() },
              }
            : {
                method,
                url,
                params,
                baseURL,
                headers: { token: mobxStore.user.getToken() },
              };
        axios(config)
          .then((res) => resolve(res.data))
          .catch((error) => reject(error));
      }),
  );
};

export default customFetch;
