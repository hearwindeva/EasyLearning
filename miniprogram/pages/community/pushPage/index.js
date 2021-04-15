// pages/community/PushPage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCount :4,
    cardData: [{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://img2.huashi6.com/images/resource/2013/01/24/h33059400p0.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
      }, {
        id: 1,
        type: 'image',
        url: 'https://img2.huashi6.com/images/resource/2020/07/02/h82706328p1.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
      }, {
        id: 2,
        type: 'image',
        url: 'https://img2.huashi6.com/images/resource/2015/04/25/5000h7268p0.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
      }],
    },{
      Icon:'',
      name:'',
      description:'',
      text: '',
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
      }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
      }],
    }],
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://img2.huashi6.com/images/resource/2013/01/24/h33059400p0.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
    }, {
      id: 1,
      type: 'image',
      url: 'https://img2.huashi6.com/images/resource/2020/07/02/h82706328p1.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
    }, {
      id: 2,
      type: 'image',
      url: 'https://img2.huashi6.com/images/resource/2015/04/25/5000h7268p0.jpg?imageView2/3/q/100/interlace/1/w/1600/h/1600/format/webp'
    }]
  },   
  gridCol: 3,
  skin: false,
isCard(e) {
  this.setData({
    isCard: e.detail.value
  })
},
  ToDetailPage: function (event) {
    //打开我要请家教
    wx.navigateTo({
      url: '/pages/community/detail/index',
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
    var addCardCount = 4;
    var newCardCount = this.data.cardCount+addCardCount;
    this.setData({
      cardCount: newCardCount
    });
    console.log('页面划到底端XXXXX');
    console.log(this.data.cardCount);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})