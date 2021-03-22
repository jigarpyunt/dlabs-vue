<template>
  <div class="modal-container" @click.self="CloseViewProfileModal()">
    <div class="content-modal">
      <div class="row">
        <div class="col-lg-12 header">
          <!-- Edit Icon  -->
          <img src="@/assets/icons/edit-lg-white.svg" alt="#" />
          <div class="row">
            <div class="col-lg-12 pill-navigation">
              <div
                href="javascript:void(0)"
                :class="
                  activePills.first ? 'pill-toggler active' : 'pill-toggler'
                "
                @click="ChangePill('first')"
              ></div>
              <div
                href="javascript:void(0)"
                :class="
                  activePills.second ? 'pill-toggler active' : 'pill-toggler'
                "
                @click="ChangePill('second')"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-if="activePills.first">
        <div class="col-lg-10 view-data">
          <div class="row">
            <div class="col-4">
              <label> Profile Name </label>
              <div class="data-viewer-inp">Lipid Profile</div>
            </div>
            <div class="col-4">
              <label> Profile Availibility </label>
              <div class="data-viewer-inp">5 Days</div>
            </div>
          </div>
          <div class="row">
               <div class="col-8">
              <label> Tests In Profile </label>
              <div class="data-viewer-textarea">
                  <span class="test-badge">Test 1</span>
                  <span class="test-badge">Test 2</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-if="activePills.second">
        <div class="col-lg-10 view-data">
          <div class="row">
            <div class="col-8">
              <label> Profile Pre Test Information </label>
              <div class="data-viewer-textarea">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem
                IpsumLorem Ipsum…
              </div>
            </div>
             <div class="col-12">
                <label> Pre Test Description </label>
                <div class="data-viewer-textarea">
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                  IpsumLorem IpsumLorem Ipsum…
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewProfile",
  components: {},
  data: function () {
    return {
      activePills: {
        first: true,
        second: false,
      },
    };
  },
  methods: {
    CloseViewProfileModal: function () {
      this.$store.state.diagnostics.viewProfile = false;
    },
    ChangePill: function (pill) {
      this.activePills = {
        first: false,
        second: false,
      };
      this.activePills[pill] = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";

.pill-navigation {
  text-align: left;
  display: flex;
  align-items: center;
  height: 127px;

  .pill-toggler {
    width: 40px;
    height: 10px;
    border-radius: 6px;
    background: #eaeaea;
    display: inline-block;
    cursor: pointer;
  }
  .pill-toggler:last-child {
    margin-left: 20px;
  }
  .pill-toggler.active {
    background: #78d99a;
  }
}

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
    background: rgba(32, 166, 237, 0.3);
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
    background: rgba(32, 166, 237, 0.3);
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
    background: #ffffff;
    padding: 0px 15px;
    height: 732px;

    .header {
      height: 127px;
      background: rgba(32, 166, 237, 0.72);
      border-radius: 20px 20px 0px 0px;
      padding: 0px 100px;

      img {
        position: absolute;
        right: 100px;
        top: 53px;
        cursor: pointer;
      }
    }
    .view-data {
      padding: 50px 100px;
      text-align: left;
      label {
        @include apply-font($ptsans, $regular, 14px, #000);
      }
      .data-viewer-inp,
      .data-viewer-textarea {
        border: 1px solid #20a6ed;
        border-radius: 5px;
        @include apply-font($roboto, $regular, 13px, #000);
        height: 38px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        margin-bottom: 30px;
      }
      .data-viewer-textarea {
        height: 200px;
        align-items: flex-start;
        padding-top: 20px;
      }
      .test-badge {
          background: $active-state;
          padding: 3px 15px;
          border-radius: 8px;
          @include apply-font($roboto, $bold, 13px, #fff);
          letter-spacing: 1.05px;
          margin-right: 10px;

      }
    }
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
</style>