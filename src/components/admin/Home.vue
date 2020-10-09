<template>
  <div class="admin-home">
    <div class="cards">
      <div class="card">
        <div class="primary">
          <i class="fas fa-money-bill-alt fa-2x"></i>
        </div>
        <div class="numbers">
          <p>Revenue</p>
          <h4>$1,245</h4>
        </div>
      </div>

      <div class="card">
        <div class="info">
          <i class="fas fa-users fa-2x"></i>
        </div>
        <div class="numbers">
          <p>member</p>
          <h4>125</h4>
        </div>
      </div>

      <div class="card">
        <div class="danger">
          <i class="fas fa-receipt fa-2x"></i>
        </div>
        <div class="numbers">
          <p>Orders</p>
          <h4>1047</h4>
        </div>
      </div>
    </div>

    <div class="charts">
      <div class="chart-line"></div>
      <div class="chart-cycle"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>