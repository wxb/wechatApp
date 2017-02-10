# soccerGame

微信小程序公开以后，关于小程序的话题就非常火爆！趁着年假对小程序进行了简单的了解和学习。`soccerGame`这个小项目也属于学习练手的项目，模仿**肆客足球**APP的赛程
样式配合申请的**聚合数据**API提供的足球信息完成这个小程序

# 涉及小程序技术
* wxml、wxss页面相关知识
* 小程序发送网络请求API接口：wx.request
* 小程序数据绑定
* 小程序事件操作
* 小程序生命周期
* 小程序数据缓存（本地存储）

# 完成后app样式
![](https://github.com/wxb/wechatApp/blob/master/soccerGame/image/01.jpg)
![](https://github.com/wxb/wechatApp/blob/master/soccerGame/image/02.jpg)
![](https://github.com/wxb/wechatApp/blob/master/soccerGame/image/3.jpg)

# 开发总结
* 转变传统开发思维，比如在使用`this.setData()`数据绑定，和我们传统web开发直接操作DOM有所不同、事件操作时传递参数都和传统开发方式有所不同
* 代码组织形式，小程序目前对文件目录结构进行了相关的要求，但是这种要求对我们组织代码结构并不是特别友好，需要对小程序进行深入研究，完成一套开发友好的代码组织模式
* js功底要求，小程序完全使用js开发，对ES6也兼容；所以如果想要快速开发，还是需要有不错的js功底

小程序开发总体来说入门要求不是特别高，主要是转变传统开发理念和对js精通很重要！
