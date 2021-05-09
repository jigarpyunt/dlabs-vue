<template>
  <div>
    <div class="row">
      <div class="information-box">
        <div class="row">
          <div class="col-12 head">
            <img src="@/assets/images/information-icon.svg" alt="#" />
            <span>Information</span>
          </div>
          <div class="col-12 body">
            <p>
              Speciality are used to define the patient which test comes under
              which speciality to present the information about the test like
              <b>Cardiology, Neurology</b> etc
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div
          class="alert alert-danger"
          v-if="validators.error != null"
          style="text-align: left"
        >
          {{ validators.error }}
        </div>
      </div>
      <div class="col-lg-7 form-data">
        <div class="form-row">
          <div class="col-lg-4 form-group">
            <label for="">Speciality Name</label>
            <input
              type="text"
              placeholder="Specify speciality name"
              class="form-control"
              v-model="specialityData.name"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-9 form-group">
            <label for="">Speciality Description</label>
            <textarea
              name=""
              id=""
              cols="20"
              rows="10"
              class="form-control small"
              placeholder="Specify speciality description"
              v-model="specialityData.description"
            ></textarea>
            <h6 class="textarea-count"><span class="left">0</span> / 1000</h6>
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-12 form-buttons">
            <button class="save" @click="SaveSpeciality">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import store from "@/store";
import router from "@/router";
import swal from 'sweetalert2';


const diagnosticsApi = store.state.api.diagnostics;
const saveSpecialityUri = "/specialities";

export default {
  name: "AddCategories",
  components: {},
  data: function () {
    return {
      specialityData: {
        name: "",
        description: "",
      },
      validators: {
        error: null,
      },
    };
  },
  methods: {
    async SaveSpeciality() {
      try {
        let response = await axios({
          method: "post",
          url: diagnosticsApi + saveSpecialityUri,
          data: this.specialityData,
        });
        if( response.status == 200 ) {
            swal.fire({
              title: 'Success',
              text: 'Speciality Saved Successfully',
              icon: 'success'
            });
            router.push('/diagnostics/specialities');
        }
      } catch (err) {
        if (err.response.status == 400) {
          this.validators.error = err.response.data;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";

.pill-navigation {
  text-align: left;
  margin-top: 30px;
  margin-bottom: 30px;
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
.testcode-gen {
  display: block;
  width: 118px;
  height: 27px;
  border-radius: 12px;
  background: #37dbb5;
  padding: 4px 15px;
  letter-spacing: 1.4px;
  @include apply-font($ptsans, $bold, 12px, #fff);
}
.form-data {
  .form-group {
    text-align: left;
    margin-bottom: 50px;
    padding-right: 50px;
  }
  label {
    @include apply-font($ptsans, $regular, 14px, #000);
    letter-spacing: 1.5px;
  }
  input[type="text"] {
    @include remove-input-defaults;
    border: none;
    border-radius: 0px;
    border-bottom: 2px solid rgba(32, 166, 237, 0.5);
    @include apply-font($ptsans, $regular, 14px, #000);
    letter-spacing: 1.5px;

    &::-webkit-input-placeholder {
      @include apply-font($ptsans, $regular, 11px, rgba(60, 55, 55, 0.36));
    }
  }
  input[type="text"]:focus {
    border-bottom: 2px solid #20a6ed;
  }

  .textarea-count {
    position: absolute;
    right: 50px;
    top: 0px;
  }

  textarea {
    @include remove-textarea-defaults;
    height: 197px;
    max-height: 197px;
    overflow-y: scroll;
    text-indent: 10px;
    border: 2px solid rgba(32, 166, 237, 0.5);
    @include apply-font($ptsans, $regular, 14px, #000);
    letter-spacing: 1.5px;
    padding-top: 20px;
    resize: none;
  }

  textarea.small {
    height: 152px;
  }
  textarea:focus {
    border-color: #20a6ed;
  }
  .browse {
    @include remove-button-defaults;
    width: 124px;
    height: 36px;
    border-radius: 9px;
    @include apply-font($roboto, $bold, 15px, #fff);
    background: #37dbb5;
    text-transform: uppercase;
  }
  .form-buttons {
    text-align: left;
    button {
      @include remove-button-defaults;
      width: 124px;
      height: 36px;
      border-radius: 9px;
      @include apply-font($roboto, $bold, 15px, #fff);
      text-transform: uppercase;
    }
    button.save {
      background: #20a6ed;
    }
    button.next {
      background: #37dbb5;
    }
    button.previous {
      background: #37dbb5;
    }
  }
}

.information-box {
  text-align: left;
  width: 634px;
  min-height: 140px;
  border-radius: 15px;
  background: #d1ecf1;
  border: 1px solid #bee5eb;
  padding: 20px;
  margin: 50px 0px 50px 0px;

  .head {
    span {
      margin-left: 20px;
      @include apply-font($roboto, $bold, 14px, #0c5460);
    }
  }
  .body {
    p:first-child {
      margin-top: 20px;
    }
    p {
      @include apply-font($roboto, $regular, 14px, #0c5460);
      line-height: 20px;
    }
  }
}
</style>