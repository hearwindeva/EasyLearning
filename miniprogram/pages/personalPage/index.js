//index.js 
//获取应用实例 
const app = getApp() 
 
Component({ 
  data: {
    show: false,
    buttons: [
      {
          type: 'primary',
          className: '',
          text: '教员',
          value: 1
      },
      {
          type: 'default',
          className: '',
          text: '学员',
          value: 0
      }
    ],
    StatusBar: app.globalData.StatusBar, 
    CustomBar: app.globalData.CustomBar, 
    userInfo: {}, 
    ezlUserInfo: {},
    hasUserInfo: false, 
    canIUse: wx.canIUse('button.open-type.getUserInfo') 
  },
  
  lifetimes: {

    attached: function () {
      if (app.globalData.userInfo) { 
        this.setData({
          userInfo: app.globalData.userInfo,
          ezlUserInfo: app.globalData.ezlUserInfo,
          hasUserInfo: true 
        })
      } else if (this.data.canIUse) { 
        app.userInfoReadyCallback = res => { 
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true 
          }) 
        }
      }
    },
  },

  methods: {
    open: function () {
      this.setData({
          show: true
      })
    },

    buttontap(e) {
      if (e.detail.index == 0) {
        wx.navigateTo({
          url: '../home/chooseIdentity/teacher'
        })
      } else {
        wx.navigateTo({
          url: '../home/chooseIdentity/student'
        })
      }
        console.log(e.detail)
    },

    toUserMsg() {
      wx.navigateTo({
        url: '../personalPage/userMsg/index',
      })
    },

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
      }),
      this.setData({ezlUserInfo: app.globalData.ezlUserInfo});
      // wx.login({
      //   timeout: 5000,
      //   success: (res) => {
      //     //垃圾版登录 返回ezlUserInfo
      //     wx.request({
      //       url: 'http://39.107.238.42:8080/user/login',
      //       data: {
      //         code: res.code
      //       },
      //       success: function(res) {
      //         console.log(res.data)
      //       }
      //     })
      //     console.log(res)
      //   }
      // })
    }
  }
}) 