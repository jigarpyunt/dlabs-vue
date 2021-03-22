<template>
  <div>
    <TestSelections v-if="$store.state.diagnostics.testSelections" />
    <ViewTest v-if="$store.state.diagnostics.viewTest" />
    <ViewProfile v-if="$store.state.diagnostics.viewProfile" />
    <Aside />
    <Header />
    <PageContent>
      <template v-slot:header>
        <Breadcrumb
          :rootpage="'Diagnostics'"
          :activepage="$store.state.bcrumb.activepage"
        />
      </template>
      <template v-slot:main>
        <!-- <PageMetadata :metadata="pageMetaData" /> -->
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
            <div class="page-filters">
              <div class="sort-op active">A-Z</div>
              <div class="sort-op">Z-A</div>
              <div class="sort-op">
                <img src="@/assets/icons/calendar-unactive.svg" alt="#">
              </div>
              <div class="search-container">
                <input type="text" placeholder="Search by name...">
                <img src="@/assets/icons/search-icon.svg" alt="#" class="search-icon">
              </div>
            </div>
          </div>
        </div>
        <router-view :key="$route.path" />
      </template> 
      <template v-slot:footer>
        <div class="footer-container">
          <!-- Page Setting and Page Add Data -->
          <img
            src="@/assets/icons/page-setting.svg"
            alt="#"
            class="footer-icons page-setting"
          />
          <img
            src="@/assets/icons/add-page-data.svg"
            alt="#"
            class="footer-icons add-page-data"
            @click="AddPage()"
          />
        </div>
      </template>
    </PageContent>
  </div>
</template>
<script>
import router from "@/router";
import store from "@/store";

import Aside from "@/components/global/Aside";
import Header from "@/components/global/Header.vue";
import PageContent from "@/components/global/PageContent";
import Breadcrumb from "@/components/global/Breadcrumb";
import TestSelections from "@/components/diagnostics/TestSelections";
import ViewTest from "@/components/diagnostics/ViewTest";
import ViewProfile from "@/components/diagnostics/ViewProfile";

export default {
  name: "Dashboard",
  components: {
    Aside,
    Header,
    Breadcrumb,
    PageContent,
    TestSelections,
    ViewTest,
    ViewProfile
  },
  data: function () {
    return {
      metadata: [
        {
          id: "tes",
          name: "Tests",
          active: ["/diagnostics/tests", "/diagnostics/addtests"],
          redirection: "/diagnostics/tests",
        },
        {
          id: "pro",
          name: "Test Profiles",
          active: ["/diagnostics/profiles", "/diagnostics/addprofiles"],
          redirection: "/diagnostics/addprofiles",
        },
        {
          id: "cat",
          name: "Test Categories",
          active: ["/diagnostics/categories","/diagnostics/addcategories"],
          redirection: "/diagnostics/categories",
        },
        {
          id: "con",
          name: "Conditions",
          active: ["/diagnostics/conditions","/diagnostics/addconditions"],
          redirection: "/diagnostics/conditions",
        },
        {
          id: "spe",
          name: "Specialities",
          active: ["/diagnostics/specialities","/diagnostics/addspecialities"],
          redirection: "/diagnostics/specialities",
        },
        {
          id: "org",
          name: "Organs",
          active: ["/diagnostics/organs","/diagnostics/addorgans"],
          redirection: "/diagnostics/organs",
        },
      ],
    };
  },
  mounted: function () {
    router.push({
      path: "/diagnostics/tests",
    });
    // this.$store.state.bcrumb.activepage = 'Tests';
    store.commit('SetBreadCrumbActivePage', { pagename: 'Tests' });
    
  },
  methods: {
    Navigate : function ( page, name ) {
      store.commit('SetBreadCrumbActivePage', { pagename: name });
      router.push({
        path: page
      }).catch(() => {});
    },
    AddPage: function () {
      if (this.$route.path == "/diagnostics/tests") {
        router.push({
          path: "/diagnostics/addtests",
        }).catch(()=>{});
      }
      if (this.$route.path == "/diagnostics/profiles") {
        router.push({
          path: "/diagnostics/addprofiles",
        }).catch(()=>{});
      }
      if (this.$route.path == "/diagnostics/categories") {
        router.push({
          path: "/diagnostics/addcategories",
        }).catch(()=>{});
      }
      if (this.$route.path == "/diagnostics/conditions") {
        router.push({
          path: "/diagnostics/addconditions",
        }).catch(()=>{});
      }
      if (this.$route.path == "/diagnostics/specialities") {
        router.push({
          path: "/diagnostics/addspecialities",
        }).catch(()=>{});
      }
      if (this.$route.path == "/diagnostics/organs") {
        router.push({
          path: "/diagnostics/addorgans",
        }).catch(()=>{});
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/globals.scss";

.footer-container {
  background: #fff;
  border-radius: 50px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  bottom: 50px;
  right: 60px;
  z-index: 100;
  box-shadow: 5px 5px 50px #fff;
  padding: 5px;
  border: 1px solid $primary;
  .footer-icons {
    margin-left: 0px;
    cursor: pointer;

    &.page-setting {
      margin-right: 10px;
    }
  }
}
.page-filters {
  position: absolute;
  right: 20px;
  top: 20px;
  .sort-op {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border: 1.5px solid #20A6ED;
    @include apply-font($roboto, $regular, 13px, $primary);
    cursor: pointer;
  }
  .sort-op.active {
    background: $primary;
    color: #fff !important;
  }
  .search-container {
    width: 234px;
    height: 35px;
    border: 1px solid $primary;
    border-radius: 38px;
    display: inline-flex;
    padding: 0px 13px;
    
    input {
      @include remove-input-defaults;
      border: none;
      width: 180px;
      @include apply-font($roboto, $regular, 14px, $primary);

      &::-webkit-input-placeholder {
       @include apply-font($roboto, $regular, 14px, rgba(32,166,237,0.58));
      }
    }
    img.search-icon {
      height: 20px;
      position: absolute;
      top: 8px;
      right: 10px;
    }
    
  }
}

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

