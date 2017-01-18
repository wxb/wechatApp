// pages/api/request/request.js

var footballApi = require('../../../common/config.js').footballApi;

Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  makeReques:function(){
    console.log(footballApi);
    wx.request({
      url: footballApi,
      data: {
        'key': '70ce6c71bf84b4d2373496e3cc42c932',
        'league': '中超'
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