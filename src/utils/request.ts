import hash from 'hash.js';
import appConfig from '@core/appConfig';
import history from '@core/history';

const { prefix } = appConfig;

export const successCode = [200, 201, 204];

const codeMessage: any = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

const checkStatus = (response: {
  status: string | number;
  statusText: any;
}) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  const error: any = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

const cachedSave = (
  response: {
    status?: string | number;
    statusText?: any;
    headers?: any;
    clone?: any;
  },
  hashcode: string
) => {
  /**
   * Clone a response data and store it in sessionStorage
   * Does not support data other than json, Cache only json
   */
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.match(/application\/json/i)) {
    // All data is saved as text
    response
      .clone()
      .text()
      .then((content: string) => {
        sessionStorage.setItem(hashcode, content);
        sessionStorage.setItem(`${hashcode}:timestamp`, `${Date.now()}`);
      });
  }
  return response;
};

/**
 * 请求之前执行
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const beforeRequest = (req: any) => {
  // const token = localStorage.getItem(appStoreKey.TOKEN);
  // if (!token) {
  // }
  // if (!req.headers) {
  //   req.headers = {}
  // }
  // req.headers.Authorization = token; // 设置token
};

/**
 * 响应之后执行
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const afterRequest = (response: any) => {
  // if (response.headers && response.headers.has('authorization')) {
  //     localStorage.setItem(appStoreKey.TOKEN, response.headers.get('authorization'));
  // }
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url: string, option?: any) {
  const options = {
    ...option
  };
  /**
   * Produce fingerprints based on url and parameters
   * Maybe url has the same parameters
   */
  const fingerprint =
    prefix + url + (options.body ? JSON.stringify(options.body) : '');
  const hashcode = hash
    .sha256()
    .update(fingerprint)
    .digest('hex');

  const defaultOptions = {
    credentials: 'include'
  };
  const newOptions = { ...defaultOptions, ...options };

  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'PATCH' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers
      };
    }
  }

  // 请求之前执行
  beforeRequest(newOptions);

  return fetch(prefix + url, newOptions)
    .then(checkStatus)
    .then(response => cachedSave(response, hashcode))
    .then((response: any) => {
      afterRequest(response);
      // DELETE and 204 do not return data by default
      // using .json will report an error.
      // if (newOptions.method === 'DELETE' || response.status === 204) {
      //   return response.text();
      // }
      return response.json();
    })
    .then(response => {
      return response;
    })
    .catch(e => {
      const status = e.name;
      if (status === 401) {
        return;
      }
      // environment should not be used
      if (status === 403) {
        history.push('/exception/403');
        return;
      }
      if (status <= 504 && status >= 500) {
        history.push('/exception/500');
        return;
      }
      if (status >= 404 && status < 422) {
        history.push('/exception/404');
      }
    });
}
