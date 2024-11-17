export default defineAppConfig({
  pages: [
  'pages/index/index', "pages/UserInfoPage/index", "pages/CategoryItem/index"],

  tabBar: {
    color: '#666',
    selectedColor: '#007AFF',
    borderStyle: 'black',
    backgroundColor: '#fafafa',
    list: [
    {
      pagePath: 'pages/index/index',
      text: '首页'
    },
    {
      pagePath: 'pages/UserInfoPage/index',
      text: '我的'
    }]


  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
});