import api from './api/api.js'

class BaseRequest {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    get(endPoint) {
        return api.get(this.url + endPoint)
    }

    post(endPoint, data) {
        return api.post(this.url + endPoint, data)
    }
}

export default new BaseRequest(process.env.VUE_APP_BASEURL)