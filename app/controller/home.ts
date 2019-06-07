import BaseController from './base';

export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    const res = await ctx.service.test.sayHi('chenTao');
    this.success(res);
  }

  public async mysql() {
    const { ctx } = this;
    const params = ctx.request.body;
    const res = await ctx.service.test.mysql(params.name);
    this.success(res);
  }
}
