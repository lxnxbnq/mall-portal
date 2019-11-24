interface Config {
    version: string;
    prefix: string;
    baseURL: string;
}
const appConfig: Config = {
    version: 'v0.0.1',
    prefix: '/api/v1',
    baseURL: 'http://localhost:8000/'
};
export default appConfig;
