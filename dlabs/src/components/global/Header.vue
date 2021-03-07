<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 option-panels">
              <div class="icon-container">
                <img src="@/assets/icons/bell.svg" alt="#" />
                <div class="has-unseen-notification"></div>
              </div>
              <div class="icon-container">
                <img src="@/assets/icons/messages.svg" alt="#" />
                <div class="has-unseen-messages"></div>
              </div>
            </div>
            <div class="col-lg-6 accounts-panel">
              <div class="account">
                <h6 class="account-holder">
                  Welcome, <span>Sheikh Asif</span>
                </h6>
                <h5 class="role">Administrator</h5>
                <!-- Account Image -->
                <img
                  class="account-dp"
                  src="@/assets/images/account-dummy.jpg"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss">
@import "@/assets/scss/globals.scss";

header {
  height: 80px;
  width: 94.6%;
  background: #fff;
  position: fixed;
  left: 91px;

  .option-panels {
    text-align: left;
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0px 60px 0px 60px;

    .icon-container {
      position: relative;
      img {
        margin-right: 20px;
      }
      .has-unseen-notification,
      .has-unseen-messages {
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background: #eb5959;
        position: absolute;
        top: 5px;
      }
      .has-unseen-notification {
        right: 20px;
      }
      .has-unseen-messages {
        right: 17px;
      }
    }
  }
  .account {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    height: 80px;
    padding: 0px 85px 0px 60px;
    position: relative;

    .account-holder {
      @include apply-font($roboto, $bold, 16px, #20a6ed);
      letter-spacing: 2px;
      margin-bottom: 4px;
    }
    .role {
      @include apply-font($roboto, $regular, 16px, #145e86);
      font-style: italic;
      letter-spacing: 2px;
      margin: 0;
    }
    .account-dp {
      position: absolute;
      right: 0;
      top: 10px;
    }
  }
}
</style>