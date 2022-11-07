import { defineStore } from "pinia";
interface Option {
  query: string;
  category: string;
  value: string;
  count: number;
}
interface IState {
  value: string;
  dataSource: Option[];
  searchState: boolean;
}

const getMenuState: () => IState = () => {
  return {
    value: '',
    dataSource: [],
    searchState: false
  }
}

export const getMenuSettingController = defineStore('authorization-controller', {
  state: getMenuState,
  actions: {
    //从这里开始是搜索框提示栏目显示内容，后期需要更改
    handleSearch(value: string) {
      this.dataSource = value ? this.searchResult(value) : [];
      this.searchState = true
      console.log(this.dataSource)
    },
    onBlur() {
      this.searchState = false
    },
    onSelect: (value: any) => {
      console.log('onSelect', value);
    },
    getRandomInt: (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min,
    searchResult(query: string): Option[] {
      return new Array(this.getRandomInt(5))
        .join('.')
        .split('.')
        .map((_item, idx) => ({
          query,
          category: `${query}${idx}`,
          value: `${query}${idx}`,
          count: this.getRandomInt(200, 100),
        }));
    },
    //到这里搜索框逻辑结束
  }
})
