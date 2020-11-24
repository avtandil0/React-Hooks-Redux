import axios from 'axios'

//const url = 'http://localhost:62999'

export const apiGetDialisysReport = async filter => {
    let query = Object.keys(filter)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(filter[k]))
        .join('&');
    let url = 'http://test.ssa.gov.ge/dialisis-services/dialysis/Reports/hemo?' + query
    try {
        let response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res)
        console.log('headers', response.headers)
        console.log('data', response.data)
        return {data:response.data, totalItems: response.headers.totalitems}
    } catch (err) {
        throw err
    }
}

export const apiGetDialisysServiceProviders = async () => {
    let url = 'http://test.ssa.gov.ge/dialisis-services/dialysis/ServiceProviders'
    try {
        let response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res)
        return response.data
    } catch (err) {
        throw err
    }
}
