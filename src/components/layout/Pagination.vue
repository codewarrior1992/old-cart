<template>
  <div>
    <ul class="pages">
      <!-- back -->
      <li class="go">
        <a
          href="#"
          :class="{disabled : currentPage == 0}"
          @click.prevent="showPage(currentPage -=1 )"
        >&laquo;</a>
      </li>

      <!-- main -->
      <li class="page" v-for="(page,i) in pages.length" :key="i">
        <a
          href="#"
          :class="{active : currentPage === page - 1}"
          @click.prevent="showPage(currentPage = i)"
        >{{ i + 1 }}</a>
      </li>

      <!-- go -->
      <li class="back">
        <a
          href="#"
          @click.prevent="showPage(currentPage +=1 )"
          :class="{disabled : currentPage == pages.length -1}"
        >&raquo;</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["pages"],
  data() {
    return {
      currentPage: 0,
    };
  },
  methods: {
    showPage(val) {
      this.$emit("show", val);
    },
  },
};
</script>
