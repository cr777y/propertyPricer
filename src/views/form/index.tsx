import { Form, Input, RangePicker } from "ant-design-vue";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div class="home-form">
        <Form labelCol={{ span: 6 }} labelAlign="left">
          <Form.Item label="请选择合同时间范围">
            <RangePicker></RangePicker>
          </Form.Item>
          <Form.Item label="请输入每月费用">
            <Input></Input>
          </Form.Item>
        </Form>
      </div>
    );
  },
});
