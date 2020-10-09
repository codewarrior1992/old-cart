<template>
  <div class="admin-coupons">
    <div class="cards">
      <div class="card">
        <div class="header" :style="{ backgroundImage: `url(${imageOne})` }">
          <div class="coupon">50% off</div>
        </div>
        <div class="content">
          <h2>Title</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore,</p>
          <a href="#">
            <i class="far fa-clock"></i> 2020-08-30
          </a>
        </div>
        <div class="footer">
          <p>btd-1992</p>
        </div>
      </div>
      <div class="card">
        <div class="header" :style="{ backgroundImage: `url(${imageOne})` }">
          <div class="coupon">50% off</div>
        </div>
        <div class="content">
          <h2>Title</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore,</p>
          <a href="#">
            <i class="far fa-clock"></i> 2020-08-30
          </a>
        </div>
        <div class="footer">
          <p>btd-1992</p>
        </div>
      </div>
      <div class="card">
        <div class="header" :style="{ backgroundImage: `url(${imageOne})` }">
          <div class="coupon">50% off</div>
        </div>
        <div class="content">
          <h2>Title</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore,</p>
          <a href="#">
            <i class="far fa-clock"></i> 2020-08-30
          </a>
        </div>
        <div class="footer">
          <p>btd-1992</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageOne:
        "https://images.unsplash.com/photo-1486428128344-5413e434ad35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60s",
      imageTwo: "",
      imageThree: "",
    };
  },
};
</script>