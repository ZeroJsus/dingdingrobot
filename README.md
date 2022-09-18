# dingdingrobot project

## nodejs 链接钉钉机器人发送文本的插件 支持typescript

### 目前仅支持群聊的消息发送

```javascript
import DMessage, {
  MsgType
} from 'dingdingrobot';

// 配置群聊的钉钉机器人消息
const dMessage = new DMessage({
  secret: '', // 钉钉机器人密钥
  accessToken: '', // 钉钉机器人accessToken
});

dMessage.send({
  [MsgType.XXX]: 'xxx',
  msgtype: MsgType.XXX
});
```

### 支持的群聊消息类型

基础消息

* [x] text
* [x] link
* [x] markdown
* [x] actionCard
* [x] feedCard

### 参考文档

[钉钉开放平台-钉钉机器人](https://open.dingtalk.com/document/robots/robot-overview)
