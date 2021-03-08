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
  padding: 30px 40px 150px 40px;

  &::-webkit-scrollbar {
      width: 8px;
  }
  &::-webkit-scrollbar-track {
      width: 8px;
      background: rgba(32,166,237,0.30);
  }
  &::-webkit-scrollbar-button {
      display: none;
  }
  &::-webkit-scrollbar-thumb {
      background: $primary;
  }
  &::-moz-scrollbar {
      width: 8px;
  }
  &::-moz-scrollbar-track {
      width: 8px;
      background: rgba(32,166,237,0.30);
  }
  &::-moz-scrollbar-button {
      display: none;
  }
  &::-moz-scrollbar-thumb {
      background: $primary;
  }
}
</style>