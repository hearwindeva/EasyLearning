// pages/messageForm/messageform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOneButtonDialog: false,
    oneButton: [{text: '确定'}],
    radioItems: [
      {name: '男', value: '0', checked: true},
      {name: '女', value: '1'}
    ],
  },

  submitForm() {
    this.setData({
      showOneButtonDialog: true
    })
  },
  tapDialogButton(e) {
    this.setData({
        showOneButtonDialog: false
    })
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
    // this.setData({'grade[1]': ['一年级','二年级','三年级','四年级','五年级','六年级']});
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