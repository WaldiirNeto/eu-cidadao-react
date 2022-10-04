import axios from 'axios'
export class HttpInterceptions {

    public interception() {
        new Promise(() => {
            axios.interceptors.response.use((response) => {
                console.log(response)
                return Promise.resolve(response)
            }, (error) => {
                if (error.response.status === 401) {
                    localStorage.removeItem('tokenEuCidadao')
                }
                return Promise.reject(error)
            })
        })

    }

}
