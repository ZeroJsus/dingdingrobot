# dingdingrobot project

## nodejs 链接钉钉机器人发送文本的插件 支持typscript

### 目前仅支持群聊的消息发送

```javascript
import DMessage, {
  MSG_TYPE
} from 'dingdingrobot';

// 配置群聊的钉钉机器人消息
const dmessage = new DMessage({
  secret: '', // 钉钉机器人密钥
  access_token: '', // 钉钉机器人accessToken
});

dmessage.send({
  [MSG_TYPE.XXX]: 'xxx',
  msgtype: MSG_TYPE.XXX
});
```

### 支持的群聊消息类型
* [x] text
* [x] link
* [x] markdown
* [x] actionCard
* [x] feedCard