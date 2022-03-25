/*
 * @Author: yangrongxin
 * @Date: 2022-03-12 22:32:20
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-25 16:27:27
 */

import {
  MSG_TYPE
} from './index'

export interface IDMessage {
  send: (data: MsgText | MsgLink, resolveFn?: () => unknown, rejectFn?: () => unknown) => void
}

/**
 * 文本消息类型
 * https://open.dingtalk.com/document/group/message-types-and-data-format
 */
export type MsgText = {
  at?: {
    atMobiles?: string[],
    atUserIds?: string[],
    isAtAll?: boolean
  },
  [MSG_TYPE.TEXT]: {
    content: string
  },
  msgtype: MSG_TYPE.TEXT
}

/**
 * 链接消息类型
 * https://open.dingtalk.com/document/group/message-types-and-data-format
 */
export type MsgLink = {
  msgtype: MSG_TYPE.LINK,
  [MSG_TYPE.LINK]: {
    text: string,
    title: string,
    picUrl?: string,
    messageUrl: string
  }
};

/**
 * markdown消息类型
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
  [MSG_TYPE.MARKDOWN]: {
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
 * title 标题名称
 * actionURL 点击按钮触发的URL
 */
type btnItem = {
  title: string,
  actionURL: string
}

/**
 * vertical 水平方向展示按钮
 * crosswise 竖直方向展示按钮
 */
enum btn_Orientation {
  vertical = '0',
  crosswise = '1',
}

/**
 * 活动卡片类型
 * title: 标题
 * text: markdown格式的消息内容
 * 
 * 整体跳转配置
 * singleTitle: 单个按钮的标题
 * singleURL: 单个按钮的跳转链接
 * 
 * 独立跳转配置
 * btns: 独立跳转的按钮组
 * btnOrientation: 独立跳转的按钮方向
 */
export type MsgActionCard = {
  msgtype: MSG_TYPE.ACTIONCARD,
  [MSG_TYPE.ACTIONCARD]: {
    title: string,
    text: string,
    singleTitle?: string,
    singleURL?: string
    btns?: btnItem[]
    btnOrientation?: btn_Orientation
  }
}

type links_item = {
  title: string,
  messageURL: string,
  picURL: string
};

/**
 * feedCard类型的数据
 * links: 
 *    title: 单条信息文本
 *    messageURL: 单条信息跳转链接
 *    picURL: 单条信息后面的URL
 */
export type MsgFeedCard = {
  msgtype: MSG_TYPE.FEEDCARD,
  [MSG_TYPE.FEEDCARD]: {
    links: links_item[]
  }
}

/**
 * 声明所有相关的类型
 */
export type MsgTypes = MsgText | MsgLink | MsgMarkdown | MsgActionCard | MsgFeedCard;