/*
 * @Author: yangrongxin
 * @Date: 2022-03-12 22:35:37
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-18 14:10:38
 */

/**
 * 消息类型的枚举字段.
 *
 *  Text // 文本类型
 *
 *  LINK // 链接类型
 *
 *  MarkDown // 富文本类型
 *
 *  ActionCard // 整体跳转活动卡片
 *
 *  FeedCard // 消息卡片
 *
 */
export const enum MsgType {
  /**
   * 文本类型
   */
  Text = 'text',
  /**
   * 链接类型
   */
  Link = 'link',
  /**
   * 富文本类型
   */
  MarkDown = 'markdown',
  /**
   * 活动卡片
   */
  ActionCard = 'actionCard',
  /**
   * 消息卡片
   */
  FeedCard = 'feedCard',
}

/**
 * 签名内容
 */
export interface Signature {
  sign: string
  time: number
}
