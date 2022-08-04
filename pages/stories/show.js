// pages/stories/show.js
// const app = getApp()

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
    // static data
    // const story = app.globalData.stories[Number.parseInt(options["index"], 10)]
    // console.log(story)
    console.log(options)

    let page = this
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${options.index}`,
      method: "GET",
      success(res){
        const story = res.data
        console.log(story)
        page.setData({
          story: story
        })
      }
    })
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

  }
})