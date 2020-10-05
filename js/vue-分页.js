window.onload = function () {
  let app = new Vue({
    el: ".container",
    data: {
      lists:[],
      page: {
        pageTotal: 1,
        pageSize: 10,
        totalCount: 100,
        pageNo: 1,
        pageInt: 1,
      },
    },
    methods: {
      getlist(i) {
        this.page.pageNo = i || this.page.pageInt;

        axios({
          method: "get",
          url: `https://vtorjin.github.io/mi/json/${this.page.pageNo}.json`,
        })
          .then((res) => {
            let data = res.data.sort;
            this.lists = data;
            this.page.pageTotal = Math.ceil(
              this.page.totalCount / this.page.pageSize
            );
            // window.location.hash = `${this.page.pageNo}.html`;
          })
          .catch(function (err) {
            console.warn(err);
          });
      },

      change(num) {
        if (num == "...") return;
        this.getlist(num);
      },
      // 点击上一页下一页
      pagePre() {
        if (this.page.pageNo <= 1) {
          this.page.pageNo--;
          this.getlist(this.page.pageNo);
        }
        return false;
      },
      pageNext() {
        if (this.page.pageNo < this.page.pageTotal) {
          this.page.pageNo++;
          this.getlist(this.page.pageNo);
        }
        return false;
      },
    },
    computed: {
      jisuan: function () {
        return function (i) {
          return (this.page.pageNo - 1) * this.page.pageSize + i + 1;
        };
      },

      pages: function () {
        var start = this.page.pageNo;
        var end = Math.ceil(this.page.totalCount / this.page.pageSize);
        if (end < 5) return end;
        if (start <= 5) {
          return [1, 2, 3, 4, 5, "...", end];
        } else if (start >= end - 4) {
          return [1, "...", end - 4, end - 3, end - 2, end - 1, end];
        } else {
          return [1, "...", start - 1, start, start + 1, "...", end];
        }
      },
    },
    mounted() {
      this.getlist();
    },
  });
};
