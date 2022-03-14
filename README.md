# dingdingrobot project

## nodejs 链接钉钉机器人发送文本的插件 支持typscript

```javascript
import DMessage, {
  MSG_TYPE
} from 'dingdingrobot';

const dmessage = new DMessage({
  secret: '', // 钉钉机器人密钥
  access_token: '', // 钉钉机器人accessToken
});

dmessage.send({
  text: 'xxx',
  msgtype: MSG_TYPE.XXX
});
```