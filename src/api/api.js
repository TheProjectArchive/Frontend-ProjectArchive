import axios from 'axios'

class api {
    header={
        headers:{}
    }
    
    get(endPoint) {
        return new Promise((resolve) => {
            axios.get(endPoint, this.header)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                this.catchError(error)
            })
        })
    }

    post(endPoint, data) {
        return new Promise((resolve) => {
            axios.post(endPoint, data, this.header)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                this.catchError(error)
            })
        })
    }
}

export default new api