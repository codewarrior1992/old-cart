<template>
  <div class="admin-products">
    <div class="controlbar-flex">
      <Controlbar @send="getConditions" />
      <Modal ref="Modal" @call="getData" />
    </div>
    <ul class="list">
      <li v-for="(item,i) in productList[currentPage]" :key="i">
        <div class="item-img" :style="{ backgroundImage: `url(${item.imgUrl})` }"></div>
        <div class="item-info">
          <h2 class="item-title">{{item.title}}</h2>
          <p class="item-content">{{item.content}}</p>

          <div class="item-memo">
            <div class="memo-group">
              <span>
                <i class="fas fa-dollar-sign"></i>
                {{item.price}}
              </span>
              <span class="success">
                <i class="far fa-check-circle"></i>
                <template v-if="item.isEnabled">販售中</template>
                <template v-else>暫未供應</template>
              </span>
              <span>
                <i class="fas fa-box-open"></i>
                {{item.unit}}
              </span>
              <span>
                <i class="far fa-clock"></i>
                {{item.time | timeFormat}}
              </span>
            </div>
            <div class="btn-group">
              <div class="removeBtn" @click.prevent="removeData(item)">
                <i class="fas fa-trash-alt"></i>
                <span>移除產品</span>
                <strong>remove</strong>
              </div>
              <div class="updateBtn" @click.prevent="editData(item)">
                <i class="fas fa-cogs"></i>
                <span>修改產品</span>
                <strong>update</strong>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <Pagination :pages="productList" @show="getData" />
  </div>
</template>
<script>
import Controlbar from "@/components/layout/Controlbar.vue";
import Pagination from "@/components/layout/Pagination.vue";
import Modal from "@/components/admin/Modal.vue";
export default {
  components: {
    Controlbar,
    Pagination,
    Modal,
  },
  data() {
    return {
      products: [],
      currentPage: 0,
      conditions: {
        categories: [],
        ranges: [],
        status: [],
      },
    };
  },
  methods: {
    editData(item) {
      this.$refs.Modal.openModal(item);
    },
    getData(val = 0) {
      const vm = this;
      this.currentPage = val;

      vm.$http
        .get("https://vue-portfolio-cart.herokuapp.com/get-products")
        .then((res) => {
          vm.products = res.data.result;
        });
    },
    removeData(item) {
      const vm = this;
      const id = item.id;
      vm.$http
        .post(`https://vue-portfolio-cart.herokuapp.com/delete-product/${id}`)
        .then((res) => {
          vm.products = res.data.result;
        });
    },
    getConditions(data) {
      this.conditions = data || [];
    },
  },
  computed: {
    productList() {
      const vm = this;
      let products = this.products;
      let result = [];

      let ranges = this.conditions.ranges;
      let categories = this.conditions.categories;
      let status = this.conditions.status;
      let tempProducts = [];

      // reverse
      if (products == null) return;
      for (const item of Object.values(products)) {
        result.unshift(item);
      }

      // filter
      if (ranges.length !== 0) {
        for (let range of ranges) {
          result = result.filter((item) => {
            return item.price > range.low && item.price < range.high;
          });
        }
      }

      if (categories.length !== 0) {
        for (let category of categories) {
          tempProducts = tempProducts.concat(
            result.filter(function (item) {
              return item.category.indexOf(category.value) !== -1;
            })
          );
        }
        result = [...tempProducts];
      }

      if (status.length !== 0) {
        for (let k of status) {
          result = result.filter((item) => {
            return String(item.isEnabled) == k.value;
          });
        }
      }

      // pagenation
      let pages = [];
      result.filter((item, i) => {
        if (i % 10 === 0) {
          pages.push([]);
        }
        let page = parseInt(i / 10);
        pages[page].push(item);
      });
      result = pages;

      return result;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
