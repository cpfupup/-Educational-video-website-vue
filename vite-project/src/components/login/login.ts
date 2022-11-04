import { defineStore } from 'pinia'

interface ISLogin {
  visible: boolean,
  values: any,
  loginPrompt: string
  loginState: boolean
}
const getLoginState: () => ISLogin = () => {
  return {
    visible: false,
    values: '',
    loginPrompt: '登陆/注册',
    loginState: false
  }
}

export const useLoginController = defineStore('operate-controller', {
  state: getLoginState,


  actions: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
      this.loginPrompt = '退出登陆';
      this.loginState = true

    },

    handleCancel() {
      this.visible = false;
    },
    //表单逻辑
    onFinish() {
      console.log('Received values of form: ', this.values);
    }
  }
})