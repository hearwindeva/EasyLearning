// pages/messageForm/messageform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade: [['小学','初中','高中'],[]],
    gradeIndex: [0,0],
    c: -1,
    v: -1,
  },

  stageChange: function (e) {

    var data = {
      grade: this.data.grade,
      gradeIndex: this.data.gradeIndex,
      c: e.detail.column,
      v: e.detail.value
    };
    data.gradeIndex[e.detail.column] = e.detail.value;
    if (e.detail.column == 0) {
      switch (data.gradeIndex[0]) {
        case 0:
          data.grade[1] = ['一年级','二年级','三年级','四年级','五年级','六年级'];
          break;
        case 1:
          data.grade[1] = ['初一','初二','初三'];
          break;
        case 2:
          data.grade[1] = ['高一','高二','高三'];
          break;
      }
      data.gradeIndex[1] = 0;
    }
    
    this.setData(data);
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
    this.setData({'grade[1]': ['一年级','二年级','三年级','四年级','五年级','六年级']});
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