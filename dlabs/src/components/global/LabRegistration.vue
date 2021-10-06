<template>
  <section class="page-content"> 
      <Steps></Steps>  
  </section>
</template>
<script>
import Steps from '../labregistration/Steps.vue';

export default {
  name: "LabRegistration",
  components: {
    Steps
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";

section.page-content {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: scroll;
  // padding: 30px 40px 150px 40px;
  display: flex;
  justify-content: center;
  align-items: center;

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