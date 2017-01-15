// pages/api/api.js
Page({
  data:{
    urlMap:[
      {title:'网络', url:'../home/index'},
      {title:'媒体', url:'../home/index'},
      {title:'文件', url:'../home/index'},
      {title:'数据缓存', url:'../home/index'},
      {title:'位置', url:'../home/index'},
      {title:'设备', url:'../index/index'},
      {title:'界面', url:'page/page'},
      {title:'开发接口', url:'../index/index'}
    ]
  },
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
  }
})