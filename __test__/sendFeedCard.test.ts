/*
 * @Author: yangrongxin
 * @Date: 2022-03-25 15:20:35
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-25 16:28:40
 */

import {
  commonWapper
} from './common';
import { MSG_TYPE } from "../server/types/index";
commonWapper(
  '测试钉钉文本的发送',
  {
    [MSG_TYPE.FEEDCARD]: {
      links: [
        {
          title: '跳转到我的首页',
          messageURL: 'https://www.apprx.cn',
          picURL: 'https://www.apprx.cn'
        }
      ]
    },
    msgtype: MSG_TYPE.FEEDCARD
  }
)