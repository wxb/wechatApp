//index.js

// 引入配置 
var config = require('../../config.js');
//获取应用实例
var app = getApp()
var apiUrl = config.API_URL;
var apiKey = config.API_KEY;
var league = config.LEAGUE;
var iconMap= config.ICON_MAP;
var selected = '西甲';
Page({
  data: {
    league: league,
    icon: iconMap,
    select: selected,
  },
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
    this.requestApi(selected);
  },
  onHide:function(){
    // 页面隐藏
    console.info('onHide------');
  },
  onUnload:function(){
    // 页面关闭
    console.info('onUnload------');
  },
  
  // 请求API获取联赛信息
  requestApi:function(club){
    wx.showNavigationBarLoading();
    var _this = this;
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
        console.log(res.data.result);
        _this.setData({
          game: res.data.result.views.saicheng1,
        });
        wx.hideNavigationBarLoading();
      },
      fail: function() { // fail
        wx.showModal({
          content: '数据请求失败！',
          confirmText: "确定",
          cancelText: "取消"
        });
      },
      complete: function() {
        // complete
        console.info('Complete')
      }
    })
  },

  // 选择联赛
  changeLeague: function(event){
    selected = event.target.dataset.targetLeague;
    this.setData({
      select: selected
    });
    // 请求API获取数据
    this.requestApi(selected); 
  }

})
