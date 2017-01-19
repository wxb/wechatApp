// pages/todo/todo.js

var util = require('../../utils/util.js')

Page({
  data:{
    input: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    this.refreshData()
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  refreshData:function(){
    var undoneList = wx.getStorageSync('undone') || []
    var doneList = wx.getStorageSync('done') || []
    this.setData({'undone':undoneList, 'done':doneList})
  },
  setItem:function(event){
    var _this = this;
    var one = {key:Date.now(), content:event.detail.value};
    var undone = wx.getStorageSync('undone') || []
    undone.unshift(one)
    wx.setStorage({
      key: 'undone',
      data: undone,
      success: function(){
        wx.showToast({
          title: '成功',
          icon: 'success'
        })
      },
      fail: function(){
        wx.showToast({
          title: '失败',
          icon: 'fail'
        })
      },
      complete: function(){
        _this.setData({'input':''})
        _this.refreshData()
      }
    })
  },

  finishItem:function(e){
    var _this = this;
    var status = e.detail.value;
    if(true == status){
      var rmKey = e.currentTarget.dataset.key
      var undone = wx.getStorageSync('undone') || []
      var done = wx.getStorageSync('done') || []
      for(var i=0;i<undone.length;i++){
        if(rmKey == undone[i].key){
          var one = undone[i]
          done.unshift(one)
          undone.splice(i, 1)
          wx.setStorageSync('done', done)
          wx.setStorage({
            key: 'undone',
            data: undone,
            success: function(){
              wx.showToast({
                title: '成功',
                icon: 'success'
              })
            },
            fail: function(){
              wx.showToast({
                title: '失败',
                icon: 'fail'
              })
            },
            complete: function(){
              _this.refreshData()
            }
          })
        }
      }
    }
  },

  activateItem:function(e){
    var _this = this;
    var status = e.detail.value;
    if(true == status){
      var rmKey = e.currentTarget.dataset.key
      var undone = wx.getStorageSync('undone') || []
      var done = wx.getStorageSync('done') || []

      for(var i=0;i<done.length;i++){
        if(rmKey == done[i].key){
          var one = done[i]
          undone.unshift(one)
          done.splice(i, 1)
          wx.setStorageSync('done', done)
          wx.setStorage({
            key: 'undone',
            data: undone,
            success: function(){
              wx.showToast({
                title: '成功',
                icon: 'success'
              })
            },
            fail: function(){
              wx.showToast({
                title: '失败',
                icon: 'fail'
              })
            },
            complete: function(){
              _this.refreshData()
            }
          })
        }
      }
    }
  },

  clearStorage: function(e){
    try {
        wx.clearStorageSync()
        this.refreshData()
        wx.showToast({
          title: '清空完成',
          icon: 'success'
        })
    } catch(e) {
      // Do something when catch error
      wx.showToast({
        title: '清空失败',
        icon: 'fail'
      })
    }
  },

})