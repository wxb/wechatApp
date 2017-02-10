//index.js

// 引入配置 
var config = require('../../config.js');
//获取应用实例
var app = getApp()
var apiUrl = config.API_URL;
var apiKey = config.API_KEY;
var league = config.LEAGUE;
var logoMap= config.LOGO_MAP;
var iconMap= config.ICON_MAP;
var selected = '中超';
var logo = logoMap[selected];
Page({
  data: {
    league: league,
    logo: logo,
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
        let saicheng1 = res.data.result.views.saicheng1;
        let saicheng2 = res.data.result.views.saicheng2;
        for(let i=0; i<saicheng1.length; i++){
          saicheng1[i].round = res.data.result.tabs.saicheng1;
          saicheng1[i].c4T1Logo = iconMap[logoMap[selected]][saicheng1[i]['c4T1']];
          saicheng1[i].c4T2Logo = iconMap[logoMap[selected]][saicheng1[i]['c4T2']];
        }
        for(let i=0; i<saicheng2.length; i++){
          saicheng2[i].round = res.data.result.tabs.saicheng2;
          saicheng2[i].c4T1Logo = iconMap[logoMap[selected]][saicheng2[i]['c4T1']];
          saicheng2[i].c4T2Logo = iconMap[logoMap[selected]][saicheng2[i]['c4T2']];
        }
        let list = saicheng1.concat(saicheng1, saicheng2);
        console.info(list);
        _this.setData({
          logo: logoMap[selected],
          game: list,
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
