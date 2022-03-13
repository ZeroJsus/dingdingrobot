/*
 * @Author: yangrongxin
 * @Date: 2022-03-13 00:14:06
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-13 15:53:09
 */

import {
  commonWapper
} from './common';
import { MSG_TYPE } from "../server/types/index";
commonWapper(
  '测试钉钉文本的发送',
  {
    text: {
      content: '测试吃水果'
    },
    msgtype: MSG_TYPE.TEXT
  }
)