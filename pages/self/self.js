// pages/self/self.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    certificationOk: null,
  },
  onPullDownRefresh: function () {
    utils.getUserData();
    wx.stopPullDownRefresh()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    utils.getUserData();
    that.setData({
      userInfo: app.globalData.userInfo,
      certificationOk: app.globalData.certificationOk,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    if (that.data.userInfo) {
      if (that.data.certificationOk == 0) {
        wx.showModal({
          title: '认证提醒',
          content: '您还没有认证',
          cancelText: "下次再说",
          cancelColor: "",
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '../toAuth/toAuth',
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }

    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    console.log(that + "==================")
    utils.checkSettingStatu(that);
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  completeMessage: function() {
    wx.navigateTo({
      url: '../messageForm/messageform',
    })
  },

  login: function () {
    //认证信息及个人信息切换
    var that = this;
    if (that.data.certificationOk == 2) {
      //个人信息页面
      wx.navigateTo({
        url: '../selfInfo/selfInfo',
      })
    } else {
      //去认证页面
      wx.navigateTo({
        url: '../toAuth/toAuth',
      })
    }

  },

  openAccount: function (event) {
    //打开我的账户
    wx.navigateTo({
      url: '../myAccount/myAccount',
    })
  },

  openOpinion: function () {
    //打开意见反馈
    wx.navigateTo({
      url: '../opinion/opinion',
    })
  },

  aboutUs: function () {
    //打开关于我们
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
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