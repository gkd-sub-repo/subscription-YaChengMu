import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taptap',
  name: 'TapTap',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '局部广告-游戏浏览页面推荐广告',
      desc: '自动点击"对此内容不感兴趣"',
      rules: [
        {
          key: 0,
          activityIds: 'com.taptap.other.basic.impl.TapMainActivity',
          matches:
            '[id="com.taptap.app.middle:id/decision_layout_mask"] + @[id="com.taptap.app.game:id/app_menu"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12840903',
            'https://i.gkd.li/i/12842279',
            'https://i.gkd.li/i/12864810', //需避免点击正常情况下的app menu
          ],
        },
        {
          key: 1,
          activityIds: [
            'com.taptap.game.discovery.impl.findgame.allgame.dialog.FindGameMenuDialog',
            'com.taptap.other.basic.impl.TapMainActivity',
          ],
          matches: '@LinearLayout > [text="对此内容不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12840904',
            'https://i.gkd.li/i/13258679', //other.basic.impl.TapMainActivity
          ],
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[vid="btn_dismiss"] -2 * >2 [text="发现新版本"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13387479',
            'https://i.gkd.li/i/13488702',
            'https://i.gkd.li/i/14209268',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '青少年模式-首页顶部横幅提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="青少年模式"] + [vid="iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/14209309',
    },
  ],
});
