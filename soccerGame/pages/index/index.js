//index.js

// 引入配置 
var config = require('../../config.js');
//获取应用实例
var app = getApp()
var apiUrl = config.API_URL;
var apiKey = config.API_KEY;

Page({
  data: {},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.info('onLoad------');
  },
  onReady:function(){
    // 页面渲染完成
    console.info('onReady------');
  },
  onShow:function(){
    // 页面显示
    console.info('onShow------');
    this.requestApi('中超');
  },
  onHide:function(){
    // 页面隐藏
    console.info('onHide------');
  },
  onUnload:function(){
    // 页面关闭
    console.info('onUnload------');
  },

  requestApi:function(club){
    wx.request({
      url: apiUrl.footballApi,
      data: {
        'key': apiKey.footballKey,
        'league': club
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type':'application/json'
      }, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data)
      },
      fail: function() {
        // fail
        console.error('ERROR')
      },
      complete: function() {
        // complete
        console.info('Complete')
      }
    })
  }

})
