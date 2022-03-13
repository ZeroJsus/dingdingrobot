/*
 * @Author: yangrongxin
 * @Date: 2022-03-13 15:48:44
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-13 15:53:50
 */

import { MsgTypes } from "../server/types/msg";
import { DMessage } from "../server/index";
const dmessage = new DMessage();
export function commonWapper(desc: string,data: MsgTypes) {
  test(desc, (done) => {
    expect(dmessage.send(data, function(data: unknown) {
      try {
        expect(data).toBe(JSON.stringify({"errcode":0,"errmsg":"ok"}));
        done();
      } catch (error) {
        done(error);
      }
    }, function(error: unknown) {
      expect.assertions(1);
      expect(error).toMatch('error');
      done();
    }));
  })
}