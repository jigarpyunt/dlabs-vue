<template>
    <div class="steps-holder">
      <div class="row" v-if="stepCounter == 1">
        <div class="col-lg-12 step-details">
          <h6>STEP <span>1</span> - <span>Mobile Number Registration</span></h6>
          <div class="step-counter active step1"></div>
          <div class="step-counter step2"></div>
          <div class="step-counter step3"></div>
        </div>
         <div class="col-lg-12 error" v-if="msg.errorMsg">
               {{ msg.errorMsgText }}
         </div>
        <div class="col-lg-12 mobile-registration">
          <form action="">
            <div class="row">
              <div class="col-12 form-group reg-inputcontrols">
                <label for="">Mobile</label>
                <input type="text" placeholder="Enter mobile number" class="form-control" v-model="step1Data.mobile"/>
              </div>
              <div class="col-12 form-group reg-inputcontrols">
                <label for="">Password</label>
                <input type="password" placeholder="Enter password" class="form-control" v-model="step1Data.password"/>
              </div>
              <div class="col-12 form-group reg-inputcontrols">
                <button type="button" class="form-control reg-btn" @click="SaveStepFirst">Save & Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row" v-if="stepCounter == 2">
        <div class="col-lg-12 step-details">
          <h6>STEP <span>2</span> - <span>Verify OTP</span></h6>
          <div class="step-counter active step1"></div>
          <div class="step-counter active step2"></div>
          <div class="step-counter step3"></div>
        </div>
          <div class="col-lg-12 msg" v-if="msg.successMsg">
                OTP has been successfully sent to <span>9149******54</span>
                <h1 v-if="temporaryOTP != null">Your OTP is {{ temporaryOTP }}</h1>
          </div>
          <div class="col-lg-12 msg" v-if="msg.infoMsg">
              {{ msg.infoMsgText }}
          </div>
           <div class="col-lg-12 error" v-if="msg.errorMsg">
            {{ msg.errorMsgText }}
        </div>
        <div class="col-lg-12 mobile-registration">
          <form action="">
            <div class="row">
              <div class="col-12 form-group reg-inputcontrols">
                <label for="">Verify OTP</label>
                <input type="text" placeholder="Enter OTP" class="form-control" v-model="step2Data.otp"/>
              </div>
              <div class="col-12 form-group otp-not-sent">
                OTP not sent ? <a href="">Resent OTP</a>
              </div>
              <div class="col-12 form-group reg-inputcontrols">
                <button type="button" class="form-control reg-btn" @click="SaveStepSecond">Save & Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row" v-if="stepCounter == 3">
        <div class="col-lg-12 step-details">
          <h6>STEP <span>3</span> - <span>Lab Details</span></h6>
          <div class="step-counter active step1"></div>
          <div class="step-counter active step2"></div>
          <div class="step-counter active step3"></div>
        </div>
        <div class="col-lg-12 msg" v-if="msg.successMsg">
            {{ msg.successMsgText }}
        </div>
        <div class="col-lg-12 msg" v-if="msg.infoMsg">
            {{ msg.infoMsgText }}
        </div>
         <div class="col-lg-12 error" v-if="msg.errorMsg">
            {{ msg.errorMsgText }}
        </div>
        <div class="col-lg-12 mobile-registration">
          <form action="">
            <div class="row">
              <div class="col-12 form-group reg-inputcontrols">
                <label for="">Lab Name</label>
                <input type="text" placeholder="Enter lab name" class="form-control" v-model="step3Data.labName" />
              </div>
              <div class="col-12 form-group reg-inputcontrols">
                <label for="">Lab Address</label>
                <textarea type="text" placeholder="Enter lab address" class="form-control labaddress" v-model="step3Data.labAddress"></textarea>
              </div>
              <div class="col-12 form-group reg-inputcontrols">
                <label for="">Lab Tel</label>
                <input type="text" placeholder="Enter lab telephone" class="form-control" v-model="step3Data.labTel"/>
              </div>
              <div class="col-12 form-group reg-inputcontrols">
                <label for="">Lab Email</label>
                <input type="text" placeholder="Enter lab email" class="form-control" v-model="step3Data.labEmail"/>
              </div>
              <div class="col-12 form-group reg-inputcontrols">
                <button type="button" class="form-control reg-btn" @click="SaveStepThird">Save & Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios';
import store from '@/store';
import router from '@/router';
import Swal from 'sweetalert2';

const registrationApi = store.state.api.registrations;
const saveStepUri = '/labregistration';

export default {
  name: "Step1",
  data: function () {
    return {
      swal: false,
      stepCounter: 1,
      temporaryOTP: null,
      serverResponse: null,
      msg: {
        infoMsg: false,
        infoMsgText: '',
        errorMsg: false,
        errorMsgText: '',
        successMsg: false,
        successMsgText: ''
      },
      step1Data: {
        mobile: '',
        password: '',
      },
      step2Data: {
        otp: '',
      },
      step3Data: {
        labName: '',
        labAddress: '',
        labTel: '',
        labEmail: ''
      }
    }
  },
  methods:  {
    showSweetAlert: async function( title, text, icon, showCancelButton, confirmButtonText) {
      return await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: showCancelButton,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmButtonText
      });
    },
    showSpinnerLoader: async function() {
      return await Swal.fire({
        title: 'Please Wait',
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        }
      });
    },
    SaveStepFirst: async function() {
      try {
      this.showSpinnerLoader();
      let response = await axios({
          method: "post",
          url: registrationApi + saveStepUri,
          data: this.step1Data,
          params: {
            step: 1
          }
        });
        if ( response.status == 200 ){
          Swal.close();
          this.temporaryOTP = response.data;
          this.msg.infoMsg = false;
          this.msg.errorMsg = false;
          this.msg.successMsg = true;
          this.stepCounter = 2;

        }
      } catch(e) {
        // console.log(e.response.data);

        // Closing Alert
        Swal.close();

        // Assigning general msg  
        this.msg.errorMsg = true;
        this.msg.errorMsgText = e.response.data['msg'];

        // Assigning specific msg
        if(e.response.data['error'] == true && e.response.data['stepsCompleted'] == 1) {
          this.stepCounter = 2;
          this.msg.successMsg = false;
          this.msg.errorMsg = false;
          this.msg.infoMsg = true;
          this.msg.infoMsgText = e.response.data['msg'];
        }
        if(e.response.data['error'] == true && e.response.data['stepsCompleted'] == 2) {
          this.stepCounter = 3;
          this.msg.successMsg = false;
          this.msg.errorMsg = false;
          this.msg.infoMsg = true;
          this.msg.infoMsgText = e.response.data['msg'];
        }
      }
    },
    SaveStepSecond: async function() {
      try {
       this.showSpinnerLoader();
        let response =  await axios({
            method:'post',
            url: registrationApi + saveStepUri,
            data: this.step2Data,
            params: {
              step: 2,
              mobile: this.step1Data.mobile
            }
        });
         if ( response.status == 200 ){
          Swal.close();
          this.msg.infoMsg = false;
          this.msg.errorMsg = false;
          this.msg.successMsg = true;
          this.stepCounter = 3;
        }
      } catch(e) {
        Swal.close();
        this.msg.infoMsg = false;
        this.msg.successMsg = false;
        this.msg.errorMsg = true; 
        this.msg.errorMsgText = e.response.data['msg'];
      }
    },
    SaveStepThird: async function() {
      try {
        this.showSpinnerLoader();
        let response =  await axios({
            method:'post',
            url: registrationApi + saveStepUri,
            data: this.step3Data,
            params: {
              step: 3,
              mobile: this.step1Data.mobile
            }
        });
         if ( response.status == 200 ){
          Swal.close();
          this.msg.infoMsg = false;
          this.msg.errorMsg = false;
          this.responseMsg = true;
          this.responseText = response.data;
          this.showSweetAlert('Success','Your data has been stored','success', false, 'Ok');
          router.push({ path: '/dashboard', }).catch(() => {});
        }
      } catch (e) {
        Swal.close();
        this.msg.infoMsg = false;
        this.msg.successMsg = false;
        this.msg.errorMsg = true; 
        this.msg.errorMsgText = e.response.data['msg'];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";
.steps-holder {
    width: 526px;
    text-align: left
}
.msg {
  @include apply-font($roboto, $medium, 16px, #2D6426);
  margin-top: 75px;
  letter-spacing: 1.5px;
}
.error {
  @include apply-font($roboto, $medium, 16px, #951717);
  margin-top: 50px;
  letter-spacing: 1.5px;
}
.step-details {
  margin-top: 50px;
  h6 {
    @include apply-font($roboto, $bold, 18px, #707070);
  }
  .step-counter {
    width: 71px;
    height: 8px;
    background: rgba(32, 166, 237, 0.5);
    display: inline-block;
    vertical-align: top;
    margin-right: 31px;
    margin-top: 20px;
    border-radius: 5px;
  }
  .step-counter.active {
    background: rgba(32, 166, 237, 1);
  }
}
.mobile-registration {
    margin-top: 30px;
  .reg-inputcontrols {
    margin-bottom: 25px;
    label {
      @include apply-font($ptsans, $bold, 18px, #000000);
      letter-spacing: 1.5px;
    }
    input,textarea {
      @include remove-input-defaults;
      height: 70px;
      border-radius: 10px;
      border: 2px solid rgba(32, 166, 237, 0.5);
      text-indent: 20px;
      @include apply-font($ptsans, $regular, 18px, rgba(0,0,0,0));
      color: #000000 !important;
      letter-spacing: 1.5px;
    }
    textarea.labaddress {
      height: 124px;
      resize: none;
      padding-top: 20px;
    }
    input::-webkit-input-placeholder { 
        color: rgba(0,0,0,0.40);
    }
    input:focus {
      border: 2px solid rgba(32, 166, 237, 1);
    }
    .reg-btn {
        @include remove-button-defaults;
        height: 70px;
        background: #20A6ED;
        border-radius: 33px;
        @include apply-font($roboto, $bold, 18px, #ffffff);
        text-transform: uppercase;
        letter-spacing: 1.5px;
        margin-top: 55px;
    }
  }
  .otp-not-sent {
       @include apply-font($roboto, $medium, 16px, #000000);
       color: rgba(110,58,68,0.82) !important;
       letter-spacing: 1.5px;

       a {
         color: rgba(18,105,137,0.82);
       }
    }
}
</style>
