import request from '@utils/request';

export async function getCat() {
  return request(`/cat`);
}

export async function login(params: { username: string; password: any }) {
  return request(`/login`, {
    method: 'POST',
    body: params
  });
}
