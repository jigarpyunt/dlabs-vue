<template>
  <!-- Page Brudcrumb -->
  <div class="row">
    <div class="col-lg-12 page-metadata">
      <nav>
        <ul>
          <li :class="data.active.includes($route.path) ? 'active':''" v-for="data in metadata" :key="data.code" @click="Navigate(data.active[0],data.name)">
            <a href="javascript:void(0)">{{ data.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import store from "@/store";

export default {
  name: "Breadcrumb",
  data: function() {
    return {
    }
  },
  methods: {
    Navigate : function ( page, name ) {
      store.commit('SetBreadCrumbActivePage', { pagename: name });
      router.push({
        path: page
      })
    }
  },
  props: ['metadata']
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
      margin-right: 32px;
      height: 28px;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 9px;
      background: #EAEAEA;//rgba(129,129,129,0.81);
      cursor: pointer;
      a {
        @include remove-anchor-defaults;
        @include apply-font($proxima, $regular, 14px, $primary);
        letter-spacing: 1.5px;
        color: #000 !important;
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