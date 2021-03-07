<template>
  <section class="page-content">
    <div class="container-fluid">
      <slot name="header"></slot>
      <slot name="main"></slot>
      <slot name="footer"></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: "PageContent",
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";

section.page-content {
  width: 94.6%;
  height: 100%;
  position: fixed;
  left: 91px;
  top: 80px;
  background: #fff;
  overflow-y: scroll;
  padding: 30px 40px 30px 40px;
}
</style>