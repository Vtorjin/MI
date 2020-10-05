/**
 * 开始图片懒加载
 * @param defaultImg 默认图片
 * @param dataset-origin  原始图片
 * 所有设置了dataset-src属性的图片都需要懒加载
 * @param 电梯导航
 */

export function lazyLoad(defaultImg) {
  var imgs = document.querySelectorAll("img[data-src]");
  imgs = Array.from(imgs);

  // 设置默认图片
  function setDefaultImg() {
    if (!defaultImg) {
      return;
    }

    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      img.src = defaultImg;
    }
  }

  // 加载一张图片
  function loadImg(img) {
    var rect = img.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= document.documentElement.clientHeight) {
      return false;
    }
    
    img.src = img.dataset.src;
    //  是否有原图
    if (img.dataset.origin) {
      img.onload = function () {
        img.src = img.dataset.origin;
        img.onload = null;
      };
    }

    return true;
  }

  // 加载所有图片
  function loadAllImgs() {
    for (var i = 0; i < imgs.length; i++) {
      // 需要存储
      var img = imgs[i];
      loadImg(img);
    }
    // 优化效率
    if (loadImg(img)) {
      imgs.splice(i, 1);
      i--;
    }
  }

  // 滚动事件
  var timer = null;
  document.body.onscroll = function () {
    console.log(1);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      loadAllImgs();
    }, 500);
  };

  setDefaultImg();
  loadAllImgs();
}
