<template>
  <div class="row">
    <div class="col-lg-3 profile-tile-outlet">
      <div class="col-12 profile-tile">
        <div class="row">
          <div class="col-12 profile-details">
            <h6>Lipid Profile</h6>
            <h5>LIP019489</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-6 comp">
            <h6>Components</h6>
            <div class="col-12 components">
                <h6>5 + comp</h6>
            </div>
          </div>
          <div class="col-6 report">
            <h6>Report Availibility</h6>
            <div class="col-12 report-avail">
                 <h6>In 5 Days</h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 status">
            <h6>Status</h6>
            <div class="status-switch">
              <div class="switch-togg"></div>
            </div>
          </div>
          <div class="col-6 created-by">
            <h6>Created By</h6>
            <h5>Sheikh Asif <img src="@/assets/images/info.svg" alt="#"/> </h5>
          </div>
        </div>
       <div class="col-lg-12 bottom-options">
           <div class="row">
               <div class="col-6 price">
                   <span><img src="@/assets/images/rupee.svg" alt="#"> 400/-</span>
               </div>
               <div class="col-6 actions">
                   <img src="@/assets/images/edit.svg" alt="#">
                   <img src="@/assets/images/trash.svg" alt="#">
               </div>
           </div>
       </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TestProfileTile",
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";
 .profile-tile-outlet {
     flex-basis: 22% !important;
     max-width: 22% !important;
 }
.profile-tile {
  text-align: left;
  height: 205px;
  background: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.16);
  border: 1px solid $primary;
  margin: 50px 0px 50px 0px;
  padding: 20px;

  .profile-details {
    h6 {
      @include apply-font($roboto, $bold, 14px, #000);
      letter-spacing: 1.05px;
      margin-bottom: 0;
    }
    h5 {
      @include apply-font($exo2, $bold, 12px, #1859c3);
      letter-spacing: 1.05px;
    }
  }
  .comp, 
  .report {
        h6{
        @include apply-font($ptsans, $regular, 12px, #000);
        letter-spacing: 1.05px;
        margin-top: 10px;
      }
      
  }
  .components,
  .report-avail {
      height: 20px;
      border-radius: 10px;
      background: $primary;
      display: flex;
      align-items: center;
      justify-content: center;
    h6 {
      @include apply-font($roboto, $medium, 11px, #ffffff);
      margin-bottom: 2px;
        margin-top: 0px;

    }
  }
  .status {
    h6 {
      @include apply-font($ptsans, $regular, 12px, #000);
      letter-spacing: 1.05px;
      margin-top: 10px;
    }
    .status-switch {
        width:26px;
        height: 10px;
        background: #a2efcc;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
        .switch-togg {
          width: 14px;
          height: 14px;
          background: #22d1a2;
          border-radius: 14px;
          position: absolute;
          right: 0;
          top: -2px;
        }
      }
  }
  .created-by {
    h6 {
      @include apply-font($ptsans, $regular, 12px, #000);
      letter-spacing: 1.05px;
      margin-top: 10px;
    }   
    h5 {
        @include apply-font($roboto, $regular, 10px, #000);
        letter-spacing: 1.05px;
        img {
            margin-left: 2px;
        }
    }
  }
  .bottom-options {
      position: absolute;
      left:0;
      bottom:0;
      height: 36px;
      background: rgba(32,166,237,0.69);
      .price,
      .actions {
          height: 36px;
          display: flex;
          align-items: center;
      }
      .price {
          span {
            @include apply-font($roboto, $bold, 14px, #fff);
            margin-left: 7px;

          }
      }
      .actions {
          justify-content: flex-end;

          img {
             margin-right: 13px;
             cursor: pointer;
          }
      }
  }
}
.profile-tile:hover {
  border: 1px solid $primary;
}
</style>