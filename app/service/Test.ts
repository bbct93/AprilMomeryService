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

  public async mysql(params: string) {
    let res = await this.app.mysql.get('user_info', {name: params});
    console.log('------查询结果------', JSON.parse(JSON.stringify(res)) );
    res = JSON.parse(JSON.stringify(res));
    return res;
  }
}
