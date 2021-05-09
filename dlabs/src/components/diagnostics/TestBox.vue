<template>
<div class="row test-box-container">
  <!-- Test Tile -->
  <div class="col-lg-2" v-for="test in tests" :key="test._id">

    <div class="col-12 test-box" @click="ViewTest(test._id)">
      <!-- Checker -->
      <img
        src="@/assets/icons/tile-checker-unactive.svg"
        alt="#"
        class="tile-checker"
        v-if="false"
      />
      <!-- Trashbin -->
      <img
        src="@/assets/icons/trash-sm-dark.svg"
        alt="#"
        class="tile-trashbin"
      />

      <div class="row">
        <div class="col-12 test-details">
          <h6 :title="test.name">{{ test.name.length > 14 ? `${test.name.substring(0,11)}...` : test.name}}</h6>
          <h5>{{ test.codePrefix + test.code }}</h5>
        </div>
        <span class="category-tag" :title="test.category.name">{{ test.category.name.length > 14 ? `${test.category.name.substring(0,11)}...` : test.category.name }}</span>
        <!-- <img src="@/assets/icons/sep.svg" alt="#" class="sep"> -->
        <div class="col-12 test-pricing">
          <h6><img src="@/assets/icons/rupee-sign.svg" alt="#" /> {{ test.price }}/-</h6>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
import axios from "axios";
import store from "@/store";

const diagnosticsApi = store.state.api.diagnostics;
const getTestsUri = "/tests";

export default {
  name: "TestBox",
  data: function() {
    return {
      tests: [],
    }
  },
  methods: {
    async ViewTest (_id) {
      try {
        let test = await axios({
          method: "get",
          url: diagnosticsApi + getTestsUri,
          params:  {
            id: _id
          }
        });
        store.dispatch('ViewTestData', test.data);
        this.$store.state.diagnostics.viewTest = true;

      } catch (err) {
        if (err.response.status == 400) {
          this.validators.error = err.response.data;
        }
      }

    },
    async GetAllTests() {
      try {
        let tests = await axios({
          method: "get",
          url: diagnosticsApi + getTestsUri,
        });
        this.tests = tests.data
      } catch (err) {
        if (err.response.status == 400) {
          this.validators.error = err.response.data;
        }
      }
    }
  },
  mounted: function() {
    this.GetAllTests();
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/globals.scss";

.test-box-container {
  margin-top: 50px;
}
.test-box {
  text-align: left;
  height: 109px;
  border-radius: 13px;
  border: 2px solid transparent;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.16);
  padding: 15px;
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;

  .tile-checker {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 100;
  }
  .tile-trashbin {
    position: absolute;
    bottom: 14px;
    right: 19px;
    cursor: pointer;
    z-index: 100;
  }

  .test-details {
    h6 {
      @include apply-font($roboto, $bold, 14px, #504e4e);
      letter-spacing: 1.5px;
      margin: 0;
    }
    h5 {
      @include apply-font($roboto, $bold, 14px, #504e4e);
      color: #1859c3 !important;
      letter-spacing: 1.3px;
    }
  }
  .category-tag {
    background: $active-state;
    margin-left: 15px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    @include apply-font($roboto, $bold, 10px, #fff);
  }
  .sep {
    width: 100%;
    margin-top: 8px;
  }
  .test-pricing {
    margin-top: 10px;
    margin-left: 5px;
    h6 {
      color: #149a5c;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
.test-box:hover {
  border-color: $primary;
}
</style>