// miniprogram/pages/personalPage/completeInfo/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    changeUserInfo: {}
  },

  test: function() {
    wx.login({
      timeout: 5000,
      success: (res) => {
        wx.request({
          url: 'http://39.107.238.42:8080/user/login',
          data: {
            code: res.code
          },
        })
        this.setData({testcode: res.code})
      }
    })
  },

  toCompleteInfo: function(e) {
    var tempSex = null;
    if(e.detail.value.user_sex) {
      tempSex = "女"
    } else {
      tempSex = "男"
    }
    this.setData({
      changeUserInfo: {
        user_id: app.globalData.ezlUserInfo.user_id,
        sb: app.globalData.ezlUserInfo.sb,
        user_real_name: e.detail.value.user_real_name,
        user_sex: tempSex,
        user_id_card: e.detail.value.user_id_card,
        user_tel: e.detail.value.user_tel,
        user_email: e.detail.value.user_email,
        user_QQ: e.detail.value.user_QQ,
      }
    })
    console.log(this.data.changeUserInfo)
    wx.request({
      url: 'https://a.mcbbs.city:80/updateUser',
      method: "PUT",
      dataType: "json",
      data: this.data.changeUserInfo,
      success: function(res) {
        
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({changeUserInfo: app.globalData.ezlUserInfo})
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