// pages/light/light.js
Page({

  /**
   * Page initial data
   */
  data: {
    items: [
      { name: '0', value: '图中某线条黑而清晰' },
      { name: '1', value: '图中各线条粗细均匀' },
    ]
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  submit: function () {
    console.log('提交');
    wx.navigateTo({
      url: '../result/result',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})