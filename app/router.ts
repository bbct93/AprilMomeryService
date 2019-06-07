import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/aaa', controller.home.index);
  router.post('/mysql', controller.home.mysql)
};
