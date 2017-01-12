//index.js
//获取应用实例
var app = getApp()
var nameData = {
  name: '小勃'
}

Page({
  data: {
    motto: 'Hello',
    name: 'World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  changeName: function(e){
    this.setData(nameData)
  },
  redirectMyLab: function(){
    wx.navigateTo({
      url: '../view/view',
      success: function(res){
        // success
        console.log(res);
      },
      fail: function() {
        // fail
        console.info('fail');
      },
      complete: function() {
        // complete
        console.info('complete');
      }
    })
  },
  redirectHome: function(){
    wx.navigateTo({
      url: '../home/index',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
