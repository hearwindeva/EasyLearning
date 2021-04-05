// pages/community/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topPic: '../../image/communitypage/topPic.png',
        tipcount:1,
        show: true,
        morebtn:'../../image/communitypage/morebtn.png',
        subscriptbtn:'../../image/communitypage/subscriptbtn.png',
        tipList:[{
            tipInfoData: {
                bigPic: '../../image/communitypage/bigPic1.png',
                headIcon: '../../image/communitypage/headIcon1.jpg',
            }
        },{
            tipInfoData: {
                bigPic: '../../image/communitypage/bigPic2.png',
                headIcon: '../../image/communitypage/headIcon2.jpg',
            }
        },{
            tipInfoData: {
                bigPic: '../../image/communitypage/bigPic3.png',
                headIcon: '../../image/communitypage/headIcon3.jpg',
            }
        }],
        tipList2:[{
            tipInfoData: {
                bigPic: '../../image/communitypage/bigPic1.png',
                headIcon: '../../image/communitypage/headIcon1.jpg',
            }
        },{
            tipInfoData: {
                bigPic: '../../image/communitypage/bigPic2.png',
                headIcon: '../../image/communitypage/headIcon2.jpg',
            }
        },{
            tipInfoData: {
                bigPic: '../../image/communitypage/bigPic3.png',
                headIcon: '../../image/communitypage/headIcon3.jpg',
            }
        }],
        tipList3:[{
            tipInfoData: {
                bigPic: '../../image/communitypage/bigPic1.png',
                headIcon: '../../image/communitypage/headIcon1.jpg',
            }
        },{
            tipInfoData: {
                bigPic: '../../image/communitypage/bigPic2.png',
                headIcon: '../../image/communitypage/headIcon2.jpg',
            }
        },{
            tipInfoData: {
                bigPic: '../../image/communitypage/bigPic3.png',
                headIcon: '../../image/communitypage/headIcon3.jpg',
            }
        }],
    },
    change(e) {
        console.log('current index has changed', e.detail)
    },
    delete(e) {
        console.log('delete', e.detail)
    },
    hide() {
        console.log('component hide')
        setTimeout(() => {
            console.log('component show')
            this.setData({
                show: true
            })
        }, 1000)
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
        var newtipList = this.data.tipList.concat(this.data.tipList);
        var value = this.data.tipcount+1;
        this.setData({
            tipList:newtipList
          });
        console.log(this.data.tipList);
        console.log(this.data.tipcount);
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})