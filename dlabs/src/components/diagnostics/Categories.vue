<template>
<div class="row category-box-container">
  <!-- Test Tile -->
  <div class="col-lg-2" v-for="category in categories" :key="category.name">
    <div class="col-12 category-box">
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
       <img
        src="@/assets/icons/edit-sm-dark.svg"
        alt="#"
        class="tile-edit"
      />

      <div class="row">
        <div class="col-12 test-details">
          <h6 :title="category.name">{{ category.name.length > 14 ? `${category.name.substring(0,11)}...` : category.name  }}</h6>
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
const getCategoriesUri = "/categories";

export default {
  name: "Categories",
  data: function() {
    return {
      categories: []
    }
  },
  methods: {
    async GetAllCategories() {
      try {
        let categories = await axios({
          method: "get",
          url: diagnosticsApi + getCategoriesUri,
        });
        this.categories = categories.data
      } catch (err) {
        if (err.response.status == 400) {
          this.validators.error = err.response.data;
        }
      }
    }
  },
  mounted: function() {
    this.GetAllCategories();
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/globals.scss";

.category-box-container {
  margin-top: 50px;
}
.category-box {
  text-align: left;
  height: 53px;
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
    top: 18px;
    right: 19px;
    cursor: pointer;
    z-index: 100;
  }
  .tile-edit {
    position: absolute;
    top: 18px;
    right: 40px;
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
.category-box:hover {
  border-color: $primary;
}
</style>