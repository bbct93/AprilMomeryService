import { Controller } from 'egg';
import HTTP_STATUS_CODES from '../extend/http-status-num';

export default class BaseController extends Controller {
    
  
    /**
     * controller成功
     * @param data
     */
    success(data: any, msg = '操作成功') {
      this.ctx.status = HTTP_STATUS_CODES.OK;
      this.ctx.body = {
        result: 'ok',
        data,
        msg,
        code: '',
        errorCodes: '',
        status: '1',
        success: true,
        message: ''
      };
    }
  
   
    /**
     * controller处理错误
     * @param {string} msg
     */
    fail(msg: string) {
      this.ctx.status = HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
      this.ctx.body = {
        err: new Error(msg),
        res: null,
        msg,
        success: false
      };
    }
  
    
  }
  