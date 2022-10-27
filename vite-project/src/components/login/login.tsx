import { Button, Modal, Input, Form, Checkbox } from "ant-design-vue";
import {
  UserOutlined
} from '@ant-design/icons-vue';
import { defineComponent, ref } from "vue";
import style from './login.module.css'
// import { routerViewLocationKey } from "vue-router";
export const LoginSetting = defineComponent({
  setup() {
    //窗口弹出逻辑
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
    };
    const handleCancel = () => {
      visible.value = false;
    };

    //表单逻辑
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
    return () => {
      return (
        <>
          <Button onClick={showModal} class={style.logIn} type="text">
            登陆
          </Button>
          <Modal
            title="账号登陆"
            visible={visible.value}
            footer={false}
            onOk={handleOk}
            keyboard={true}
            maskClosablemaskClosable
            onCancel={handleCancel}
          >
            {/* 表单开始 */}
            < Form
              name="normal_login"
              class={style.loginForm}
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={//引入了但是没效果
                  <UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a class={style.loginFormForgot} href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" class={style.loginFormButton}>
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
            {/* 这里表单内容结束 */}
          </Modal>
        </>
      )
    }
  },
})

