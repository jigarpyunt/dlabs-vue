<template>

  <!-- Test Tile -->
  <div class="col-lg-3">
    <div class="col-12 test-box">
      <!-- Checker -->
      <img
        src="@/assets/icons/tile-checker-unactive.svg"
        alt="#"
        class="tile-checker"
        v-if="false"
      />


      <div class="row">
        <div class="col-12 test-details">
          <h6>Brucella Vedal</h6>
          <h5>BRC04567</h5>
        </div>
        <span class="category-tag">Pathology</span>
        <!-- <img src="@/assets/icons/sep.svg" alt="#" class="sep"> -->
        <div class="col-12 test-pricing">
          <h6><img src="@/assets/icons/rupee-sign.svg" alt="#" /> 1499/-</h6>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "TestTile",
};
</script>
<style lang="scss">
@import "@/assets/scss/globals.scss";

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