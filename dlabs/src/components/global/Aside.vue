<template>
  <aside>
    <div class="container-fluid">
      <!-- Logo Container -->
      <div class="row">
        <div class="col-12 logo-container">
          <img src="@/assets/icons/logo.svg" alt="#" />
          <h1 class="logo-text">DLABS</h1>
        </div>
      </div>

      <!-- Nav Container -->
      <div class="row">
        <div class="col-12 nav-container">
          <ul>
            <li
              :class="{ active: $route.path == '/dashboard' }"
              @mouseover="ShowTooltip('dash')"
              @mouseleave="RemoveTooltip()"
              @click="PushPage('/dashboard')"
            >
              <a href="javascript:void(0)">
                <img src="@/assets/icons/dashboard.svg" alt="#" />
              </a>
              <span class="tool-tip" v-if="tooltip.dash">Dashboard</span>
            </li>
            <li
              @mouseover="ShowTooltip('diagnostics')"
              @mouseleave="RemoveTooltip()"
              @click="PushPage('/diagnostics')"
              :class="{
                active:
                  $route.path == '/diagnostics/' ||
                  $route.path == '/diagnostics/tests' ||
                  $route.path == '/diagnostics/addtests' ||
                  $route.path == '/diagnostics/profiles' ||
                  $route.path == '/diagnostics/addprofiles' ||
                  $route.path == '/diagnostics/categories' ||
                  $route.path == '/diagnostics/addcategories' ||
                  $route.path == '/diagnostics/methadologies' ||
                  $route.path == '/diagnostics/addmethadologies' ||
                  $route.path == '/diagnostics/specialities' ||
                  $route.path == '/diagnostics/addspecialities'
              }"
            >
              <a href="javascript:void(0)">
                <img src="@/assets/icons/diagnostics.svg" alt="#" />
              </a>
              <span class="tool-tip" v-if="tooltip.diagnostics"
                >Diagnostics</span
              >
            </li>
            <li @mouseover="ShowTooltip('tests')" @mouseleave="RemoveTooltip()">
              <a href="javascript:void(0)">
                <img src="@/assets/icons/tests.svg" alt="#" />
              </a>
              <span class="tool-tip" v-if="tooltip.tests">Tests</span>
            </li>
            <li @mouseover="ShowTooltip('labs')" @mouseleave="RemoveTooltip()">
              <a href="javascript:void(0)">
                <img src="@/assets/icons/labs.svg" alt="#" />
              </a>
              <span class="tool-tip" v-if="tooltip.labs">Labs</span>
            </li>
            <li @mouseover="ShowTooltip('b2b')" @mouseleave="RemoveTooltip()">
              <a href="javascript:void(0)">
                <img src="@/assets/icons/b2b.svg" alt="#" />
              </a>
              <span class="tool-tip" v-if="tooltip.b2b">B2B</span>
            </li>
            <li
              @mouseover="ShowTooltip('offers')"
              @mouseleave="RemoveTooltip()"
            >
              <a href="javascript:void(0)">
                <img src="@/assets/icons/offers.svg" alt="#" />
              </a>
              <span class="tool-tip" v-if="tooltip.offers">Offers</span>
            </li>
            <li @mouseover="ShowTooltip('sales')" @mouseleave="RemoveTooltip()">
              <a href="javascript:void(0)">
                <img src="@/assets/icons/sales.svg" alt="#" />
              </a>
              <span class="tool-tip" v-if="tooltip.sales">Sales</span>
            </li>
            <li
              @mouseover="ShowTooltip('settings')"
              @mouseleave="RemoveTooltip()"
            >
              <a href="javascript:void(0)">
                <img src="@/assets/icons/settings.svg" alt="#" />
              </a>
              <span class="tool-tip" v-if="tooltip.settings">Settings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
import router from "@/router";

export default {
  name: "Aside",
  data: function () {
    return {
      tooltip: {
        dash: false,
        diagnostics: false,
        tests: false,
        labs: false,
        b2b: false,
        offers: false,
        sales: false,
        settings: false,
      },
    };
  },
  methods: {
    ShowTooltip: function (nav) {
      this.tooltip = {
        dash: false,
        diagnostics: false,
        tests: false,
        labs: false,
        b2b: false,
        settings: false,
      };
      this.tooltip[nav] = true;
    },
    RemoveTooltip: function () {
      this.tooltip = {
        dash: false,
        diagnostics: false,
        tests: false,
        labs: false,
        b2b: false,
        settings: false,
      };
    },
    PushPage: function (page) {
      router
        .push({
          path: page,
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/globals.scss";
aside {
  width: 91px;
  height: 100%;
  position: fixed;
  background: $primary;
  z-index: 200;
  .logo-container {
    padding: 8px;

    h1.logo-text {
      @include apply-font($exo2, $bold, 15px, #ffffff);
      margin-top: 5px;
      letter-spacing: 2px;
    }
  }
  .nav-container {
    margin-top: 25px;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      li {
        list-style: none;
        background: rgba(0, 0, 0, 0.26);
        width: 45px;
        height: 45px;
        border-radius: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        cursor: pointer;
        position: relative;

        .tool-tip {
          position: absolute;
          left: 58px;
          top: 15px;
          padding: 0px 8px 0px 8px;
          height: 23px;
          background: rgba(0, 0, 0, 0.56);
          border-radius: 7px;
          @include apply-font($exo2, $regular, 15px, #ffffff);
        }
      }
      li.active {
        background: $active-state;
      }
    }
  }
}
</style>