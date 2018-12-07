const STORAGE_KEY = 'table-vuejs'   //名字随便起
export default {
  //向往输出，以便组件接收
  fetch() {
    //我们定义的获取数据的方法
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save(items) {
      // 我们定义的保存数据的方法
      window.localStorage.getItem(STORAGE_KEY, JSON.stringify(items))
  }
}
