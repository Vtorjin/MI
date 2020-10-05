/**
 *@param:data获取的数据
 *@param dom,input,searchBtn,res:使用插件的dom节点名称,res表示展现的搜索框
 *@param: select: 用来处理返回的标题数据
 **/
export function autoComplete(dom, data) {
  const domb = document.querySelector(dom);
  const input = domb.querySelector('input[type="text"]');
  const searchBtn = domb.querySelector('input[type="submit"]');
  const res = domb.querySelector(".result");

  let data_title_arr = [];

  input.addEventListener("focus", function () {
    this.style.borderColor = "#4e6ef2";
    res.style.visibility = "visible";
    select(data, data_title_arr);
    console.log(1);
  });
  input.addEventListener("blur", function () {
    this.style.borderColor = "rgb(187, 177, 240)";
    // 隐藏res的显示内容
    res.style.visibility = "hidden";
  });

  input.addEventListener("input", function () {
    select(data, data_title_arr);
  });

  input.addEventListener("propertychange", function () {
    select(data, data_title_arr);
  });

  res.addEventListener("click", function (e) {
    var target = e.target || e.srcElement;
    if (target.nodeName.toUpperCase() == "LI") {
      console.log(target);
    }
  });
  searchBtn.addEventListener("click", function (e) {
    // var target = e.target || e.srcElement
    // console.log(target.nodeName)
  });


  function select(datas, arr) {
    let value = input.value;
    datas.forEach((item) => {
      arr.push(item.title);
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
          d += `<li>${data_title_arr[i]}</li>`;
          res.innerHTML = d;
        }
      }
    }
  }
}
