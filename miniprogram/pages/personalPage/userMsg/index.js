// miniprogram/pages/personalPage/userMsg/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    buttons: [
      {
          type: 'primary',
          className: '',
          text: '教员',
          value: 1
      },
      {
          type: 'default',
          className: '',
          text: '学员',
          value: 0
      }
    ],
    userInfo: null,
    ezlUserInfo: null,
  },

  open: function () {
    this.setData({
        show: true
    })
  },

  buttontap(e) {
    if (e.detail.index == 0) {
      wx.navigateTo({
        url: '../../home/chooseIdentity/teacher'
      })
    } else {
      wx.navigateTo({
        url: '../../home/chooseIdentity/student'
      })
    }
      console.log(e.detail)
  },

  toCompleteInfo: function() {
    wx.navigateTo({
      url: '../completeInfo/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({userInfo: app.globalData.userInfo});
    this.setData({ezlUserInfo: app.globalData.ezlUserInfo});
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