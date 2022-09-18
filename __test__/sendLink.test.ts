/*
 * @Author: yangrongxin
 * @Date: 2022-03-13 15:45:17
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-18 14:28:47
 */

import {
  commonWrapper
} from './common'
import { MsgType } from '../server/types/index'
commonWrapper(
  '测试钉钉链接的发送',
  {
    link: {
      title: '这是个人网站标题',
      messageUrl: 'https://www.apprx.cn',
      text: '杨荣鑫的个人网站'
    },
    msgtype: MsgType.Link
  }
)
