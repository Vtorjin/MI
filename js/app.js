/**
 * @param Data:获取ajax模块的数据 getdata(method,url) 参数：ajax的获取方式,获取地址
 * @param auto:自动完成模块的功能 auto(dom,data)
 * @param ato: 轮播图板块的功能  banner(dom,data) 参数:图片地址
 * @param lazyLoad:懒加载模块功能   传一张默认图片即可
 * @param dom:动态创建dom节点模块(因为数据量的大，使用的是最初的html结构)
 * @param Tab:tab切换模块 需要获取后台数据
 * **/

import * as Data from "./getData.js";
import * as Tab from "./choiceMenu.js";
import * as auto from "./autoComplete.js";
import * as other from "./other.js";

Data.getData("GET", "https://vtorjin.github.io/rayge/json/sort.json", "sort")
  .then((data) => {
    auto.autoComplete(".logNav_search", data);
    return Data.getData(
      "GET",
      "https://vtorjin.github.io/rayge/json/choice.json",
      "datas"
    );
  })
  .then((data) => {
    Tab.tab(data);
  })
  .catch((reason) => {
    console.warn(reason);
  });

other.default.back.handle();
other.default.countime.start();
other.default.animation.hover();
other.default.lazyLoad.init("./img/default.jpg");
other.default.carousel.render();
var timer = null;
document.body.onscroll = function () {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    other.default.lazyLoad.loadAll();
  }, 500);
  // 返回顶部
  other.default.back.scroll();
};
