import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue'],
  manifest: { 
    name: 'Pin All Tabs',
    version: '1.0.0',
    description: 'Pin all tabs',
    action: {
      default_popup: '',  
    },
  },
});
