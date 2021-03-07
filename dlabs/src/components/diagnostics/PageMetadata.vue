<template>
  <!-- Page Brudcrumb -->
  <div class="row">
    <div class="col-lg-12 page-metadata">
      <nav>
        <ul>
          <li class="active">
            <a href="javascript:void(0)">Tests</a>
          </li>
          <li>
            <a href="javascript:void(0)">Test Profiles</a>
          </li>
          <li>
            <a href="javascript:void(0)">Test Categories</a>
          </li>
          <li>
            <a href="javascript:void(0)">Conditions</a>
          </li>
          <li>
            <a href="javascript:void(0)">Specialites</a>
          </li>
          <li>
            <a href="javascript:void(0)">Organs</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "Breadcrumb",
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";

.page-metadata {
  text-align: left;
  padding-top: 30px;
  padding-bottom: 10px;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      display: inline-flex;
      align-items: center;
      margin-right: 52px;
      height: 28px;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 9px;
      a {
        @include remove-anchor-defaults;
        @include apply-font($proxima, $bold, 14px, $primary);
        letter-spacing: 1.5px;
      }
    }
    li.active {
      background: $primary;
      a {
        color: #fff !important;
      }
    }
  }
}
</style>