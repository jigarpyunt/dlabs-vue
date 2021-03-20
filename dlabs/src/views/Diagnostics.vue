<template>
  <div>
    <TestSelections v-if="$store.state.diagnostics.testSelections" />
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
        <PageMetadata :metadata="pageMetaData" />
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
import PageMetadata from "@/components/diagnostics/PageMetadata";
import TestSelections from "@/components/diagnostics/TestSelections";

export default {
  name: "Dashboard",
  components: {
    Aside,
    Header,
    PageMetadata,
    Breadcrumb,
    PageContent,
    TestSelections,
  },
  data: function () {
    return {
      pageMetaData: [
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
          active: ["/diagnostics/testcategories"],
          redirection: "/diagnostics/testcategories",
        },
        {
          id: "con",
          name: "Conditions",
          active: ["/diagnostics/testconditions"],
          redirection: "/diagnostics/testconditions",
        },
        {
          id: "spe",
          name: "Specialities",
          active: ["/diagnostics/testspecialities"],
          redirection: "/diagnostics/testspecialities",
        },
        {
          id: "org",
          name: "Organs",
          active: ["/diagnostics/testorgans"],
          redirection: "/diagnostics/testorgans",
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
    AddPage: function () {
      if (this.$route.path == "/diagnostics/tests") {
        router.push({
          path: "/diagnostics/addtests",
        });
      }
      if (this.$route.path == "/diagnostics/profiles") {
        router.push({
          path: "/diagnostics/addprofiles",
        });
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
</style>

