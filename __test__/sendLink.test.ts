/*
 * @Author: yangrongxin
 * @Date: 2022-03-13 15:45:17
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-13 15:54:43
 */

import {
  commonWapper
} from './common';
import { MSG_TYPE } from "../server/types/index";
commonWapper(
  '测试钉钉链接的发送',
  {
    link: {
      title: '这是个人网站标题',
      messageUrl: 'https://www.apprx.cn',
      text: '杨荣鑫的个人网站',
    },
    msgtype: MSG_TYPE.LINK
  }
)