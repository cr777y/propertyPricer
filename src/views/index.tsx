import { ConfigProvider } from "ant-design-vue";
import { defineComponent } from "vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';

import Form from "./form";
import "./index.less";

export default defineComponent({
  setup() {
    return () => (
      <ConfigProvider locale={zhCN}>
        <div class="home">
          <Form></Form>
        </div>
      </ConfigProvider>
    );
  },
});
