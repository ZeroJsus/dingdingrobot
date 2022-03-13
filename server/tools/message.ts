/*
 * @Author: yangrongxin
 * @Date: 2022-03-12 22:27:36
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-13 15:44:10
 */

import {
  IDMessage,
  MsgTypes
} from '../types/msg';
import {
  Http
} from '../config/http';

export default class DMessage extends Http implements IDMessage {

  /**
   * 向钉钉控制台发送一条消息
   * @param data MsgTypes
   * @param resolveFn 接口请求成功 获取返回消息
   * @param rejectFn 接口请求失败 获取错误信息
   */
  send(data: MsgTypes, resolveFn?: (params: unknown) => void, rejectFn?: (params: unknown) => void) {
    this.sendMsg(data, resolveFn, rejectFn);
  }
}