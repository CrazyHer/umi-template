/* md5: 5722a1e847faa41dddf4d42d4a1c41e4 */
/* Rap仓库id: 302425 */
/* Rapper版本: 1.3.1 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=302425
 */

import * as commonLib from 'rap/runtime/commonLib';

export interface IModels {
  /**
   * 接口名：登录
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=302425&mod=510768&itf=2263306
   */
  'POST/login': {
    Req: {
      userID: string;
      password: string;
    };
    Res: {
      success: boolean;
      data: {
        token: string;
      };
    };
  };
}

type ResSelector<T> = T;

export interface IResponseTypes {
  'POST/login': ResSelector<IModels['POST/login']['Res']>;
}

export function createFetch(
  fetchConfig: commonLib.RequesterOption,
  extraConfig?: { fetchType?: commonLib.FetchType },
) {
  // if (!extraConfig || !extraConfig.fetchType) {
  //   console.warn('Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch')
  // }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig);

  return {
    /**
     * 接口名：登录
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=302425&mod=510768&itf=2263306
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/login': (
      req?: IModels['POST/login']['Req'],
      extra?: commonLib.IExtra,
    ) => {
      return rapperFetch({
        url: '/login',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/login']>;
    },
  };
}
