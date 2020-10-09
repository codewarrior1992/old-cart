<template>
  <div class="filter-group">
    <!--選取區-->
    <div class="filter-input">
      <div class="btn-info" @click="status = !status">
        <i class="fas fa-sliders-h"></i>
        <span>篩選功能</span>
      </div>
      <input type="search" />
      <a href="#">
        <i class="fas fa-search"></i>
      </a>
    </div>
    <!-- 篩選結果 -->
    <div class="filter-result" v-if="result.length != 0">
      <a href="#">
        <i class="far fa-times-circle"></i>Pckage
      </a>
      <a href="#">
        <i class="far fa-times-circle"></i>$500
      </a>
    </div>
    <!-- 表單內容 -->
    <form :class="{'show':status}">
      <h2 class="title">Filter</h2>
      <div class="box-wraper">
        <div class="box">
          <h2>category</h2>
          <div class="input-group">
            <input type="checkbox" id="category" class="categories" value="burger" />
            <label for="category">單點漢堡</label>
          </div>
          <div class="input-group">
            <input type="checkbox" id="category1" class="categories" value="pizza" />
            <label for="category1">手工披薩</label>
          </div>
          <div class="input-group">
            <input type="checkbox" id="category2" class="categories" value="package" />
            <label for="category2">超值套餐</label>
          </div>
        </div>
        <div class="box">
          <h2>ranges</h2>
          <div class="input-group">
            <input
              type="radio"
              name="ranges"
              id="low"
              class="ranges"
              data-low="0"
              data-high="199"
              value="low"
            />
            <label for="low">199 以下</label>
          </div>
          <div class="input-group">
            <input
              type="radio"
              name="ranges"
              id="middle"
              class="ranges"
              data-low="199"
              data-high="499"
              value="middle"
            />
            <label for="middle">199 ~ 449</label>
          </div>
          <div class="input-group">
            <input
              type="radio"
              name="ranges"
              id="high"
              class="ranges"
              data-low="499"
              data-high="799"
              value="high"
            />
            <label for="high">449 ~ 799</label>
          </div>
        </div>
        <div class="box">
          <h2>status</h2>
          <div class="input-group">
            <input type="radio" name="status" id="avaliable" class="status" value="true" />
            <label for="avaliable">供應中</label>
          </div>
          <div class="input-group">
            <input type="radio" name="status" id="unavailable" class="status" value="false" />
            <label for="unavailable">暫時缺貨</label>
          </div>
        </div>
      </div>

      <a href="#" class="send" @click.prevent="picker">submit</a>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: false,
      result: [],
      condition: {
        categories: [],
        ranges: [],
        status: [],
      },
    };
  },
  methods: {
    picker() {
      this.status = false;

      this.condition = {
        categories: [],
        ranges: [],
        status: [],
      };

      let categoriesDom = document.getElementsByClassName("categories");
      let rangesDom = document.getElementsByClassName("ranges");
      let statusDom = document.getElementsByClassName("status");

      let categories = this.condition.categories;
      let ranges = this.condition.ranges;
      let status = this.condition.status;

      for (let i = 0; i < categoriesDom.length; i++) {
        if (categoriesDom[i].checked) {
          categories.push({
            type: "category",
            value: categoriesDom[i].value,
          });
        }
      }

      for (let i = 0; i < rangesDom.length; i++) {
        if (rangesDom[i].checked) {
          ranges.push({
            type: "price",
            low: rangesDom[i].dataset.low,
            high: rangesDom[i].dataset.high,
          });
        }
      }

      for (let i = 0; i < statusDom.length; i++) {
        if (statusDom[i].checked) {
          status.push({
            type: "status",
            value: statusDom[i].value,
          });
        }
      }

      this.$emit("send", this.condition);
    },
  },
  mounted() {},
};
</script>