// pages/lab/share/share.js

var app = getApp()

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
    console.log(getCurrentPages());
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onShareAppMesage: function(){
    return {
      title: '分享功能页面',
      desc: '分享信息内描述',
      path: '/lab/share/share?id=1001'
    }
  }
})
