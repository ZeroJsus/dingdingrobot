/*
 * @Author: yangrongxin
 * @Date: 2022-03-25 15:20:35
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-25 16:06:43
 */

import {
  commonWapper
} from './common';
import { MSG_TYPE } from "../server/types/index";
commonWapper(
  '测试钉钉文本的发送',
  {
    [MSG_TYPE.ACTIONCARD]: {
      title: '这是单个消息',
      text: 'text #123',
      singleTitle: '阅读全文',
      singleURL: 'https://www.dingtalk.com/'
    },
    msgtype: MSG_TYPE.ACTIONCARD
  }
)

commonWapper(
  '测试钉钉文本的发送',
  {
    [MSG_TYPE.ACTIONCARD]: {
      title: '这是一个整体消息',
      text: 'text #123',
      btns: [
        {
          title: '点击跳转到我的首页',
          actionURL: 'https://www.dingtalk.com/'
        }
      ]
    },
    msgtype: MSG_TYPE.ACTIONCARD
  }
)