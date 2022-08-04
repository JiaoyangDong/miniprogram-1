// pages/stories/stories.js
const app = getApp()
Page({

  data: {
  },

  onLoad(options) {
    console.log("load")
    // static data: 
    // const stories  = app.globalData.stories
    // this.setData({stories: stories})
    let page = this
    wx.request({
      url: "http://localhost:3000/api/v1/stories",
      method: "GET",
      success(res) {
        // console.log(res)
        const stories = res.data
        page.setData({
          stories: stories
        })
      }
    })
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    console.log("ready")
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    console.log("show")
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {
    console.log("hide")
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {
    console.log("unload")
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
    console.log("read bottom")
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },
  goToStory(e) {
    // console.log('function goToStory e', e)
    // const story = this.data.stories[e.currentTarget.dataset.index]
    // console.log({story})
    wx.navigateTo({
      url: `/pages/stories/show?index=${e.currentTarget.dataset.index}`,
    })
  }
})