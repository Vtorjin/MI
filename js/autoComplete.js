export function autoComplete(dom, data) {
  const domb = document.querySelector(dom);
  const input = domb.querySelector('input[type="text"]');
  const searchBtn = domb.querySelector('input[type="submit"]');
  const res = domb.querySelector(".result");
  select(data);
  handler();
  function select(datas) {
    let data_title_arr = [];
    let value = input.value;
    datas.forEach((item) => {
      data_title_arr.push(item.title);
    });
    if (value == "") {
      res.innerHTML = "";
    } else {
      res.innerHTML = "";
      let d = "";
      for (let i = 0; i < data_title_arr.length; i++) {
        // indexOf(value.toUpperCase()) == 0 比对输入首个字符串
        // includes(value.toUpperCase())  包含有输入的内容
        // --二者可根据需求自行选择
        if (data_title_arr[i].toUpperCase().includes(value.toUpperCase())) {
          d += `<li onkeydown="enter();">${data_title_arr[i]}</li>`;
          res.innerHTML = d;
        }
      }
    }
  }
  function handler() {
    input.addEventListener("focus", function () {
      this.style.borderColor = "#4e6ef2";
      res.style.visibility = "visible";
      select(data);
    });
    input.addEventListener("blur", function () {
      this.style.borderColor = "rgb(187, 177, 240)";
      // 隐藏res的显示内容
      res.style.visibility = "hidden";
    });
    input.addEventListener("input", function () {
      select(data);
    });

    input.addEventListener("propertychange", function () {
      select(data);
    });
  }
}
