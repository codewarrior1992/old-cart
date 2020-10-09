<template>
  <div class="admin-warper">
    <Sidebar />
    <div class="main">
      <Topbar />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Topbar from "../components/layout/admin/Topbar.vue";
import Sidebar from "../components/layout/admin/Sidebar.vue";
export default {
  components: {
    Topbar,
    Sidebar,
  },
  data() {
    return {};
  },
};
</script>
