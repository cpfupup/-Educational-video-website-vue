import { defineStore } from "pinia";
interface Option {
  query?: string;
  category?: string;
  value?: string;
  count?: number;
}
const getMenuState: () => Option = () => ({
  query: '',
  category: '',
  value: '',
  count: 0
})

export const menuSettingController = defineStore('authorization-controller', {
  state: getMenuState,

})
