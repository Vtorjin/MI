export default {
  // 电梯导航
  back: {
    flexList: document.querySelectorAll(".flexList li"),
    top: document.querySelector("header"),
    video: document.querySelector(".Info_video").offsetTop,
    mainTop: document.querySelector("main").offsetTop,
    mainLef: document.querySelector("main").offsetLeft,
    back: document.getElementById("back"),
    scroll() {
      if (window.scrollY > this.video) {
        back.style.visibility = "visible";
        back.style.backgroundColor = "#e0e0e0";
      } else {
        back.style.visibility = "hidden";
        back.style.backgroundColor = "transparent";
      }
    },
    handle() {
      this.back.addEventListener("click", () => {
        window.scrollTo(this.top.offsetLeft, this.top.offsetTop);
      });
      this.flexList[2].addEventListener("click", () => {
        window.scrollTo(this.mainLef, this.mainTop);
      });
    },
  },

  // 倒计时
  countime: {
    countDom: document.querySelector("#commodityList"),
    countTarget: document.querySelector(".round >span"),
    countTime: document.querySelector(".countTime"),
    // times: 4, //几个场次
    timer: null,
    start() {
      this.timer = setInterval(() => {
        this.count();
      }, 1000);
    },
    // count
    count() {
      let now = new Date();
      let h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds();
      m = 59 - (m % 60);
      s = 59 - (s % 60);

      if (h <= 7) {
        this.countTarget.innerHTML = `08:00&nbsp;场`;
      }
      if (h <= 15) {
        this.countTarget.innerHTML = `16:00&nbsp;场`;
      } else {
        this.countTarget.innerHTML = `00:00&nbsp;场`;
      }

      if (h === 0 && m === 0 && s === 0) {
        this.countTime.innerHTML = `<span class="hour">00</span><i>:</i><span
        class="min">00</span><i>:</i><span class="sec">00</span>`;
      }
      this.countTime.innerHTML = `
      <span class="hour">0${7 - (h % 8)}</span><i>:</i>
      <span class="min">${m < 10 ? "0" + m : m}</span><i>:</i>
      <span class="sec">${s < 10 ? "0" + s : s}</span>`;
    },
  },

  //图片添加移动效果
  animation: {
    main: document.querySelector("main"),
    ele: document.querySelectorAll(".commodityList"),
    spe: document.querySelectorAll(".commodity"),
    more: document.querySelectorAll(".commodities"),
    video: document.querySelectorAll(".video_list"),

    hover() {
      this.main.onmouseover = function (e) {
        e.preventDefault();
        switch (e.target.className) {
          case "commodity":
            e.target.classList.add("animation");
            break;
          case "commodities":
            e.target.classList.add("animation");
            break;
          case "commodityList":
            e.target.classList.add("animation");
            break;
          case "commodityList clear":
            e.target.classList.add("animation");
            break;
          case "commodityList left":
            e.target.classList.add("animation");
            break;
          default:
            return "大神命名";
        }
        e.target.onmouseleave = function () {
          e.target.classList.remove("animation");
        };
      };
    },
  },

  // 懒加载
  lazyLoad: {
    imgs: Array.from(document.querySelectorAll("img[data-src]")),
    init(defaultImg) {
      this.setDefault(defaultImg);
      this.loadAll(this.imgs);
    },
    setDefault(defaultImg) {
      if (!defaultImg) {
        return;
      }
      this.imgs.forEach((item) => {
        item.src = defaultImg;
      });
    },

    loadImg(item) {
      var rect = item.getBoundingClientRect();
      if (
        rect.bottom <= 0 ||
        rect.top >= document.documentElement.clientHeight
      ) {
        return false;
      }
      item.src = item.dataset.src;
      // 是否加载原图
      if (item.dataset.origin) {
        item.onload = function () {
          item.src = item.dataset.origin;
          item.onload = null;
        };
      }
    },

    loadAll() {
      this.imgs.forEach((item, i, arr) => {
        this.loadImg(item);
      });
    },
  },

  // 轮播图
  carousel: {
    pre: document.getElementById("toLeft"),
    next: document.getElementById("toRight"),
    banner: document.querySelector(".banner"),
    dot: document.querySelectorAll(".bannerDot span"),
    img: document.querySelectorAll(".bannerPic li"),
    timer: null,
    index: 0,
    yiling: 0,
    render() {
      this.timer = setInterval(this.play.bind(this), 3500);

      this.banner.addEventListener("mouseenter", () => {
        clearInterval(this.timer);
      });

      this.banner.addEventListener("mouseleave", () => {
        this.timer = setInterval(this.play.bind(this), 3500);
      });

      this.next.addEventListener("click", (e) => {
        e.preventDefault();
        this.play();
        // console.log(this.index);
      });

      this.pre.addEventListener("click", (e) => {
        e.preventDefault();
        this.index--;
        this.index = this.index == -1 ? 4 : this.index;
        this.move(this.index);
      });

      this.dot.forEach((item, i) => {
        item.addEventListener("click", () => {
          this.dot.forEach((item) => {
            item.className = "";
          });
          item.className = "active";
          this.move(i);
        });
      });
    },
    play() {
      this.index++;
      this.index = this.index > this.img.length - 1 ? 0 : this.index;
      this.move(this.index);
    },
    move(i) {
      this.img.forEach((item, i) => {
        item.className = "";
        this.dot[i].className = "";
      });
      this.img[i].className = "show";
      this.dot[i].className = "active";
    },
  },
};
