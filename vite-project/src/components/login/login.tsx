import { Button, Modal, Input, Form, Checkbox } from "ant-design-vue";
import { defineComponent, ref } from "vue";
import style from './login.module.css'

export const LoginSetting = defineComponent({
  setup() {
    //窗口弹出逻辑
    const modalText = ref<string>('Content of the modal');
    const visible = ref<boolean>(false);
    const confirmLoading = ref<boolean>(false);
    const showModal = () => {
      visible.value = true;
    };

    const handleOk = () => {
      modalText.value = 'The modal will be closed after two seconds';
      confirmLoading.value = true;
      setTimeout(() => {
        visible.value = false;
        confirmLoading.value = false;
      }, 2000);
    };
    const handleCancel = () => {
      console.log('Clicked cancel button');
      confirmLoading.value = false;
    };

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
            confirmLoading={confirmLoading.value}
            // onCancel={handleCancel}
          >
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
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
            <p>{modalText}</p>
          </Modal>
        </>
      )
    }
  },
})

