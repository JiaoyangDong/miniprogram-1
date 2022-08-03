// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    stories: [
      {author: "zora", title: "Why won't my title center?"},
      {author:"zora", title: "css override is driving me crazy"},
      {author:"Aggy", title: "Wechat devtool is not behaving."},
      {author:"Lilian", title: "!%s^&W2i...."},
      {author:"Lilian", title: "!%s^&W2i...."}
    ]
  }
})
