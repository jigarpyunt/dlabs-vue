<template>
  <div class="modal-container" @click.self="CloseTestSelections()">
      <div class="content-modal">
          <div class="row">
              <div class="col-lg-7 search-bar">
                  <input type="text" placeholder="Search for your selection" class="form-control">
              </div>
              <div class="col-lg-5 mdoal-options">
                  <button class="select">Select</button>
                  <button class="cancel" @click.self="CloseTestSelections()">Cancel</button>
              </div>    
          </div>
          <div class="row test-tile-container">
              <template v-for="index in 30">
                  <TestTile :key="index" />
              </template>
          </div>

      </div>
  </div>
</template>
<script>
import TestTile from "@/components/diagnostics/TestTile"
export default {
  name: "TestSelections",
  components:  {
      TestTile
  },
  methods: {
    CloseTestSelections: function() {
        this.$store.state.diagnostics.testSelections = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";
.test-tile-container {
    margin-top: 50px;
    min-height: 550px;
    height: 550px;
    overflow-y: scroll;
    padding-top: 10px;

    &::-webkit-scrollbar {
      width: 8px;
  }
  &::-webkit-scrollbar-track {
      width: 8px;
      background: rgba(32,166,237,0.30);
  }
  &::-webkit-scrollbar-button {
      display: none;
  }
  &::-webkit-scrollbar-thumb {
      background: $primary;
  }
  &::-moz-scrollbar {
      width: 8px;
  }
  &::-moz-scrollbar-track {
      width: 8px;
      background: rgba(32,166,237,0.30);
  }
  &::-moz-scrollbar-button {
      display: none;
  }
  &::-moz-scrollbar-thumb {
      background: $primary;
  }
}
.modal-container {
  background: rgba(216, 216, 221, 0.81);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1080;
  display: flex;
  justify-content: center;
  align-items: center;
  .content-modal {
      width: 1200px;
      border-radius: 20px;
      background: #FFFFFF;
      padding: 50px 100px;
      height: 732px;
  }
  .mdoal-options {
      button {
          @include remove-button-defaults;
          width: 150px;
          height: 52px;
          border-radius: 26px;
          @include apply-font($roboto, $bold, 16px, #fff);
          text-transform: uppercase;
          letter-spacing: 1.06px;
      }
      button.select {
          background: $primary;
      }
      button.cancel {
          background: $blk;
          margin-left: 50px;
      }
  }
}
.search-bar {
    input {
        @include remove-input-defaults;
        border: none;
        border-radius: 0px;
        border-bottom: 2px solid rgba(32,166,237,0.50);
        @include apply-font($ptsans, $regular, 14px, #000);
        letter-spacing: 1.5px;
        width: 300px;


        &::-webkit-input-placeholder {
            @include apply-font($ptsans, $regular, 11px, rgba(60,55,55,0.36));
        }  
    }
    input:focus {
        border-color: #20A6ED;
    }
}
</style>