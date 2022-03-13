/*
 * @Author: yangrongxin
 * @Date: 2022-03-12 22:32:20
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-13 16:01:43
 */

import {
  MSG_TYPE
} from './index'

export interface IDMessage {
  send: (data: MsgText | MsgLink, resolveFn?: () => unknown, rejectFn?: () => unknown) => void
}

/**
 * https://open.dingtalk.com/document/group/message-types-and-data-format
 */
export type MsgText = {
  at?: {
    atMobiles?: string[],
    atUserIds?: string[],
    isAtAll?: boolean
  },
  text: {
    content: string
  },
  msgtype: MSG_TYPE.TEXT
}

/**
 * https://open.dingtalk.com/document/group/message-types-and-data-format
 */
export type MsgLink = {
  msgtype: MSG_TYPE.LINK,
  link: {
    text: string,
    title: string,
    picUrl?: string,
    messageUrl: string
  }
};

/**
 * https://open.dingtalk.com/document/group/message-types-and-data-format
 * 标题
 *   # 一级标题
 *   ## 二级标题
 *   ### 三级标题
 *   #### 四级标题
 *   ##### 五级标题
 *   ###### 六级标题
    
 *   引用
 *   > A man who stands for nothing will fall for anything*.
    
 *   文字加粗、斜体
 *   **bold**
 *   *italic**
    
 *   链接
 *   [this is a link](https://www.dingtalk.com/)
    
 *   图片
 *   ![](http://name.com/pic.jpg)
    
 *   无序列表
 *   - item1
 *   - item2
    
 *   有序列表
 *   1. item1
 *   2. item2
 */
export type MsgMarkdown = {
  msgtype: MSG_TYPE.MARKDOWN,
  markdown: {
    title: string,
    text: string,
  },
  at?: {
    atMobiles?: string[],
    atUserIds?: string[],
    isAtAll?: boolean
  }
};

/**
 * 声明所有相关的类型
 * TODO: actionCard 独立跳转类型
 * TODO: feedCard 类型
 */
export type MsgTypes = MsgText | MsgLink | MsgMarkdown;