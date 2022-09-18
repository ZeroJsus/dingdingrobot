/*
 * @Author: yangrongxin
 * @Date: 2022-03-12 22:27:36
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-18 14:16:43
 */

import {
  IDMessage,
  MsgTypes
} from '../types/msg'
import {
  Http
} from '../config/http'

export default class DMessage extends Http implements IDMessage {
  constructor (config: {
    secret: string
    accessToken: string
  }) {
    super()
    const {
      secret,
      accessToken
    } = config
    if (secret !== '' && accessToken !== '') {
      Http.secret = secret
      Http.accessToken = accessToken
    } else {
      throw new Error('请传入配置信息！')
    }
  }

  /**
   * 向钉钉控制台发送一条消息
   * @param data MsgTypes
   * @param resolveFn 接口请求成功 获取返回消息
   * @param rejectFn 接口请求失败 获取错误信息
   */
  send (data: MsgTypes, resolveFn?: (params: unknown) => void, rejectFn?: (params: unknown) => void): void {
    this.sendMsg(data, resolveFn, rejectFn)
  }
}
