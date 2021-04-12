Component({
  data: {
    selected: '',
    color: "#afafaf",
    selectedColor: "#6100ff",
    list: [{
      icon: "cuIcon-home",
      selectedIcon: "cuIcon-homefill",
      pagePath: "/pages/index/index",
      text: "首页"
    }, {
      icon: "cuIcon-community",
      selectedIcon: "cuIcon-communityfill",
      pagePath: "/pages/community/index",
      text: "社区"
    }, {
      icon: "cuIcon-my",
      selectedIcon: "cuIcon-myfill",
      pagePath: "/pages/personalPage/index",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})