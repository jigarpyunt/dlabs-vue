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
        <div class="alert alert-danger" v-if="validators.error != null" style="text-align: left">
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
              {{ testData.codePrefix !=null ? testData.codePrefix + testData.code : testData.code  }}
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
            <input list="specialities" type="text" placeholder="Liver" class="form-control" v-model="testData.speciality"/>
            <datalist id="specialities">
                <template v-for="speciality in specialities">
                  <option :value="speciality.name" :key="speciality._id" />
                </template>
            </datalist>
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Organ</label>
            <input type="text" placeholder="Heart" class="form-control" v-model="testData.organ"/>
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Condition</label>
            <input list="conditions" type="text" placeholder="Fever" class="form-control" v-model="testData.condition" />
            <datalist id="conditions">
                <template v-for="condition in conditions">
                  <option :value="condition.name" :key="condition._id" />
                </template>
            </datalist>
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-4 form-group">
            <label for="">Test Category</label>
            <input list="categories" type="text" placeholder="Hametology" class="form-control" v-model="testData.category"/>
            <datalist id="categories">
                <template v-for="category in categories">
                  <option :value="category.name" :key="category._id" />
                </template>
            </datalist>
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Report Availibility Time</label>
            <input list="availibilites" type="text" placeholder="2 days" class="form-control" v-model="testData.reportAvalibilityTime"/>
             <datalist id="availibilites">
                <option value="One Day" />
                <option value="Within 2 Days" />
                <option value="Less than 5 days" />
                <option value="Greater than 5 days" />
            </datalist>
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
              v-model="testData.testDescription"
            ></textarea>
            <h6 class="textarea-count">
              <span class="left">{{
                testData.testDescription != null
                  ? testData.testDescription.length
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

const diagnosticsApi = store.state.api.diagnostics;
const saveTestUri = '/tests';
const getSpecialitiesUri = '/specialities'
const getConditionsUri = '/conditions'
const getOrgansUri = '/organs'
const getCategoriesUri = '/categories'


export default {
  name: "AddTests",
  components: {},
  data: function () {
    return {
      activePills: {
        first: true,
        second: false,
      },
      specialities: null,
      categories: null,
      conditions: null,
      organs: null,      
      testData: {
        name: "",
        unit: "",
        range: "",
        price: "",
        codePrefix: "",
        code: this.GenerateCodeWithoutPrefix(),
        preTestInformation: "",
        speciality: "",
        organ: "",
        condition: "",
        category: "",
        reportAvalibilityTime: "",
        description: ""
      },
      validators: {
        error: null
      }
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
    ValidateTextarea: function(event, textarea) {
        if( this.testData[textarea].length > 20 ) {
            event.preventDefault();
        }
    },
    GenerateCodeWithoutPrefix() {
      let dateObj = new Date();
      let code = `${(dateObj.getMonth() + 1)}${dateObj.getDay()}${dateObj.getSeconds()}${dateObj.getMilliseconds()}`;
      return code;
    },
    GenerateCodeWithPrefix() {
       this.testData.codePrefix = this.testData.codePrefix.toUpperCase();
    },
    ValidateCodePrefix (event) {
        if( this.testData.codePrefix.length == 4 ) {
          event.preventDefault();
        } 
    },
    async GetSpecialites() {
      try {
       let specialities = await axios({
          method: 'get',
          url: diagnosticsApi + getSpecialitiesUri
        });
        this.specialities = specialities.data;
      } catch( err ) {
        console.log(err.response);
      }
    },
    async GetOrgans() {
      try {
       let organs = await axios({
          method: 'get',
          url: diagnosticsApi + getOrgansUri
        });
        this.organs = organs.data;
      } catch( err ) {
        console.log(err.response);
      }
    },
    async GetConditions() {
      try {
       let conditions = await axios({
          method: 'get',
          url: diagnosticsApi + getConditionsUri
        });
        this.conditions = conditions.data;
      } catch( err ) {
        console.log(err.response);
      }
    },
    async GetCategories() {
      try {
       let categories = await axios({
          method: 'get',
          url: diagnosticsApi + getCategoriesUri
        });
        this.categories = categories.data;
      } catch( err ) {
        console.log(err.response);
      }
    },
    async SaveTest() {
      try {
        let response = await axios({
            method: 'post',
            url: diagnosticsApi + saveTestUri,
            data: this.testData
        });
        console.log(response);
      } catch( err ) {
       if( err.response.status == 400 ) {
           this.validators.error  = err.response.data;
        }
      }
      
    }
  },
  mounted: async function() {
    await this.GetSpecialites();
    // GetOrgans();
    await this.GetConditions();
    await this.GetCategories();
  }
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