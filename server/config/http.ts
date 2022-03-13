/*
 * @Author: yangrongxin
 * @Date: 2022-03-11 17:43:07
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-13 15:40:32
 */

import crypto from 'crypto';
import {
  request, RequestOptions
} from 'https';
import type {
  MsgTypes
} from '../types/msg';

class Base {
  static secret = 'SEC7669a7b8e1a44513427748c75f8be9fb08fdff8331f097f5e7a6534f21359a25';

  // 获取当前时间
  static getNowTime() {
    return Date.now();
  }
  
  // 制造签名
  static makeSign() {
    const time = Base.getNowTime();
    const stringToSign = time + "\n" + Base.secret;
    const base = crypto.createHmac('sha256', Base.secret).update(stringToSign).digest('base64');
    const sign = encodeURIComponent(base); // 签名
    return {
      sign,
      time
    };
  }
}

export class Http extends Base {
  private hostname = 'oapi.dingtalk.com';
  private port = 443;
  private method = 'POST';
  private path = '/robot/send';
  private access_token = '31e3b7af2acce4938bd67c51d28a4b6799b3b2d588ba3020dc7c19043364b0a7';
  
  // 初始化当前的数据请求
  sendMsg(data: MsgTypes, resolveFn?: (params: unknown) => void, rejectFn?: (params: unknown) => void) {
    const {
      hostname,
      port,
      path,
      access_token,
      method
    } = this;

    const {
      time,
      sign
    } = Http.makeSign();

    const structData = JSON.stringify(data);

    const options: RequestOptions = {
      hostname,
      port,
      path: `${path}?access_token=${access_token}&timestamp=${time}&sign=${sign}`,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(structData)
      }
    };

    Http.send(options, structData, resolveFn, rejectFn);
  }

  static send(
    options: RequestOptions,
    structData: string,
    resolveFn?: (params: unknown) => void,
    rejectFn?: (params: unknown) => void
  ) {
    const req = request(
      options,
      (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          console.log('chunk', chunk);
          resolveFn && resolveFn(chunk);
        });
        res.on('end', () => {
          console.log('No more data in response.');
        });
      }
    );

    req.on('error', (e) => {
      rejectFn && rejectFn(e);
    });

    // Write data to request body
    req.write(structData);
    req.end();
  }
}