import appConfig from './core/appConfig';
import proxy from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(proxy(appConfig.prefix, { target: appConfig.baseURL }));
};
