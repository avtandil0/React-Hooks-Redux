import axios from 'axios'
// import Vue from 'vue'
// import constants from '../constants'
import isObject from 'lodash/isObject'
import isBoolean from 'lodash/isBoolean'

// axios.interceptors.request.use(
//   config => {
//     return config
//   },
// )

// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

function callApi(config) {
  console.log('callApicallApicallApicallApicallApicallApicallApi',config)
  const transformedConfig = { ...config }

  // transformedConfig.url = constants.API_PREFIX + config.url

  console.log(121212, transformedConfig)
  return axios.request(transformedConfig)
    .then(response => {
      const { data } = response

      if (isObject(data)) {
        if (isBoolean(data.isSuccess)) {
          //   if (data.isSuccess) {
          //     Vue.notify({
          //       title: 'წარმატებით დასრულდა.',
          //       text: '', // data.message
          //       type: 'success',
          //     })
          //   } else {
          //     Vue.modalNotify(data.message)
          //   }

          if (!data.isSuccess) {
            console.log('aaa')
          }
        }

      }
      console.log('responseresponseresponseresponse',response)
      return response
    })
    .then(({ data }) => data)
    .catch(error => {
      console.log('error12121', error)
      if (error.response.status === 401) { // response
        console.log(3333333333333333333)
        // window.location.replace(constants.API_PREFIX + '#/login')
        // localStorage.removeItem('user-token')
      }

      return Promise.reject(error)
    })
}

export default callApi