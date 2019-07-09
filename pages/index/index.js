//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navbarActiveIndex: 0,
    navbarTitle: [
      "视力表",
      "视力检测",
      "色盲测试",
      "散光测试"
    ]
  },
  /*
   * 点击导航栏
   */
  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    })
  },

  /*
   * 
   */
  onBindAnimationFinish: function ({ detail }) {
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: detail.current
    })
  }
})
