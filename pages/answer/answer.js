// pages/answer/answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feed: [
      {
        "question_id": 1,
        "answer_id": 3,
        "feed_source_id": 23,
        "feed_source_name": "Rebecca",
        "feed_source_txt": "赞了回答1",
        "feed_source_img": "../../images/icon1.jpeg",
        "question": "你是如何学会编程的？",
        "describe": "有人建议说学 Android APP 开发的，有说学 Java 的，有说学 iOS App 开发的，有说学HTML的，有说学 PHP 的，还有建议学 Python 的，到底该学哪个？买什么配置的笔记本电脑？",
        "answer_ctnt": "有个兰大的学妹私信我编程的经验，索性把写好的在粘贴一次吧。因为我知道当个好程序员的过程着实不容易。关于编程超有感触一次：当初上陈国良院士的并行算法课，那老头讲的深的不行，刷刷地调试程序看的我们这群土孩子都惊呆了，讲的好像挺好，反正我们也没听懂。后来那老头说：“想学好程序，编程，就一个办法，一个办法：猛的敲代码。这些东西你们现在看不懂，当初我也看不懂，那你要做的就是不断地敲程序，debug.然后量变引起质变，再回归理论。千万别试图妄想通过看看几本书，背熟了语法就想学会编程，看的再多都没有用，一般来说精通一门编程语言十万行有效代码，基本就可以动力定型了，熟悉的话至少需要三万行。有些算法，类（java有几千个现成的类供继承）, 前人栽树，我们后人乘凉就好了。我们需要记住的经典的算法，类是如何用的就行了，你不太可能再去设计出一种算法。因为技术大牛太多了，有些智商上的优越是你后天无论怎么努力也无法企及的。我们只要站在巨人的肩膀上够了。最起码就我身边案例来说年薪几十万没有问题的。说到底，编程是一门技术，需要的是练习，孰能生巧。现在中国大学教学方法，有的简直就是误人子弟，很容易走弯路。当然因为能力有限，所以我说的编程是叫你可以拿到年薪几十万甚至百万的软件开发工作，不是算法研究创新工作，不是自己去搞一个牛逼的算法出来。当然学习是一个痛苦的过程，学习编程更是，丘吉尔有一句话说的很好：重要的不是你喜欢做什么，而是要喜欢你正在做的事。既然选择了程序员这条路，那就且编且珍惜吧.",
        "good_num": "112",
        "comment_num": "18",
        "col_img": "../../images/star2.png",
        "time": "3天"
      }
    ],
    isFocus: false,
    isGood: false,
    isCollect: false,
    focus_text: "关注",
    good_num: "112"
  },
  focus: function (options) {
    console.log(options)
    let that = this;
    let isFocus = this.data.isFocus;
    if (!isFocus) { //关注
      that.setData({
        isFocus: true,
        focus_text: "已关注"
      })
      wx.showToast({
        title: '关注成功',
        icon: 'none'
      })
    }
    else{ //取消关注
      that.setData({
        isFocus: false,
        focus_text: "关注"
      })
      wx.showToast({
        title: '已取消赞同',
        icon: 'none'
      })
    }
  },
  good: function (options) {
    console.log(options)
    let that = this;
    let isGood = this.data.isGood;
    if (!isGood) { //点赞
      that.setData({
        isGood: true,
        good_num: "113"
      })
      wx.showToast({
        title: '赞同成功',
        icon: 'none'
      })
    }
    else{ //取消点赞
      that.setData({
        isGood: false,
        good_num: "112"
      })
      wx.showToast({
        title: '已取消赞同',
        icon: 'none'
      })
    }
  },
  collect: function (options) {
    console.log(options)
    let that = this;
    let isCollect = this.data.isCollect;
    if (!isCollect) { //收藏
      that.setData({
        isCollect: true,
      })
      wx.showToast({
        title: '收藏成功',
        icon: 'none'
      })
    }
    else{ //取消收藏
      wx.showModal({
        title: '确认',
        content: '您确认取消收藏吗?',
        success: (result) => {
          if(result.confirm){
            that.setData({
              isCollect: false,
            })
            wx.showToast({
              title: '已取消收藏',
              icon: 'none'
            })
          }
          else {

          }
        },
      });
      
    }
  },

  toQuestion: function () {
    wx.navigateTo({
      url: "../question/question"
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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