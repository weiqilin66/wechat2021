// pages/menu/index.js
// 引入函数
import { request } from "../../request/index.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        leftMenuList:[],
        rightContent:[],
        //被点击的左侧菜单
        currentIndex:0

    },
    // 接口返回数据
    cates:[],

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getMenuList();
    },
    // e事件源
    handleItemTap(e){
        console.log(111);
        // 1获取被点击的标题身上的索引
        const {index} = e.currentTarget.dataset;
        console.log(index);
        this.setData({
            currentIndex:index
        })

        // 2给currentIndex赋值
    },
/*获取菜单数据 */
    getMenuList() {
        request({
        url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'
        }).then(res => {
            this.cates = res.data.message;
         //构造菜单数据
         let leftMenuList = this.cates.map(v=>v.cat_name);
         console.log("左侧菜单===>",leftMenuList);
         let rightContent = this.cates[0].children;
         this.setData({
             leftMenuList,
             rightContent
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