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
      url: '../home/index'
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
  }
})
