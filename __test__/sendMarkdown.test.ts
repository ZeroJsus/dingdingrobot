/*
 * @Author: yangrongxin
 * @Date: 2022-03-13 15:59:50
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-13 16:03:42
 */

import {
  commonWapper
} from './common';
import { MSG_TYPE } from "../server/types/index";
commonWapper(
  '测试钉钉md的发送',
  {
    markdown: {
      title: '异常警告',
      text: '#### 异常警告，生产环境警告! \n 出现了生产环境的异常 需要及时进行解决 \n [点击我查看](https://www.apprx.cn)'
    },
    msgtype: MSG_TYPE.MARKDOWN
  }
)