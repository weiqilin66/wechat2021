{
  "pages": [
    "pages/index/index",
    "pages/category/index",
    "pages/goods_list/index",
    "pages/goods_detail/index",
    "pages/cart/index",
    "pages/collect/index",
    "pages/order/index",
    "pages/search/index",
    "pages/user/index",
    "pages/feedback/index",
    "pages/login/index",
    "pages/auth/index",
    "pages/pay/index"
  ],
  "style": "v2",
# 配置下面标题栏
  "tabBar": {  
    "color": "#999",//默认颜色
    "selectedColor": "#ff2d4a", //选择的颜色
    "backgroundColor": "#fafafa",
    "position": "bottom",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "icons/home.png",
        "selectedIconPath": "icons/home-o.png"

      },
      {
        "pagePath": "pages/category/index",
        "text": "分类",
        "iconPath": "icons/menu.png",
        "selectedIconPath": "icons/menu-o.png"

      },
      {
        "pagePath": "pages/cart/index",
        "text": "购物车",
        "iconPath": "icons/cart.png",
        "selectedIconPath": "icons/cart-o.png"

      },
      {
        "pagePath": "pages/user/index",
        "text": "我的",
        "iconPath": "icons/my.png",
        "selectedIconPath": "icons/my-o.png"

      }
    ]
  },
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#eb4450",//顶部窗口颜色
    "navigationBarTitleText": "我是标题",
    "navigationBarTextStyle": "white" //顶部标题字体颜色
  }
}
