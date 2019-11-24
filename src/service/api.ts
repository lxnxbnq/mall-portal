import request from '@utils/request';

export async function getCat() {
    return request(`/cat`);
}
