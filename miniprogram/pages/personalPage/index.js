//index.js 
//获取应用实例 
const app = getApp() 
 
Page({ 
  data: {
    StatusBar: app.globalData.StatusBar, 
    CustomBar: app.globalData.CustomBar, 
    userInfo: {}, 
    hasUserInfo: false, 
    canIUse: wx.canIUse('button.open-type.getUserInfo') 
  },
  
  onLoad: function () { 
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
  onShow: function() { 

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
}) 