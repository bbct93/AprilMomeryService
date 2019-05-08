// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/test';

declare module 'egg' {
  interface IService {
    test: ExportTest;
  }
}
