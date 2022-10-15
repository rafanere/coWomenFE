import axios from 'axios';
const withBaseUrl = path => `https://cowomenbe.herokuapp.com/ads`;

export class adsService {
    static getService() {
        return axios(withBaseUrl('/ads'));
    }

    static getServiceById(id) {
        return axios(withBaseUrl(`/ads/${id}`));
    }
}