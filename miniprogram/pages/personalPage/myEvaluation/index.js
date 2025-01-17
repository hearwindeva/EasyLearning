// miniprogram/pages/personalPage/myEvaluation/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasOrder: true,
    chooseIndex: -1,
    checkbox: [{
      value: 0,
      name: '好评',
      checked: false,
      hot: false,
    }, {
      value: 1,
      name: '中评',
      checked: false,
      hot: false,
    }, {
      value: 2,
      name: '差评',
      checked: false,
      hot: true,
    }]
  },

  ChooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    let tempIndex = this.chooseIndex;
    for (let i = 0, lenI = items.length; i < lenI; i++) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;

        if (items[i].checked)
          tempIndex = items[i].value;
        else
          tempIndex = -1;
      } else
        items[i].checked = false;
    }
    this.setData({
      checkbox: items,
      chooseIndex: tempIndex
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