<template>
  <div class="wraper">
    <div class="container" :class="{status : isOpen}">
      <div class="inner">
        <a class="close" @click="openHandler">
          <i class="fas fa-bars"></i>
        </a>

        <router-link to="/home" class="logo">
          <img src="@/assets/image/logo.png" alt />
        </router-link>

        <ul class="nav">
          <li>
            <router-link to="/admin" class="sidebar-link">
              <i class="fas fa-home"></i>
              Dashboard
            </router-link>
          </li>
          <li>
            <router-link to="/admin/products" class="sidebar-link">
              <i class="fas fa-th"></i>
              products
            </router-link>
          </li>
          <li>
            <router-link to="/admin/orders" class="sidebar-link">
              <i class="fas fa-file-invoice-dollar"></i>
              orders
            </router-link>
          </li>
          <li>
            <router-link to="/admin/coupons" class="sidebar-link">
              <i class="fas fa-tags"></i>
              coupons
            </router-link>
          </li>
          <li>
            <router-link to="/admin/logout" class="sidebar-link">
              <i class="fas fa-key"></i>log out
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!--wraper-->

    <a class="ham" @click="openHandler">
      <i class="fas fa-bars"></i>
    </a>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openHandler() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
