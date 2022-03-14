/*
 * @Author: yangrongxin
 * @Date: 2022-03-13 15:48:44
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-14 09:40:11
 */

import { MsgTypes } from "../server/types/msg";
import { DMessage } from "../server/index";
const dmessage = new DMessage({
  secret: 'SEC7669a7b8e1a44513427748c75f8be9fb08fdff8331f097f5e7a6534f21359a25',
  access_token: '31e3b7af2acce4938bd67c51d28a4b6799b3b2d588ba3020dc7c19043364b0a7'
});
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