/*
 * @Author: yangrongxin
 * @Date: 2022-03-12 22:35:37
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-13 16:00:37
 */

/**
 * 消息类型的枚举字段.
 * 
 *  TEXT // 文本类型
 * 
 *  LINK // 链接类型
 * 
 *  MARKDOWN // 富文本类型
 */
export enum MSG_TYPE {
  /**
   * 文本类型
   */
  TEXT = "text",
  /** 
   * 链接类型
   */
  LINK = "link",
  /**
   * 富文本类型
   */
  MARKDOWN = "markdown"
}
