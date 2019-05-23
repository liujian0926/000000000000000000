
import Vue from 'vue';
// 导入axios
import axios from 'axios'
import { Message, MessageBox} from 'element-ui'
import router from '../router'

//根据不同的环境更改不同的baseUrl
let baseUrl = 'http://management.service.168mi.cn';

// if (process.env.NODE_ENV == 'development') {
//     baseUrl = '/api';

// } else if (process.env.NODE_ENV == 'production') {
//     //baseUrl = '测试地址';
//     //baseUrl = '预发布地址';
//     baseUrl = '生产地址';
// }

axios.defaults.baseURL = baseUrl;//设置默认接口地址
axios.defaults.timeout = 10000

// 请求头信息是为post请求设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截
axios.interceptors.request.use(config => {
  if(localStorage.getItem('token')){
    // 请求之前设置token
    console.log(localStorage.getItem('token'));
    
    config.headers.Authorization = window.localStorage.getItem("token")
  }

  return config;

  },  (error)=> {
   
    return Promise.reject(error);
  });
  
  
  // 响应拦截器
  axios.interceptors.response.use(response=> {
    // 同意设置状态码
    // if(response.data.code != 0){
    //  Vue.prototype.$message.error('非法token,请登陆')
    //   // 清除非法token
    //   sessionStorage.removeItem('token')
    //   // 返回登陆
    //   Vue.prototype.$router.push('/login')
    // }
    // if([200,201,204].indexOf(response.data.meta.status!=-1)){

    //   Vue.prototype.$message.success(response.data.msg)
    // }else{
    //   Vue.prototype.$message.warning(response.meta.msg)
    // }
    if (response.data.code !== 0) {
      Message.error('登录超时，请重新登录')
      // 清除token
      localStorage.removeItem('token')
      // 页面跳转
      router.push('/login')
    }
    return response;
  }, error=> {
    return Promise.reject(error);
  });

// get方法
export function getHttp (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

   // post方法
  export function postHttp (url, data = {}) {
    
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(res => {
          if (res.data.code === 0) {
            resolve(res)
          } else {
            reject(res)
          }
        }, (err) => {
          reject(err)
        })
    })
  }