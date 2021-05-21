// app.js
App({
  onLaunch() {
    // this.isLogin()
  },
  isLogin () {
    let token = wx.getStorageSync('token')
    if (token) {
      wx.switchTab({
        url: '/pages/index/index',
      })
    } else {
      wx.reLaunch({
        url: '/pages/login/login',
      })
    }
  },
  
  globalData: {
    host: "https://api.xixunyun.com",
    commonQueryData: 'from=app&version=4.4.9&platform=android&entrance_year=0&graduate_year=0&school_id=924'
  }
})
