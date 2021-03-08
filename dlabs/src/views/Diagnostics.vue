<template>
  <div>
    <Aside />
    <Header />
    <PageContent>
      <template v-slot:header>
        <Breadcrumb />
      </template>
      <template v-slot:main>
        <PageMetadata />

        <!-- Text Box Container -->
        <div class="row test-box-container">
          <template v-for="index in 28">
            <TestBox :key="index" />
          </template>
        </div>
      </template>
      <template v-slot:footer>
          <div class="footer-container">
            <!-- Page Setting and Page Add Data -->
            <img src="@/assets/icons/page-setting.svg" alt="#" class="footer-icons page-setting">
            <img src="@/assets/icons/add-page-data.svg" alt="#" class="footer-icons add-page-data">
          </div>
      </template>
    </PageContent>
  </div>
</template>
<script>
import Aside from "@/components/global/Aside";
import Header from "@/components/global/Header.vue";
import PageContent from "@/components/global/PageContent";
import Breadcrumb from "@/components/global/Breadcrumb";
import PageMetadata from "@/components/diagnostics/PageMetadata";
import TestBox from "@/components/diagnostics/TestBox";

export default {
  name: "Dashboard",
  components: {
    Aside,
    Header,
    PageMetadata,
    Breadcrumb,
    PageContent,
    TestBox,
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/globals.scss";

.test-box-container {
  margin-top: 50px;
}
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

