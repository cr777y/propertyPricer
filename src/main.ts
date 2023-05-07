import { createApp } from "vue";
import dayjs from 'dayjs';
import App from "./views";
import 'ant-design-vue/dist/antd.css';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

createApp(App).mount("#app");
 