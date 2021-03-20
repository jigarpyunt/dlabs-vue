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
    <div class="row" v-if="activePills.first">
      <div class="col-lg-7 form-data">
        <div class="form-row">
          <div class="col-lg-4 form-group">
            <label for="">Test Name</label>
            <input
              type="text"
              placeholder="Specify test name"
              class="form-control"
            />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Unit</label>
            <input
              type="text"
              placeholder="Specify test unit mg/dl"
              class="form-control"
            />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Range</label>
            <input
              type="text"
              placeholder="Specify test range  12.0 - 30.9"
              class="form-control"
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
            />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Code Prefix</label>
            <input
              type="text"
              placeholder="Specify test prefix LIP"
              class="form-control"
            />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Code</label>
            <span class="testcode-gen">BRUC0047873</span>
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
            ></textarea>
            <h6 class="textarea-count"><span class="left">0</span> / 1000</h6>
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-12 form-buttons">
            <button class="next" @click="ChangePill('second')">Next</button>
            <button class="save">Save</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="activePills.second">
      <div class="col-lg-7 form-data">
        <div class="form-row">
          <div class="col-lg-4 form-group">
            <label for="">Test Speciality</label>
            <input type="text" placeholder="Liver" class="form-control" />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Organ</label>
            <input type="text" placeholder="Heart" class="form-control" />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Test Condition</label>
            <input type="text" placeholder="Fever" class="form-control" />
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-4 form-group">
            <label for="">Test Category</label>
            <input type="text" placeholder="Hametology" class="form-control" />
          </div>
          <div class="col-lg-4 form-group">
            <label for="">Report Availibility Time</label>
            <input type="text" placeholder="2 days" class="form-control" />
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-12 form-group">
            <label for="">Test Description Information</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="form-control"
              placeholder="Specify pre test description"
            ></textarea>
            <h6 class="textarea-count"><span class="left">0</span> / 1000</h6>
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-12 form-buttons">
            <button class="previous" @click="ChangePill('first')">
              Previous
            </button>
            <button class="save">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddTests",
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