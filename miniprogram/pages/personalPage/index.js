//index.js 
//获取应用实例 
const app = getApp() 
 
Component({ 
  data: {
    StatusBar: app.globalData.StatusBar, 
    CustomBar: app.globalData.CustomBar, 
    userInfo: {}, 
    hasUserInfo: false, 
    canIUse: wx.canIUse('button.open-type.getUserInfo') 
  },
  
  lifetimes: {
    attached: function () { 
      if (app.globalData.userInfo) { 
        this.setData({
          userInfo: app.globalData.userInfo, 
          hasUserInfo: true 
        })
      } else if (this.data.canIUse){ 
        app.userInfoReadyCallback = res => { 
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true 
          }) 
        }
      } else { 
        // 在没有 open-type=getUserInfo 版本的兼容处理 
        wx.getUserProfile({ 
          desc: "用于完善资料",
          success: res => { 
            app.globalData.userInfo = res.userInfo 
            this.setData({ 
              userInfo: res.userInfo, 
              hasUserInfo: true 
            }) 
          } 
        }) 
      } 
    },
  },

  methods: {
    toContactUs: function() {
      wx.navigateTo({
        url: '/pages/personalPage/contactUs/index',
      })
    },

    toMyEvaluation: function() {
      wx.navigateTo({
        url: '/pages/personalPage/myEvaluation/index',
      })
    },

    toMyVoucher: function() {
      wx.navigateTo({
        url: '/pages/personalPage/myVoucher/index',
      })
    },

    toRecharge: function() {
      wx.navigateTo({
        url: '/pages/personalPage/recharge/index',
      })
    },

    toContactCS: function() {
      wx.navigateTo({
        url: '/pages/personalPage/contactCS/index',
      })
    },

    toContactManager: function() {
      wx.navigateTo({
        url: '/pages/personalPage/contactManager/index',
      })
    },

    toAboutUs: function() {
      wx.navigateTo({
        url: '/pages/personalPage/aboutUs/index',
      })
    },

    getUserProfile: function(e) { 
      console.log(e) 
      wx.getUserProfile({ 
        desc: "用于完善资料",
        fail: res => {
          console.log("sb")
        },
        success: (res) => { 
          app.globalData.userInfo = res.userInfo
          console.log(app.globalData.userInfo)
          this.setData({ 
            userInfo: res.userInfo, 
            hasUserInfo: true 
          })
        }
      })
    }
  }
}) 