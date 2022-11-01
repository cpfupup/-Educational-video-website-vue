import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ISLogin {
  visible: boolean,
  values: any
}
const getLoginState: () => ISLogin = () => {
  return {
    visible: false,
    values: ''

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