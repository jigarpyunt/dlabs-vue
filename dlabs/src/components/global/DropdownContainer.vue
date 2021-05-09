<template>
  <div class="dropdown-container">
    <div class="custom-dropdown">
      <div class="dropdown-search">
        <slot name="dd-search"></slot>
      </div>
      <ul>
        <slot name="dd-list"></slot>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "DropdownContainer",
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";

.dropdown-container {
  position: relative;
  .custom-dropdown {
    position: absolute;
    top: 10px;
    z-index: 100;
    width: 100%;
    max-height: 190px;
    background: white;
    border-radius: 0px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.16);
    overflow-y: auto;

    .dropdown-search {
      border: 1px solid gray;
      height: 30px;
      margin: 8px;
      border-radius: 5px;
      input {
        @include remove-input-defaults;
        border: none !important;
        text-indent: 10px;
        margin-left: 5px;
        margin-top: 2px;
      }
    }
    ul {
      margin: 0;
      padding: 0px;

      li {
        list-style: none;
        height: 40px;
        display: flex;
        align-items: center;
        @include apply-font($roboto, $regular, 15px, #000);
        padding: 10px;
        cursor: pointer;
      }
      li:hover {
        background: #20a6ed;
        color: #fff !important;
      }
    }
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: #20a6ed;
    }
    &::-webkit-scrollbar-track {
      width: 5px;
      background: rgba(0, 0, 0, 0.16);
    }
  }
}
</style>