(function () {
  $(document).ready(function () {
    /*
       @param 隐藏部分创建动态节点
        */
    $.fn.createNode = function () {
      $(".hidden_list").each(function (i) {
        $("<li></li>").appendTo(".hidden_list ol");
        $(".hidden_list li").append(
          $("<a class='hidden_list_a'><img></img><span></span></a>")
        );
      });

      $(".hidden_list").each(function () {
        if ($(this).hasClass("normal")) {
          $(this).find("li:nth-child(n+5)").remove();
        } else if ($(this).hasClass("short")) {
          $(this).find("li:nth-child(n+4)").remove();
        } else {
          $(this).find("li:nth-child(n+3)").empty();
        }
      });
    };

    /*
        @param  列表分类部分Tab切换功能
        @param   右侧固定栏显示隐藏且换
        @param  鼠标悬浮图片操作
        @param   图片懒加载
        */
    $.fn.tab = function () {
      $("img[data-src]").attr("src", "img/default.jpg");

      // 页面滚动事件-图片懒加载
      var boxTop = $("main").offset().top;
      var footerTop = $(".Info-video").offset().top;
      var imgTimer = null;

      $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();

        if (scrollTop >= boxTop) {
          $("#back").stop().show();
          $(".flexList").css("top", scrollTop + 200);
        } else {
          $("#back").stop().fadeOut("swing");
        }
        if (scrollTop >= footerTop) {
          $("#back").css("color", "#ff6700");
        } else {
          $("#back").css("color", "");
        }

        // 图片懒加载

        function lazy() {
          $("img[data-src]").each(function () {
            if (checkShow($(this)) && !isLoaded($(this))) {
              loadImg($(this));
            }
          });
        }

        function checkShow($img) {
          var windowHeight = $(window).height();
          var imgTop = $img.offset().top;
          if (imgTop < windowHeight + scrollTop && imgTop > scrollTop) {
            return true;
          }
          return false;
        }

        function isLoaded($img) {
          return $img.attr("data-src") == $img.attr("src");
        }

        function loadImg($img) {
          $img.attr("src", $img.attr("data-src"));
        }

        lazy();

        if (imgTimer) {
          clearTimeout(imgTimer);
        } else {
          imgTimer = setTimeout(lazy, 1000);
        }
      });

      $("#back").click(function () {
        $("body,html").animate(
          {
            scrollTop: 0,
          },
          500
        );
      });

      $(".bannerMenu li").on({
        mouseover: function () {
          var index = $(this).index();
          $("#toLeft,#toRight,.bannerDot").css("z-index", "0");
          $(".hidden_list")
            .eq(index)
            .css({ display: "block", zindex: 50 })
            .siblings()
            .stop()
            .hide();
          $(".hidden_list_a img")
            .prop({
              src: "img/banner/" + (index + 1) + ".jpg",
              alt: "图片正在加载",
            })
            .siblings("span")
            .text("Redmmi K30 4G");
          $(".hidden_list").hover(
            function () {
              $(this).stop().show();
            },
            function () {
              $(this).stop().hide();
              $("#toLeft,#toRight,.bannerDot").css("z-index", "30");
            }
          );
        },

        mouseleave: function () {
          var index = $(this).index();
          $(".hidden_list").eq(index).stop().hide().css("z-index", "0");
        },
      });

      $(
        ".commodityList:not(.more),.aside,.commodity,.commodities,.upImg,.downImg"
      ).hover(
        function () {
          $(this).stop().css({
            marginTop: "-5px",
            transition: " 0.3s",
            boxShadow: "0 30px 20px #eee",
          });
        },
        function () {
          $(this).css({
            marginTop: 0,
            boxShadow: "none",
          });
        }
      );

      $(".video_list").hover(
        function () {
          $(this).css({
            marginTop: "-5px",
            transition: "0.4s",
            boxShadow: "0 30px 35px #ccc",
          });
        },
        function () {
          $(this).css({
            marginTop: 0,
            boxShadow: "none",
          });
        }
      );
      $(".shoppingCart").hover(
        function () {
          $(".noCart").css({
            display: "block",
            transition: "0.3s",
          });
        },
        function () {
          $(".noCart").hide();
        }
      );
    };

    /*闪购区倒计时*/
    $.fn.countTime = function () {
      var timer2 = setInterval(count, 1000);
      function count() {
        let nTime = new Date();
        let h = nTime.getHours();
        let m = nTime.getMinutes();
        let s = nTime.getSeconds();
        console.log(h);
        if (h <= 7) {
          $(".round span").html("08:00");
        }
        if (h <= 15) {
          $(".round span").html("16:00");
        } else {
          $(".round span").html("00:00");
        }
        if (h === 0 && m === 0 && s === 0) {
          h = 0;
          m = 0;
          s = 0;
        }

        m = 59 - (m % 60);
        s = 59 - (s % 60);
        $(".hour").html("0" + (7 - (h % 8)));
        $(".min").html(m < 10 ? "0" + m : m);
        $(".sec").html(s < 10 ? "0" + s : s);
      }

      timer2;
    };

    /*
        @param视频样式，搜索框样式
        */

    $.fn.foarmat = function () {
      // 视频区悬浮
      $(".video_list div").hover(
        function () {
          $(this).find(".video_color").css({
            background: "#f65000",
            transition: "0.3s",
          });
        },
        function () {
          $(this).find(".video_color").css({
            background: "none",
            transition: "0.3s",
          });
        }
      );

      $("input[type='text']").on({
        focus: function () {
          $(".keyWord").hide();
          $("input").css("borderColor", "#f56000");
        },
        blur: function () {
          var val = $(this).val();
          if (val == "") {
            $(".keyWord").show();
          } else {
            $(".keyWord").hide();
          }
          $("input").css("borderColor", "");
        },
      });
      $(".logNav_search").on({
        mouseover: function () {
          $("input").css("borderColor", "#cacaca");
        },
        mouseleave: function () {
          $("input").css("borderColor", "#e0e0e0");
        },
      });
    };

    /*
        @param轮播图部分
        */
    $.fn.slide = function () {
      var Button = $(".banner");
      var Banner = $(".bannerPic");
      var BannerLi = Banner.find("li");
      var BannerWidth = BannerLi.find("img").width();
      var num = 1; //从第二张图片开始 图片的索引值
      var timer = null;
      var time = 5000;
      var oldLength = BannerLi.length - 2; //删掉第一张和最后一张 的原 始changdu
      var length = oldLength + 2;
      var BannerSpan = Banner.siblings(".bannerDot").find("span");

      init();
      // 初始化
      function init() {
        num = 1;

        // 导航点点击事件
        $(".bannerDot span").click(function (ev) {
          num = $(ev.target).index() + 1;
          change();
        });

        // 鼠标悬浮事件
        Button.hover(
          function () {
            clearInterval(timer);
          },
          function () {
            setTimer();
          }
        );

        // 左右切换按钮事件
        $("#toLeft").click(function () {
          if (!$(".bannerPic").is(":animated")) {
            // clearInterval(timer);
            num--;
            change();
          }
        });
        $("#toRight").click(function () {
          if (!$(".bannerPic").is(":animated")) {
            num++;
            change();
          }
        });
        setTimer();
      }

      function setTimer() {
        timer = setInterval(function () {
          num++;
          change();
        }, time);
      }

      function change() {
        changeSlide();
        changeSpan();
      }

      // 悬浮点更换
      function changeSpan() {
        BannerSpan.removeClass()
          .eq((num - 1) % oldLength)
          .addClass("active");
      }

      function changeSlide() {
        Banner.animate({ left: -num * BannerWidth }, 1000, function () {
          if (num <= 0) {
            num = oldLength;
            Banner.css({ left: -num * BannerWidth });
          }
          if (num >= length - 1) {
            num = 1;
            Banner.css({ left: -num * BannerWidth });
          }
        });
      }
    };

    $.fn.slide();
    $.fn.foarmat();
    $.fn.createNode();
    $.fn.tab();
    $.fn.countTime();
  });
})();
