import BaseController from './base';

export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async mysql() {
    const { ctx } = this;
    const params = ctx.request.body;
    const res = ctx.service.test.mysql(params);
    this.success(res);
  }
}
