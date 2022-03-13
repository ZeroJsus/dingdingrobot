/*
 * @Author: yangrongxin
 * @Date: 2022-03-11 14:42:50
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-03-11 14:56:06
 */

import http from 'http';

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

httpServer.listen(8000);

