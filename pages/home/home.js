// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2021/05',
    listData: {
      month: 5,
      revenue: 15224.4,
      expense: 6275.2,
      monthData: [
        {
          day: 1,
          dayData: [
            { name: '购物', price: 142, type: 0, time: '12:22' },
            { name: '美食', price: 522, type: 1, time: '11:24' },
            { name: '运动', price: 612, type: 1, time: '21:54' },
            { name: '网购', price: 21, type: 0, time: '22:21' },
          ]
        },{
          day: 2,
          dayData: [
            { name: '购物', price: 2142, type: 0, time: '12:22' },
            { name: '美食', price: 12, type: 1, time: '11:24' },
            { name: '运动', price: 600, type: 1, time: '21:54' }
          ]
        },{
          day: 3,
          dayData: [
            { name: '购物', price: 2142, type: 0, time: '12:22' },
            { name: '美食', price: 12, type: 1, time: '11:24' },
            { name: '运动', price: 600, type: 1, time: '21:54' }
          ]
        },
      ]
    }
      
    
  },

  /** 改变日期 */
  bindDateChange (e) {
    let date = e.detail.value
    this.setData({ date: date.replace(/[-]/g, "/") })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})