export function tab(data) {
  let showList = document.querySelectorAll(".showList li");
  let hiddenlist = document.querySelectorAll(".hiddenList ul");
  let it = document.getElementsByClassName(".goods");
  hiddenlist = Array.from(hiddenlist);
  showList = Array.from(showList);

  const next = document.querySelector("#toRight");
  const pre = document.querySelector("#toLeft");

  hiddenlist.forEach((item, i) => {
    var str = "";
    for (var key in data[i]) {
      str += `<li class='goods'><img src='${data[i][key].src}'/><span>${data[i][key].info}</span></li>`;
    }
    item.innerHTML = str;
  });

  showList.forEach((item, i) => {
    // 显示li的高度
    let cd = item.getBoundingClientRect();

    // 获取隐藏的ul宽度高度
    let sho = hiddenlist[i].getBoundingClientRect();

    item.onmouseover = function () {
      hiddenlist[i].className = "top";
      hiddenlist[i].style.width = `calc(${Math.ceil(
        hiddenlist[i].children.length / 6
      )}*234px)`;
      next.style.display = "none";
      pre.style.display = "none";
    };

    item.onmouseleave = function (e) {
      var flag = e.clientY > cd.top || e.clientY < cd.bottom;
      var flag2 = e.clientY > sho.top || e.clientY < sho.bottom;

      if (e.clientX > cd.right && flag) {
        hiddenlist[i].className = "top";
      } else {
        hiddenlist[i].className = "";
      }
    };

    hiddenlist[i].onmouseleave = function () {
      hiddenlist[i].className = "";
      next.style.display = "block";
      pre.style.display = "block";
    };
  });
}
