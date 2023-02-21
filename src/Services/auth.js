/* eslint-disable prettier/prettier */
class auth {
    static errorHandler(response) {
      let error = { message: "", status: "failure" };
      switch (response.status) {
        case 403 || 401:
          error.message = global.const.autherror;
          break;
        case 503:
          error.message = global.const.serverunavailable;
          break;
        default:
          error.message = global.const.commonError;
      }
      console.log("error", error);
      return error;
    }
  }
  export default auth;
  