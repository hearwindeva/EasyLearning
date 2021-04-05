// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    a1src:'../../image/a1.png',
    a2src: '../../image/a2.png',
    a3src: '../../image/a3.png',
    a4src: '../../image/a4.png',
    signupimg:'../../image/signup.png',
    imgsrc:'../../image/img4.jpg',
    iconsrc:'../../image/usercount.png',
    jtsrc:'../../image/icon-jt.png',
    imgUrls: [
      '../../image/2.jpg',
      '../../image/4.jpg',
      '../../image/5.jpg',
      '../../image/6.jpg',
      '../../image/7.jpg',
      '../../image/3.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list: [{
      "text": "首页",
      "iconPath": "../../image/home.png",
      "selectedIconPath": "../../image/homeactive.png"
    },
    {
      "text": "活动",
      "iconPath": "../../image/action.png",
      "selectedIconPath": "../../image/actionactive.png"
    },
    {
      "text": "我的",
      "iconPath": "../../image/selfCenter.png",
      "selectedIconPath": "../../image/selfCenter-selected.png"
    }]
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '教育模板首页',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功")
      },
      fail: function (res) {
        // 转发失败
        onsole.log("转发失败")
      }
    }
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
