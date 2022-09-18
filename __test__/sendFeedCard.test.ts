/*
 * @Author: yangrongxin
 * @Date: 2022-03-25 15:20:35
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-18 14:28:44
 */

import {
  commonWrapper
} from './common'
import { MsgType } from '../server/types/index'
commonWrapper(
  '测试钉钉文本的发送',
  {
    [MsgType.FeedCard]: {
      links: [
        {
          title: '跳转到我的首页',
          messageURL: 'https://www.apprx.cn',
          picURL: 'https://www.apprx.cn'
        }
      ]
    },
    msgtype: MsgType.FeedCard
  }
)
