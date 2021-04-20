// miniprogram/pages/personalPage/recharge/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    changeUserInfo: {},
    chooseIndex: -1,
    checkbox: [{
      value: 0,
      change: 6,
      name: '6 S币',
      tip: '售价 6元',
      checked: false,
      hot: false,
    }, {
      value: 1,
      change: 18,
      name: '18 S币',
      tip: '售价 18元',
      checked: false,
      hot: false,
    }, {
      value: 2,
      change: 30,
      name: '30 S币',
      tip: '售价 30元',
      checked: false,
      hot: true,
    }, {
      value: 3,
      change: 128,
      name: '128 S币',
      tip: '售价 128元',
      checked: false,
      hot: true,
    }, {
      value: 4,
      change: 328,
      name: '328 S币',
      tip: '售价 328元',
      checked: false,
      hot: false,
    }, {
      value: 5,
      change: 648,
      name: '648 S币',
      tip: '售价 648元',
      checked: false,
      hot: false,
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

  //TODO:这地方打印不出来
  confirmRecharge: function() {
    console.log(this.data.checkbox[this.data.chooseIndex].change)
    this.setData({
      changeUserInfo: {
        user_id: app.globalData.ezlUserInfo.user_id,
        sb: app.globalData.ezlUserInfo.sb + this.data.checkbox[this.data.chooseIndex].change,
        user_real_name: app.globalData.ezlUserInfo.user_real_name,
        user_sex: app.globalData.ezlUserInfo.user_sex,
        user_id_card: app.globalData.ezlUserInfo.user_id_card,
        user_tel: app.globalData.ezlUserInfo.user_tel,
        user_email: app.globalData.ezlUserInfo.user_email,
        user_QQ: app.globalData.ezlUserInfo.user_QQ,
      }
    })
    wx.request({
      url: 'https://a.mcbbs.city:80/updateUser',
      method: "PUT",
      dataType: "json",
      data: this.data.changeUserInfo,
      success: function(res) {
        console.log(res.data)
      }
    })
    console.log("chooseIndex: %i", this.data.chooseIndex);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      changeUserInfo: app.globalData.ezlUserInfo
    })
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