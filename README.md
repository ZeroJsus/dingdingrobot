# dingdingrobot project

```javascript
import {
  DMessage
} from 'dingdingrobot';

const dmessage = new DMessage({
  secret: '', // 钉钉机器人密钥
  access_token: '', // 钉钉机器人accessToken
});

dmessage.send({
  text: 'xxx',
  msgtype: 'text'
});
```