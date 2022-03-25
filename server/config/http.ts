/*
 * @Author: yangrongxin
 * @Date: 2022-03-11 17:43:07
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-25 15:19:50
 */

import crypto from 'crypto';
import {
  request, RequestOptions
} from 'https';
import type {
  MsgTypes
} from '../types/msg';

export class Http {
  private hostname = 'oapi.dingtalk.com';
  private port = 443;
  private method = 'POST';
  private path = '/robot/send';
  static access_token = '';
  static secret = '';

  // 获取当前时间
  static getNowTime() {
    return Date.now();
  }
  
  // 制造签名
  static makeSign() {
    const time = Http.getNowTime();
    const stringToSign = time + "\n" + Http.secret;
    const base = crypto.createHmac('sha256', Http.secret).update(stringToSign).digest('base64');
    const sign = encodeURIComponent(base); // 签名
    return {
      sign,
      time
    };
  }

  
  // 初始化当前的数据请求
  protected sendMsg(data: MsgTypes, resolveFn?: (params: unknown) => void, rejectFn?: (params: unknown) => void) {
    const {
      hostname,
      port,
      path,
      method
    } = this;

    const {
      access_token
    } = Http;

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
        // console.log(`STATUS: ${res.statusCode}`);
        // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          // console.log('chunk', chunk);
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