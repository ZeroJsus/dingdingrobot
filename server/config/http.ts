/*
 * @Author: yangrongxin
 * @Date: 2022-03-11 17:43:07
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-18 14:14:32
 */

import crypto from 'crypto'
import {
  request, RequestOptions
} from 'https'
import { Signature } from 'server/types/index'
import type {
  MsgTypes
} from '../types/msg'

export class Http {
  private readonly hostname = 'oapi.dingtalk.com'
  private readonly port = 443
  private readonly method = 'POST'
  private readonly path = '/robot/send'
  static accessToken = ''
  static secret = ''

  // 获取当前时间
  static getNowTime (): number {
    return Date.now()
  }

  // 制造签名
  static makeSign (): Signature {
    const time = Http.getNowTime()
    const stringToSign = `${time}\n` + Http.secret
    const base = crypto.createHmac('sha256', Http.secret).update(stringToSign).digest('base64')
    const sign = encodeURIComponent(base) // 签名
    return {
      sign,
      time
    }
  }

  // 初始化当前的数据请求
  protected sendMsg (data: MsgTypes, resolveFn?: (params: unknown) => void, rejectFn?: (params: unknown) => void): void {
    const {
      hostname,
      port,
      path,
      method
    } = this

    const {
      accessToken
    } = Http

    const {
      time,
      sign
    } = Http.makeSign()

    const structData = JSON.stringify(data)

    const options: RequestOptions = {
      hostname,
      port,
      path: `${path}?access_token=${accessToken}&timestamp=${time}&sign=${sign}`,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(structData)
      }
    }

    Http.send(options, structData, resolveFn, rejectFn)
  }

  static send (
    options: RequestOptions,
    structData: string,
    resolveFn?: (params: unknown) => void,
    rejectFn?: (params: unknown) => void
  ): void {
    const req = request(
      options,
      (res) => {
        // console.log(`STATUS: ${res.statusCode}`);
        // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8')
        res.on('data', (chunk) => {
          // console.log('chunk', chunk);
          if (resolveFn != null) {
            resolveFn(chunk)
          }
        })
        res.on('end', () => {
          console.log('No more data in response.')
        })
      }
    )

    req.on('error', (e) => {
      if (rejectFn != null) {
        rejectFn(e)
      }
    })

    // Write data to request body
    req.write(structData)
    req.end()
  }
}
