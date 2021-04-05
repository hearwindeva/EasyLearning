// pages/messageForm/messageform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [{
      url: '',
    }, {
      loading: true
    }, {
      error: true
    }],
  },

  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            that.setData({
                files: that.data.files.concat(res.tempFilePaths)
            });
        }
    })
  },
  previewImage: function (e) {
      wx.previewImage({
          current: e.currentTarget.id, // 当前显示图片的http链接
          urls: this.data.files // 需要预览的图片http链接列表
      })
  },
  selectFile(files) {
      console.log('files', files)
      // 返回false可以阻止某次文件上传
  },
  uplaodFile(files) {
      console.log('upload files', files)
      // 文件上传的函数，返回一个promise
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              reject('some error')
          }, 1000)
      })
  },
  uploadError(e) {
      console.log('upload error', e.detail)
  },
  uploadSuccess(e) {
      console.log('upload success', e.detail)
  },
  stageChange: function (e) {
    var data = {
      grade: this.data.grade,
      gradeIndex: this.data.gradeIndex,
      c: e.detail.column,
      v: e.detail.value
    };
    data.gradeIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.setData({'grade[1]': ['一年级','二年级','三年级','四年级','五年级','六年级']});
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

Component({
  data: {
      showOneButtonDialog: false,
      oneButton: [{text: '确定'}],
      showTopTips: false,
      classRadio: [{
              name: '文化课',
              value: '0'
          },
          {
              name: '兴趣课',
              value: '1'
          },
          {
              name: '其他',
              value: '2'
          }
      ],
      //学历选择
      gradeRadio: [{
              name: '小学',
              value: '0',
              checked: true
          },
          {
              name: '初中',
              value: '1'
          },
          {
              name: '高中',
              value: '2',
          }
      ],
      //授课科目
      courseCheckBox: [{
              name: '语文',
              value: '0',
              checked: true
          },
          {
              name: '数学',
              value: '1'
          },
          {
              name: '英语',
              value: '2'
          }
      ],
      //授课方式
      teachWaysCheckBox: [{
              name: '网络授课',
              value: '0',
              checked: true
          },
          {
              name: '线下授课',
              value: '1'
          }
      ],

      date: "2016-09-01",
      time: "12:01",
      //区码
      countryCodes: ["+86", "+80", "+84", "+87"],
      countryCodeIndex: 0,

      sex: ["不限", "男", "女"],
      sexIndex: 0,

      isAgree: false,
      formData: {

      },
      rules: [{
          name: 'classRadio',
          rules: {
              required: true,
              message: '课程类型是必选项'
          },
          name: 'gradeRadio',
          rules: {
              required: true,
              message: '学历是必选项'
          },
      }, {
          name: 'courseCheckBox',
          rules: {
              required: true,
              message: '授课科目是必选项'
          },
      }, {
          name: 'teachWaysCheckBox',
          rules: {
              required: true,
              message: '授课方式是必选项'
          },
      }, {
          name: 'mobile',
          rules: [{
              required: true,
              message: 'mobile必填'
          }, {
              mobile: true,
              message: 'mobile格式不对'
          }],
      }, ]
  },
  methods: {
      classRadioChange: function (e) {
          console.log('课程类型radio发生change事件，携带value值为：', e.detail.value);

          var radioItems = this.data.classRadio;
          for (var i = 0, len = radioItems.length; i < len; ++i) {
              radioItems[i].checked = radioItems[i].value == e.detail.value;
          }

          this.setData({
              radioItems: radioItems,
              [`formData.classRadio`]: e.detail.value
          });
          if (e.detail.value == 1) {
              this.setData({
                  courseIsCultrue: 'false'
              })
              this.setData({
                  courseCheckBox: [{
                          name: '音乐',
                          value: '0',
                          checked: true
                      },
                      {
                          name: '美术',
                          value: '1'
                      },
                      {
                          name: '体育',
                          value: '2'
                      }
                  ]
              });
          }else if(e.detail.value == 0){
              this.setData({
                  courseIsCultrue: 'true'
              })
              this.setData({
                  courseCheckBox: [{
                          name: '语文',
                          value: '0',
                          checked: true
                      },
                      {
                          name: '数学',
                          value: '1'
                      },
                      {
                          name: '英语',
                          value: '2'
                      }
                  ]
              });
          }else if(e.detail.value == 2){
              this.setData({
                  courseIsCultrue: 'false'
              })
              this.setData({
                  courseCheckBox: []
              });
          }
      },
      gradeRadioChange: function (e) {
          console.log('radio发生change事件，携带value值为：', e.detail.value);

          var radioItems = this.data.gradeRadio;
          for (var i = 0, len = radioItems.length; i < len; ++i) {
              radioItems[i].checked = radioItems[i].value == e.detail.value;
          }

          this.setData({
              radioItems: radioItems,
              [`formData.gradeRadio`]: e.detail.value
          });
          if (e.detail.value != 0) {
              this.setData({
                  courseCheckBox: [{
                          name: '语文',
                          value: '0',
                          checked: true
                      },
                      {
                          name: '数学',
                          value: '1'
                      },
                      {
                          name: '英语',
                          value: '2'
                      }, {
                          name: '物理',
                          value: '3',
                      },
                      {
                          name: '化学',
                          value: '4'
                      },
                      {
                          name: '生物',
                          value: '5'
                      }, {
                          name: '政治',
                          value: '6',
                      },
                      {
                          name: '历史',
                          value: '7'
                      },
                      {
                          name: '地理',
                          value: '8'
                      }
                  ]
              });
          }
          else {
              this.setData({
                  courseCheckBox: [{
                          name: '语文',
                          value: '0',
                          checked: true
                      },
                      {
                          name: '数学',
                          value: '1'
                      },
                      {
                          name: '英语',
                          value: '2'
                      }
                  ]
              });
          }
      },
      courseCheckBoxChange: function (e) {
          console.log('checkbox发生change事件，携带value值为：', e.detail.value);

          var checkboxItems = this.data.courseCheckBox,
              values = e.detail.value;
          for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
              checkboxItems[i].checked = false;

              for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                  if (checkboxItems[i].value == values[j]) {
                      checkboxItems[i].checked = true;
                      break;
                  }
              }
          }

          this.setData({
              checkboxItems: checkboxItems,
              [`formData.checkbox`]: e.detail.value
          });
      },

      teachWaysCheckBoxChange: function (e) {
          console.log('checkbox发生change事件，携带value值为：', e.detail.value);

          var checkboxItems = this.data.teachWaysCheckBox,
              values = e.detail.value;
          for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
              checkboxItems[i].checked = false;

              for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                  if (checkboxItems[i].value == values[j]) {
                      checkboxItems[i].checked = true;
                      break;
                  }
              }
          }

          this.setData({
              checkboxItems: checkboxItems,
              [`formData.checkbox`]: e.detail.value
          });
      },
      bindDateChange: function (e) {
          this.setData({
              date: e.detail.value,
              [`formData.date`]: e.detail.value
          })
      },
      formInputChange(e) {
          const {
              field
          } = e.currentTarget.dataset
          this.setData({
              [`formData.${field}`]: e.detail.value
          })
      },
      bindTimeChange: function (e) {
          this.setData({
              time: e.detail.value
          })
      },
      bindCountryCodeChange: function (e) {
          console.log('picker country code 发生选择改变，携带值为', e.detail.value);

          this.setData({
              countryCodeIndex: e.detail.value
          })
      },
      bindPhoneNumberChange: function (e) {
          console.log('picker 手机号 发生选择改变，携带值为', e.detail.value);

          this.setData({
              phoneNumberIndex: e.detail.value
          })
      },
      bindSexChange: function (e) {
          console.log('picker sex 发生选择改变，携带值为', e.detail.value);

          this.setData({
              sexIndex: e.detail.value
          })
      },
      bindAgreeChange: function (e) {
          this.setData({
              isAgree: !!e.detail.value.length
          });
      },
      submitForm() {
        this.setData({
          showOneButtonDialog: true
        })
      },
      tapDialogButton(e) {
        this.setData({
            showOneButtonDialog: false
        })
      },
  }
})