/*
 * @Author: yangrongxin
 * @Date: 2022-03-25 15:20:35
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-18 14:31:42
 */

import {
  commonWrapper
} from './common'
import { MsgType } from '../server/types/index'
commonWrapper(
  '测试钉钉文本的发送',
  {
    [MsgType.ActionCard]: {
      title: '这是单个消息',
      text: 'text #123',
      singleTitle: '阅读全文',
      singleURL: 'https://www.dingtalk.com/'
    },
    msgtype: MsgType.ActionCard
  }
)

commonWrapper(
  '测试钉钉文本的发送',
  {
    [MsgType.ActionCard]: {
      title: '这是一个整体消息',
      text: 'text #123',
      btns: [
        {
          title: '点击跳转到我的首页',
          actionURL: 'https://www.dingtalk.com/'
        }
      ]
    },
    msgtype: MsgType.ActionCard
  }
)
