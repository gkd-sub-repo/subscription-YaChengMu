import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.browser',
  name: '华为浏览器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id$="/hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/import/12681995',
            'https://i.gkd.li/import/13403785',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '通知提示-开启资讯通知弹窗',
      desc: '关闭资讯通知后，总是弹窗让打开',
      rules: [
        {
          matches: '[id="com.huawei.browser:id/close_push_guide_window"]',
          exampleUrls:
            'https://m.gkd.li/87047583/3982b64a-15a7-4c0c-b179-2ed82d6ea18e',
          snapshotUrls: 'https://i.gkd.li/import/13692404',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.huawei.browser.customtab.EmuiBrowserCustomTabActivity',
          matches:
            'View[id="root"] > View[index=1] > View[id="logo-close-btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13997759',
        },
      ],
    },
  ],
});
