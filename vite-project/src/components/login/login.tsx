import { Button, Modal, Input, Form, Checkbox } from "ant-design-vue";
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

import { defineComponent, ref } from "vue";
import style from './login.module.css'
import { useLoginController } from './login.ts'
import { routerViewLocationKey } from "vue-router";
export const LoginSetting = defineComponent({
  render() {
    return (
      <a class={style.logo}>
        <i class={style.icon} />
        <span class={style.name}>CRM</span>
      </a>
    );
  },
  setup() {
    const loginController = useLoginController()
    return () => {
      return (
        <>
          {/* 登陆判断返回按钮 */}
          <div>
            {loginController.loginState ?
              <Button onClick={() => loginController.handleCancel()} class={style.logIn} type="text">
                {loginController.loginPrompt}
              </Button> :
              <Button onClick={() => loginController.showModal()} class={style.logIn} type="text">
                {loginController.loginPrompt}
              </Button>
            }
          </div>
          {/* 登陆判断展示页面 */}
          <Modal
            title="账号登陆"
            visible={loginController.visible}
            footer={false}
            onOk={() => loginController.handleOk()}
            keyboard={true}
            maskClosable
            onCancel={() => loginController.handleCancel()}
            width={400}
          >
            {/* 表单开始 */}
            < Form
              name="normal_login"
              initialValues={{ remember: true }}
              onFinish={() => loginController.onFinish}
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
                  忘记密码
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  onClick={() => loginController.handleOk()}
                  type="primary"
                  htmlType="submit"
                  class={style.loginFormButton}>
                  登陆
                </Button>
                <a href="">立即注册</a>
              </Form.Item>
            </Form>
            {/* {/* 这里表单内容结束 */}
          </Modal>
        </>
      )
    }
  },
})

