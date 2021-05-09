<template>
  <div>
    <div class="row">
      <div class="col-lg-12 pill-navigation">
        <div
          href="javascript:void(0)"
          :class="activePills.first ? 'pill-toggler active' : 'pill-toggler'"
          @click="ChangePill('first')"
        ></div>
        <div
          href="javascript:void(0)"
          :class="activePills.second ? 'pill-toggler active' : 'pill-toggler'"
          @click="ChangePill('second')"
        ></div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7">
        <div
          class="alert alert-danger"
          v-if="validators.error != null"
          style="text-align: left"
        >
          {{ validators.error }}
        </div>
      </div>
    </div>
    <div class="row" v-if="activePills.first">
      <div class="col-lg-7 form-data">
        <div class="form-row">
          <div class="col-lg-4 form-group">
            <label for="">Test Name</label>
            <input
              type="text"
              placeholder="Specify test name"
              class="form-control"
              v-model="testData.name"
            />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Unit</label>
            <input
              type="text"
              placeholder="Specify test unit mg/dl"
              class="form-control"
              v-model="testData.unit"
            />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Range</label>
            <input
              type="text"
              placeholder="Specify test range  12.0 - 30.9"
              class="form-control"
              v-model="testData.range"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-4 form-group">
            <label for="">Test Price</label>
            <input
              type="text"
              placeholder="Specify test price 1500"
              class="form-control"
              v-model="testData.price"
            />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Code Prefix</label>
            <input
              type="text"
              placeholder="Specify test prefix LIP"
              class="form-control"
              v-model="testData.codePrefix"
              @keyup="GenerateCodeWithPrefix"
              @keypress="ValidateCodePrefix($event)"
            />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Code</label>
            <span class="testcode-gen">
              {{
                testData.codePrefix != null
                  ? testData.codePrefix + testData.code
                  : testData.code
              }}
              <!-- Getting Generated Dynamically -->
            </span>
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-12 form-group">
            <label for="">Pre Test Information</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="form-control"
              placeholder="Specify pre test information"
              v-model="testData.preTestInformation"
              @keypress.ctrl="ValidateTextarea($event, 'preTestInformation')"
            ></textarea>
            <h6 class="textarea-count">
              <span class="left">{{
                testData.preTestInformation != null
                  ? testData.preTestInformation.length
                  : "0"
              }}</span>
              / 1000
            </h6>
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-12 form-buttons">
            <button class="next" @click="ChangePill('second')">Next</button>
            <button class="save" @click="SaveTest">Save</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="activePills.second">
      <div class="col-lg-7 form-data">
        <div class="form-row">
          <div class="col-lg-4 form-group">
            <label for="">Test Speciality</label>
            <input
              list="specialities"
              type="text"
              readonly
              placeholder="Pick one"
              class="form-control"
              v-model="testData.speciality.name"
              @click="ShowDropdown('speciality')"
              @mouseleave.native="CloseDropdown('speciality')"
            />
            <DropdownContainer v-if="dropdownStates.speciality" @mouseleave.native="CloseDropdown('speciality')">
              <template v-slot:dd-search>
                <input type="text" placeholder="Type here to search" />
              </template>
              <template v-slot:dd-list>
                <li v-for="speciality in specialities" :key="speciality._id" @click="SetSpeciality(speciality.name, speciality._id)">
                  {{ speciality.name }}
                </li>
              </template>
            </DropdownContainer>
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Methodology</label>
            <input
              type="text"
              placeholder="Pick one"
              readonly
              class="form-control"
              v-model="testData.methadology.name"
              @click="ShowDropdown('methadology')"

            />
            <DropdownContainer v-if="dropdownStates.methadology" @mouseleave.native="CloseDropdown('methadology')">
              <template v-slot:dd-search>
                <input type="text" placeholder="Type here to search" />
              </template>
              <template v-slot:dd-list>
                 <li v-for="methadology in methadologies" :key="methadology._id" @click="SetMethadology(methadology.name, methadology._id)">
                  {{ methadology.name }}
                </li>
                <li>By Calculation</li>
              </template>
            </DropdownContainer>
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Category</label>
            <input
              list="categories"
              type="text"
              readonly
              placeholder="Pick one"
              class="form-control"
              v-model="testData.category.name"
              @click="ShowDropdown('category')"

            />
            <DropdownContainer v-if="dropdownStates.category" @mouseleave.native="CloseDropdown('category')">
              <template v-slot:dd-search>
                <input type="text" placeholder="Type here to search" />
              </template>
              <template v-slot:dd-list>
                <li v-for="category in categories" :key="category._id" @click="SetCategory(category.name, category._id)">
                  {{ category.name }}
                </li>
              </template>
            </DropdownContainer>
            
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-4 form-group">
            <label for="">Report Availibility Time</label>
            <input
              list="availibilites"
              type="text"
              readonly
              placeholder="2 days"
              class="form-control"
              v-model="testData.reportAvalibilityTime"
              @click="ShowDropdown('reportAvailibility')"

            />
             <DropdownContainer v-if="dropdownStates.reportAvailibility" @mouseleave.native="CloseDropdown('reportAvailibility')">
              
              <template v-slot:dd-list>
                <li  @click="SetReportAvailibility('One Day')">
                 One Day
                </li>
                <li  @click="SetReportAvailibility('Within 2 Days')">
                 Within 2 Days
                </li>
                <li  @click="SetReportAvailibility('Less than 5 days')">
                 Less than 5 days
                </li>
                <li  @click="SetReportAvailibility('Greater than 5 days')">
                 Greater than 5 days
                </li>
              </template>
            </DropdownContainer>
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-12 form-group">
            <label for="">Test Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="form-control"
              placeholder="Specify pre test description"
              v-model="testData.description"
            ></textarea>
            <h6 class="textarea-count">
              <span class="left">{{
                testData.description != null
                  ? testData.description.length
                  : "0"
              }}</span>
              / 1000
            </h6>
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-12 form-buttons">
            <button class="previous" @click="ChangePill('first')">
              Previous
            </button>
            <button class="save" @click="SaveTest">Save</button>
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
const saveTestUri = "/tests";
const getSpecialitiesUri = "/specialities";
const getMethadologiesUri = "/methadologies";
const getCategoriesUri = "/categories";

import DropdownContainer from "@/components/global/DropdownContainer";

export default {
  name: "AddTests",
  components: {
    DropdownContainer,
  },
  data: function () {
    return {
      activePills: {
        first: true,
        second: false,
      },
      dropdownStates: {
        speciality: false,
        methadology: false,
        condition: false,
        category: false,
        reportAvalibility: false
      },
      specialities: null,
      categories: null,
      methadologies: null,
      organs: null,
      testData: {
        name: "",
        unit: "",
        range: "",
        price: "",
        codePrefix: "",
        code: this.GenerateCodeWithoutPrefix(),
        preTestInformation: "",
        speciality: {
          name: "",
          id: ""
        },
        methadology: {
          name: "",
          id: ""
        },
        category: {
          name: "",
          id: ""
        },
        reportAvalibilityTime: "",
        description: "",
      },
      validators: {
        error: null,
      },
    };
  },
  methods: {
    ChangePill: function (pill) {
      this.activePills = {
        first: false,
        second: false,
      };
      this.activePills[pill] = true;
    },
    ShowDropdown: function( dropdown ) {
        this.dropdownStates =  {
          speciality: false,
          methadology: false,
          condition: false,
          category: false
        };
        this.dropdownStates[dropdown] = true;
    },
    CloseDropdown: function( dropdown ) {
      this.dropdownStates =  {
          speciality: false,
          methadology: false,
          condition: false,
          category: false
        };
      this.dropdownStates[dropdown] = false;
    },
    ValidateTextarea: function (event, textarea) {
      if (this.testData[textarea].length > 20) {
        event.preventDefault();
      }
    },
    GenerateCodeWithoutPrefix() {
      let dateObj = new Date();
      let code = `${
        dateObj.getMonth() + 1
      }${dateObj.getDay()}${dateObj.getSeconds()}${dateObj.getMilliseconds()}`;
      return code;
    },
    GenerateCodeWithPrefix() {
      this.testData.codePrefix = this.testData.codePrefix.toUpperCase();
    },
    ValidateCodePrefix(event) {
      if (this.testData.codePrefix.length == 4) {
        event.preventDefault();
      }
    },
    async GetSpecialites() {
      try {
        let specialities = await axios({
          method: "get",
          url: diagnosticsApi + getSpecialitiesUri,
        });
        this.specialities = specialities.data;
      } catch (err) {
        console.log(err.response);
      }
    },
    async GetMethadologies() {
      try {
        let methadologies = await axios({
          method: "get",
          url: diagnosticsApi + getMethadologiesUri,
        });
        this.methadologies = methadologies.data;
      } catch (err) {
        console.log(err.response);
      }
    },
    async GetCategories() {
      try {
        let categories = await axios({
          method: "get",
          url: diagnosticsApi + getCategoriesUri,
        });
        this.categories = categories.data;
      } catch (err) {
        console.log(err.response);
      }
    },
    SetSpeciality( speciality, id ) {
      this.testData.speciality = {
        name: speciality,
        id: id
      }
      this.CloseDropdown('speciality')
    },
    SetMethadology( methadology, id ) {
      this.testData.methadology= {
        name: methadology,
        id: id
      }
      this.CloseDropdown('methadology')
    },
    SetCategory( category, id ) {
      this.testData.category = {
        name: category,
        id: id
      }
      this.CloseDropdown('category')
    },
    SetReportAvailibility( reportAvailibility ) {
      this.testData.reportAvalibilityTime = reportAvailibility
      this.CloseDropdown('speciality')
    },
    async SaveTest() {
      try {
        let response = await axios({
          method: "post",
          url: diagnosticsApi + saveTestUri,
          data: this.testData,
        });
        if( response.status == 200 ) {
            swal.fire({
              title: 'Success',
              text: 'Test Saved Successfully',
              icon: 'success'
            });
            router.push('/diagnostics/tests');
        }
      } catch (err) {
        if (err.response.status == 400) {
          this.validators.error = err.response.data;
        }
      }
    },
  },
  mounted: async function () {
    await this.GetSpecialites();
    await this.GetMethadologies();
    await this.GetCategories();
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
  .form-buttons {
    text-align: left;
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
    width: 500px;
    height: 152px;
  }
  textarea:focus {
    border-color: #20a6ed;
  }

  .form-buttons {
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
    button:last-child {
      margin-left: 20px;
    }
  }
}
</style>