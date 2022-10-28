import { Button, Modal, Input, Form, Checkbox } from "ant-design-vue";
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

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
            width={400}
          >
            {/* 表单开始 */}
            < Form
              name="normal_login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入账号' }]}
              >
                <Input
                  placeholder="Username"
                  style="width:90%"
                  class={style.input}
                />
                <UserOutlined class={style.icon} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input
                  type="password"
                  placeholder="Password"
                  style="width:90%"
                  class={style.input}
                />
                <LockOutlined class={style.icon} />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox class={style.loginFormForgotRight}>记住我</Checkbox>
                </Form.Item>

                <a class={style.loginFormForgot} href="">
                  忘记密码                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" class={style.loginFormButton}>
                  登陆
                </Button>
                <a href="">立即注册</a>
              </Form.Item>
            </Form>
            {/* 这里表单内容结束 */}
          </Modal>
        </>
      )
    }
  },
})

