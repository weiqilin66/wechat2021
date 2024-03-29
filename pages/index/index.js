// 引入函数
import { request } from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    cateList:[],
    floorList:[],
   
    //模拟返回数据
    resp: {

      "message": [
        {
          "image_src": "https://api-hmugo-web.itheima.net/pyg/banner1.png",
          "open_type": "navigate",
          "goods_id": 129,
          "navigator_url": "/pages/goods_detail/index?goods_id=129"
        },
        {
          "image_src": "https://api-hmugo-web.itheima.net/pyg/banner3.png",
          "open_type": "navigate",
          "goods_id": 121,
          "navigator_url": "/pages/goods_detail/index?goods_id=121"
        },
        {
          "image_src": "https://api-hmugo-web.itheima.net/pyg/banner2.png",
          "open_type": "navigate",
          "goods_id": 122,
          "navigator_url": "/pages/goods_detail/index?goods_id=122"
        }
      ],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 原生发送异步请求 生产环境需要配置白名单域名 ,开发环境详情配置中修改不校验
    // wx.request({
    //   url: 'https://www.baidu.com',      
    //   success:(result)=>{
    //     console.log("request success");
    //     console.log(this.data.resp);
    //     // 修改data中的数据必须调用setData 
    //     this.setData({
    //       swiperList:this.data.resp.message
    //     })
    //   }     
    // })
    this.getSwiperList();
    this.getCateList();
    this.getfloorList();
  },
  /*获取轮播图 */
  getSwiperList() {
    // 封装后请求 防止原生请求的回调地狱
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    }).then(result => {
      this.setData({
        swiperList: result.data.message
      })
    })//后续请求继续then
  },
  /*获取导航栏数据 */
  getCateList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'
    }).then(result => {
      this.setData({
        cateList: result.data.message
      })
    })
  },
    /*获取导航栏数据 */
    getfloorList() {
      request({
        url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'
      }).then(result => {
        this.setData({
          floorList: result.data.message
        })
      })
    },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})