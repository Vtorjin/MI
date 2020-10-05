export default {
  imgs: Array.from(document.querySelectorAll("img[data-src]")),
  init(defaultImg) {
    this.setDefault(defaultImg);
    this.loadAll(this.imgs);
  },
  setDefault(defaultImg) {
    if (!defaultImg) {
      return;
    }
    for (var i = 0; i < this.imgs.length; i++) {
      var img = this.imgs[i];
      img.src = defaultImg;
    }
  },
  loadImg(img) {
    var rect = img.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= document.documentElement.clientHeight) {
      return false;
    }
    img.src = img.dataset.src;
    // 是否加载原图
    if (img.dataset.origin) {
      img.onload = function () {
        img.src = img.dataset.origin;
        img.onload = null;
      };
    }

    return true; //是否已经加载过了
  },

  loadAll() {
    for (var i = 0; i < this.imgs.length; i++) {
      var img = this.imgs[i];
      this.loadImg(img);
    }

    if (this.loadImg) {
      this.imgs.splice(i, 1);
      i--;
    }
  },
};
