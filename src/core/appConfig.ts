
let dev = {
  base: 'http://104.243.18.231:5000',
  version: 'v0.0.1',
  prefix: '/api/v1',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pro = {
  base: '',
  version: 'v0.0.1',
  prefix: '/api/v1',
};

let env = dev;

export default {
  baseURL: env.base,
  version: env.version,
  prefix: env.prefix
};