// 按需引入vant组件,创建单独文件存放引入并注册vant组件,都在main.js中不易维护

import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)
