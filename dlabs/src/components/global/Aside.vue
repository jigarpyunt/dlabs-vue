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
              class="active"
              @mouseover="ShowTooltip('dash')"
              @mouseleave="RemoveTooltip()"
            >
              <a href="javascript:void(0)">
                <img src="@/assets/icons/dashboard.svg" alt="#" />
              </a>
              <span class="tool-tip" v-if="tooltip.dash">Dashboard</span>
            </li>
            <li
              @mouseover="ShowTooltip('diagnostics')"
              @mouseleave="RemoveTooltip()"
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
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/globals.scss";
aside {
  width: 91px;
  height: 100%;
  position: fixed;
  background: $primary-background;

  .logo-container {
    padding: 8px;

    h1.logo-text {
      @include apply-font($exo2, $bold, 15px, #ffffff);
      margin-top: 5px;
      letter-spacing: 2px;
    }
  }
  .nav-container {
    margin-top: 40px;

    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        background: rgba(0, 0, 0, 0.26);
        width: 53px;
        height: 53px;
        border-radius: 53px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
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