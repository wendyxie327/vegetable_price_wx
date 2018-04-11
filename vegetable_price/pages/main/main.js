Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [
      { goods: { name: "白菜", assortment: "蔬菜", unit: "颗" }, price: { price: 1.02 } },
      { goods: { name: "萝卜", assortment: "蔬菜", unit: "颗" }, price: { price: 2.02 } }
    ],
    goodsListShow: [],
    errorMessage: "暂无数据",
    errorContentHide: true
  },
  /**
   * 设置Data中的goodsList数据
   */
  setGoodsListData: function (list, errMsg) {
    if (list == null || list.length == 0) {
      this.setData({
        errorMessage: errMsg,
        errorContentHide: false
      });
    } else {
      this.setData({
        goodsListShow: list,
        errorContentHide: true
      });
    }
  },

  /**
   * 监听输入内容：
   *  模糊查询菜名
   */
  searchInputListener: function (e) {
    var goodss = new Array();
    for (var i = 0; i < this.data.goodsList.length; i++) {
      if (this.data.goodsList[i].goods.name.indexOf(e.detail.value) != -1) {
        goodss.push(this.data.goodsList[i]);
      }
    }
    this.setGoodsListData(goodss, "请换个条件试试");
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    this.setGoodsListData(this.data.goodsList, "暂无数据");
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