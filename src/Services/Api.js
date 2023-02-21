import {NodeApiEndPoint} from './config';
import auth from './auth';

import NetInfo from '@react-native-community/netinfo';
import {useSelector} from 'react-redux';
const {host } = NodeApiEndPoint;

export default class PostApi {
  static PostRequest = (url, params) => {
    console.log("==>",url,params)
    return new Promise((resolve, reject) => {
    
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Basic YXBpVXNlcjphcGlVc2Vy",
            },
            body: JSON.stringify(params),
          })
            .then(response => response.json())
            .then(jsonReponse => {
              console.log("json==>",jsonReponse)
              if (jsonReponse.record_created ||jsonReponse.password_is_correct||jsonReponse.is_transaction_done) {
               
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
             // reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };


  static PostRequestAuth = (url, params) => {
    console.log("url==>",`${host}${url}`,params)
    return new Promise((resolve, reject) => {
    
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Basic YXBpVXNlcjphcGlVc2Vy",
            },
            body: JSON.stringify(params),
          })
            .then(response => response.json())
            .then(jsonReponse => {
             console.log("json==>",jsonReponse)
              if (jsonReponse.length!=0) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };
  static PostRequestparams = (url, params, jwt) => {
    console.log("url===>",`${hostc}${url}${params}`)
    return new Promise((resolve, reject) => {
      
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${hostc}${url}${params}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + jwt,
            },
          })
            .then(response => response.json())
            .then(jsonReponse => {
             
              if (jsonReponse.status === 200) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };



  static PostRequestwithForm = (url, params, image) => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
          })
            .then(response => response.json())
            .then(jsonReponse => {
              if (jsonReponse.status === global.const.apiSuccess) {
              
                var newformData = new FormData();
                newformData.append('_partitionkey', jsonReponse.user_details);
                //newformData.append("username", params.username);
                newformData.append('image_url', image);
                let verifications = {
                  verificationtype: 'tradelicense',
                  status: 'active',
                  imagehref: '',
                  approvedby: 'admins',
                  approveddate: '',
                };
                newformData.append(
                  'verifications',
                  JSON.stringify(verifications),
                );

                fetch(
                  host + registerUpload,

                  {
                    method: 'POST',
                    headers: {},
                    body: newformData,
                  },
                )
                  .then(res => res.json())
                  .then(result => {
                    resolve(result)
                  })
                  .catch(error => {
                    reject(auth.errorHandler(error));
                  });
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };



  static GetParamsUrl = (url, params, jwt) => {
   
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${host}${url}/${params}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + jwt,
            },
          })
            .then(response => response.json())
            .then(jsonReponse => {
             
              if (jsonReponse.status === 200) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };


  static GetParamsUrlCust = (url, params, jwt) => {

    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${hostc}${url}/${params}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + jwt,
            },
          })
            .then(response => response.json())
            .then(jsonReponse => {
           
              if (jsonReponse.status === 200) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };

  static GetParamsFavCust = (url, params, jwt) => {

    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${hostc}${url}/${params}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + jwt,
            },
          })
            .then(response => response.json())
            .then(jsonReponse => {
           
              if (jsonReponse.status === 200||206) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };

  static PutRequest = (url, params, jwt) => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
       

        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + jwt,
            },
            body: JSON.stringify(params),
          })
            .then(response => response.json())
            .then(jsonReponse => {
          
              if (jsonReponse.status === 200) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
            
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };


  static PutRequestForm = (url, params, jwt) => {
    return new Promise((resolve, reject) => {
      var formData = new FormData();
      //  formData.append("firstName","harish")
      Object.keys(params).map(el => {
        if (el === 'photoId') {
          formData.append(el, params[el]);
        } else if (el == 'businessRegistration') {
          formData.append(el, params[el]);
        } else if (el == 'licenses') {
          formData.append(el, params[el]);
        } else if (el == 'companyLogo') {
          formData.append(el, params[el]);
        } else {
          formData.append(el, params[el].toString());
        }
      });
      NetInfo.fetch().then(state => {
       
     
        if (state.isConnected) {
          fetch(`${hostc}${url}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: 'Bearer ' + jwt,
            },
            body: formData,
          })
            .then(response => response.json())
            .then(jsonReponse => {
              
              if (jsonReponse.status === 200) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
            
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };


  static GetUrlRequest = (url, params) => {
    console.log("url==>",`${host}${url}`)
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
       
            fetch(`${host}${url}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Basic YXBpVXNlcjphcGlVc2Vy",

              },
            })
              .then(response => response.json())
              .then(jsonReponse => {
             
                if (jsonReponse?.status === 500 || jsonReponse?.status === 404) {
                  reject(jsonReponse);
                } else {
                  resolve(jsonReponse);
                }
              })
              .catch(error => {
                reject(auth.errorHandler(error));
              });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };

  static GetbodyRequest = (url, params) => {
    
    console.log("url==>",`${host}${url}`+params)
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
       
            fetch(`${host}${url}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Basic YXBpVXNlcjphcGlVc2Vy",
                body:JSON.stringify(params),

              },
            })
              .then(response => response.json())
              .then(jsonReponse => {
             
                if (jsonReponse?.status === 500 || jsonReponse?.status === 404) {
                  reject(jsonReponse);
                } else {
                  resolve(jsonReponse);
                }
              })
              .catch(error => {
                reject(auth.errorHandler(error));
              });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };
  static GetUrlRequestemail = (url, params) => {
    console.log("url==>",`${host}${url}`)
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
       
            fetch(`${host}${url}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then(response => response.json())
              .then(jsonReponse => {
             console.log(jsonReponse)
                if (jsonReponse.status === 206) {
                 
                  resolve(jsonReponse);
                } else {
                  reject(jsonReponse);
                }
              })
              .catch(error => {
                reject(auth.errorHandler(error));
              });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };

  static GetUrlRequestCust = (url, jwt) => {
    console.log("url==>",`${hostc}${url}`)
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
       
            fetch(`${hostc}${url}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + jwt,
              },
            })
              .then(response => response.json())
              .then(jsonReponse => {
             console.log("JSON==>",jsonReponse);
                if (jsonReponse.status === 200) {
                 
                  resolve(jsonReponse);
                } else {
                  reject(jsonReponse);
                }
              })
              .catch(error => {
                reject(auth.errorHandler(error));
              });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };
  static GetParmasUrlToken = (url, params, jwt) => {
 console.log("wallet==>",`${hostc}${url}/${params}`)
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${hostc}${url}/${params}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + jwt,
            },
          })
            .then(response => response.json())
            .then(jsonReponse => {
         console.log("res==>",jsonReponse)
              if (jsonReponse.status === 200) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };

  static PostUrlRequest = url => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
        
            fetch(`${host}${url}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then(response => response.json())
              .then(jsonReponse => {
                if (jsonReponse.status === global.const.apiSuccess) {
                
                  resolve(jsonReponse);
                } else {
                  reject(jsonReponse);
                }
              })
              .catch(error => {
             

                reject(auth.errorHandler(error));
              });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };


  static DeleteRequest = url => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
      
            fetch(`${host}${url}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then(response => response.json())
              .then(jsonReponse => {
                if (jsonReponse.status === global.const.apiSuccess) {
                 
                  resolve(jsonReponse);
                } else {
                  reject(jsonReponse);
                }
              })
              .catch(error => {
               

                reject(auth.errorHandler(error));
              });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };
  static DeleteRequestcust = (url,jwt) => {
    console.log("dell==>",`${hostc}${url}`)
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
      
            fetch(`${hostc}${url}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + jwt,
              },
            })
              .then(response => response.json())
              .then(jsonReponse => {
                if (jsonReponse.status === 200) {
                 
                  resolve(jsonReponse);
                } else {
                  reject(jsonReponse);
                }
              })
              .catch(error => {
               

                reject(auth.errorHandler(error));
              });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };


  static GetUrlalone = url => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(jsonReponse => {
              if (jsonReponse.status === global.const.apiSuccess) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };


  static GetCustomUrlAlone = url => {
    return new Promise((resolve, reject) => {


      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${url}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(jsonReponse => {
              // if (jsonReponse.status) {
              //   resolve(jsonReponse);
              // } else {
              //   reject(jsonReponse);
              // }
              resolve(jsonReponse);
            })
            .catch(error => {
             

              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };


  static postFormData(url, params) {
    return new Promise((resolve, reject) => {
      var formData = new FormData();
      formData.append('logo', params.logo);
   
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: 'POST',
            body: formData,
          })
            .then(response => response.json())
            .then(jsonReponse => {
             

              if (jsonReponse.status === global.const.apiSuccess) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  }



  static postFormDataLogo(url, params) {
    return new Promise((resolve, reject) => {
      const formDataIm = new FormData();
      formDataIm.append('file', params);
   
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: formDataIm,
          })
            .then(response => response.json())
            .then(jsonReponse => {
              

              if (jsonReponse.status === global.const.apiSuccess) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
           
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};

          reject(error);
        }
      });
    });
  }


  static postFormDataVideo(url, params) {
    return new Promise((resolve, reject) => {
 
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: params,
          })
            .then(response => response.json())
            .then(jsonReponse => {
             

              if (jsonReponse.status === global.const.apiSuccess) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
             
              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};

          reject(error);
        }
      });
    });
  }
}
