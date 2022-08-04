// pages/stories/new.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },
  formSubmit(e) {
    console.log("form submitted")
    const story = e.detail.value
    console.log(story)
    wx.request({
      url: 'http://localhost:3000/api/v1/stories',
      method: 'POST',
      data: story,
      success(res) {
        console.log(res)
        if (res.statusCode === 201 ) {
          wx.redirectTo({
            url: '/pages/stories/index',
          })
        } else {
          console.log(res)
          wx.showModal({
            title: 'Error!',
            content: res.data.errors.join('; '),
            showCancel: false
          })
        }
      },
      fail(res) {
        console.log("fails")
        console.log(res)
      }
    })
  }
})