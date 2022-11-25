import HttpConnection from '../clients/restConnection/httpConnection.js';

export default class WalletClient {
  
    // constructor({ config, httpClientMapper, httpConstants, logger }) {
    constructor({ config, httpClientMapper, httpConstants }) {
        const { studioGhibliApi } = config.integration.rest;

        this.httpConnection = new HttpConnection({
            baseURL: studioGhibliApi.baseUrl,
            timeout: studioGhibliApi.timeout,
            rejectUnauthorized: studioGhibliApi.rejectUnauthorized,
        });

        this.authorization = studioGhibliApi.authorization_token;
        this.httpClientMapper = httpClientMapper;
        this.httpConstants = httpConstants;
        // this.logger = logger;
    }

    async getMovies({ params, headers }) {
        const response = await this.httpConnection.get({
            headers: { 'auth-token': headers['auth-token'] },
            url: '/films',
            params
        });

        return this.httpClientMapper.mapperData(response);
    }
    
}
