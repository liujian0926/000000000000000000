

// 导入axios
import axios from 'axios'
import { Message,MessageBox} from 'element-ui'

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
axios.interceptors.request.use(config=>{
   
    // if(sessionStorage.getItem){
    //   // 请求之前同意设置token
    // // config.headers.Authorization = window.sessionStorage.getItem("token")
    // }
    
  
    return config;
    
  },  (error)=> {
   
    return Promise.reject(error);
  });
  
  
  // 响应拦截器
  axios.interceptors.response.use(response=> {
    // 同意设置状态码
    // if(response.data.meta.msg=='无效token' && response.data.meta.status == 400){
      // 提视
    //  Vue.prototype.$message.error('非法token,请登陆')
    // Message({
    //     message:'非法token,请登陆',
    //     duration:3000
    // })
      // 清除非法token
      // sessionStorage.removeItem('token')
      // 返回登陆
      // router.push('/login')
      // Vue.prototype.$router.push('/login')
    // }
    // if([200,201,204].indexOf(response.data.meta.status!=-1)){

    //   Vue.prototype.$message.success(response.data.meta.msg)
    // }else{
    //   Vue.prototype.$message.warning(response.data.meta.msg)
    // }

    return response;
  }, error=> {
    
    return Promise.reject(error);
  });

// get方法
export function getHttp (url, params = {}) {
   
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      })
        .then(res => {
            console.log(1111)
          resolve(res.data)
           
        })
        .catch(err => {
            console.log(err)
          reject(err)
         
        })
    })
  }

   // post方法
  export function postHttp (url, data = {}) {
    
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(res => {
            console.log(res)
          if (res.data.status == 1) {
            resolve(res.data)
          } else {
            
          }
          
        }, (err) => {
          
          reject(err)
          
        })
    })
  }