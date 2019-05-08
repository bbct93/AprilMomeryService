import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }

  public async mysql(params: object) {
    console.log('-------ct------', params);
    let name = '陈涛'
    const res = this.ctx.mysql.query('select * from user_info where name = ?', [name]);
    console.log('------查询结果------', res);
  }
}
