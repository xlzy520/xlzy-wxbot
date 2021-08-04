const { Wechaty } = require('wechaty');
const WechatyWebPanelPlugin = require('wechaty-web-panel');
const name = 'wechat-assistant'
const bot = new Wechaty({
  name, // generate xxxx.memory-card.json and save login data for the next login
  puppet: 'wechaty-puppet-wechat',
});

bot
  .use(WechatyWebPanelPlugin({apiKey:'350991b95d5786c15bdff6671cac55dcd928d586',
    apiSecret: 'ba8c33f63aef8a72a986fd5e14b3efaece902d12'}))
  .start()
  .catch((e) => console.error(e));

