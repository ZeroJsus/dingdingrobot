/*
 * @Author: yangrongxin
 * @Date: 2022-03-13 00:14:06
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-18 14:29:38
 */

import {
  commonWrapper
} from './common'
import { MsgType } from '../server/types/index'
commonWrapper(
  '测试钉钉文本的发送',
  {
    text: {
      content: '测试吃水果'
    },
    msgtype: MsgType.Text
  }
)
