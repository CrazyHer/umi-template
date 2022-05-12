import mobxStore from '@/mobxStore';
import axios, { AxiosRequestConfig } from 'axios';
import { overrideFetch } from '.';

// 使用axios重写rap请求方法
const customFetch = () => {
  const baseURL = 'https://api.herui.club/filmticketing';
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
              }
            : {
                method,
                url,
                params,
                baseURL,
              };
        axios(
          // 除登录接口请求头外都附带token
          url === '/login'
            ? config
            : { ...config, headers: { token: mobxStore.user.getToken() } },
        )
          .then((res) => resolve(res.data))
          .catch((error) => reject(error));
      }),
  );
};

export default customFetch;
