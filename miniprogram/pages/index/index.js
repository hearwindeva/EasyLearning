// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    PageCur: 'home'
  },

  onLoad: function() {
    wx.login({
      timeout: 5000,
      success: (res) => {
        //垃圾版登录 返回ezlUserInfo
        wx.request({
          url: 'https://a.mcbbs.city:80/user/login',
          data: {
            code: res.code
          },
          success: function(res) {
            console.log(res.data)
            app.globalData.ezlUserInfo = res.data
          }
        })
        console.log(res)
      }
    })
  },

  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    });
      console.log("导航栏被点击");
      console.log(this.data.PageCur);
  },
    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.PageCur=='community')
    {
      this.selectComponent('.community').onReachBottom();
      console.log("index上拉触底");
    }
  }
})
