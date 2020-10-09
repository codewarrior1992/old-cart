<template>
  <div class="product-group">
    <div class="modal" ref="modal" @click.self="closeModal">
      <form class="modal-content" @submit.prevent="uploadData()">
        <div class="img-group">
          <div class="upload">
            <input type="file" name="img" id="img" @change="preview" ref="files" />
            <h2>select your file ...</h2>
          </div>
          <div
            class="preview"
            :style="{ backgroundImage: `url(${tempProduct.imgUrl || null})` ,zIndex:10}"
          >
            <a href="#" class="preview-icon">
              <i class="fas fa-images" v-if="file == null"></i>
            </a>
          </div>
        </div>
        <div class="item-group">
          <div class="input-group">
            <label for="title">title</label>
            <input
              type="text"
              placeholder="Item name ..."
              id="title"
              v-model.trim="tempProduct.title"
            />
          </div>

          <div class="attr">
            <div class="input-group">
              <label for="Price">price</label>
              <input type="text" placeholder="$ 0.00" id="Price" v-model="tempProduct.price" />
            </div>
            <div class="input-group">
              <label for="Category">category</label>
              <select v-model="tempProduct.category" value="1">
                <option value selected disabled>Option</option>
                <option
                  v-for="(category, i) in categories"
                  :value="category"
                  :key="i"
                >{{ category }}</option>
              </select>
            </div>
            <div class="input-group">
              <label for="unit">unit</label>
              <select v-model="tempProduct.unit">
                <option value selected disabled>Option</option>
                <option v-for="(unit, i) in units" :value="unit" :key="i">{{ unit }}</option>
              </select>
            </div>
          </div>

          <div class="input-group">
            <label for="content">content</label>
            <textarea
              name="textarea"
              id="content"
              cols="30"
              rows="10"
              v-model="tempProduct.content"
            ></textarea>
          </div>

          <div class="selector">
            <div class="input-group">
              <input
                type="checkbox"
                id="Enable"
                v-model="tempProduct.isEnabled"
                :true-value="true"
                :false-value="false"
              />
              <label for="Enable">Enable</label>
            </div>
            <div class="btns">
              <button type="submit">submit</button>
              <button type="button" @click.prevent="closeModal">cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- icon -->
    <div class="add-product" @click="openModal">
      <i class="fas fa-plus"></i>
      <span>新增產品</span>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import axios from "axios";
export default {
  data() {
    return {
      file: null,
      isNew: true,
      itemId: "",
      categories: ["burger", "rief", "package"],
      units: ["袋", "盒", "組"],
      tempProduct: {
        title: "",
        content: "",
        category: "",
        price: 0,
        unit: "",
        isEnabled: false,
        imgUrl: "",
      },
    };
  },
  methods: {
    openModal(item) {
      let editItem = Object.assign({}, item);
      $(".modal").css({ transform: "translateY(0px)" });
      if (editItem.hasOwnProperty("title")) {
        this.tempProduct = editItem;
        this.isNew = !this.isNew;
        this.itemId = item.id;
      }
    },
    closeModal() {
      $(".modal").css({ transform: "translateY(-1500px)" });
      this.isNew = true;
      this.file = null;
      this.tempProduct = {
        title: "",
        content: "",
        category: "",
        price: 0,
        unit: "",
        isEnabled: false,
        imgUrl: "",
      };
    },
    preview() {
      // 1. 預覽
      this.file = this.$refs.files.files[0];

      // 2. 上傳到 storage
      const file = this.file;
      const storageRef = firebase.storage().ref();

      var metadata = {
        contentType: "image/jpeg/png/jpg",
      };

      if (file) {
        let uploadTask = storageRef
          .child("/images/" + file.name)
          .put(file, metadata);

        storageRef
          .child("/images/" + file.name)
          .getDownloadURL()
          .then((url) => {
            this.tempProduct.imgUrl = url;
            console.log(this.tempProduct);
          });
      }
    },
    uploadData() {
      const vm = this;
      vm.$set(vm.tempProduct, "time", Date.now());

      // upload
      let method = "post";
      let api = "https://vue-portfolio-cart.herokuapp.com/post-product";
      if (vm.isNew == false) {
        method = "put";
        api = `https://vue-portfolio-cart.herokuapp.com/update-product/${vm.itemId}`;
      }

      vm.$http[method](api, {
        data: vm.tempProduct,
      }).then((res) => {
        vm.$emit("call");
      });
      vm.closeModal();
    },
  },
};
</script>
