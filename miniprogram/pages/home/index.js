// miniprogram/pages/home/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft:0,
    navName: ["小学", "中学"],
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://img2.huashi6.com/images/resource/2021/04/05/889h40715p0.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
    }, {
      id: 1,
        type: 'image',
        url: 'https://img2.huashi6.com/images/resource/2019/07/02/755095h90p2.png?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp',
    }, {
      id: 2,
      type: 'image',
      url: 'https://img2.huashi6.com/images/resource/2019/07/02/755095h90p5.png?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
    }, {
      id: 3,
      type: 'image',
      url: 'https://img2.huashi6.com/images/resource/2019/07/02/755095h90p0.png?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
    }, {
      id: 4,
      type: 'image',
      url: 'https://img2.huashi6.com/images/resource/2019/07/02/755095h90p3.png?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
    }, {
      id: 5,
      type: 'image',
      url: 'https://img2.huashi6.com/images/resource/2019/08/19/7633h6892p0.png?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
    }, {
      id: 6,
      type: 'image',
      url: 'https://img2.huashi6.com/images/resource/2019/10/31/7755h9996p0.png?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
    }],
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
  },

  printInfo: function() {
    console.log(app.globalData.userInfo)
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