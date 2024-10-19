import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue'],
  manifest: { 
    name: 'Pin All Tabs',
    description: 'Pin all tabs',
    action: {
      default_popup: '', // 将此设置为空字符串
    },
  },
});
