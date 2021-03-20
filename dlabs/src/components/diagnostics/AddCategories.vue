<template>
  <div>
    <div class="row">
      <div class="information-box">
        <div class="row">
            <div class="col-12 head">
                <img src="@/assets/images/information-icon.svg" alt="#">
                <span>Information</span>
            </div>
            <div class="col-12 body">
                <p>Categorisation of test are like biochemistry , pathology, radiology etc</p>
                <p><b>Biochemistry</b> - CBC , Urine etc</p>
                <p><b>Pathology</b> - USG , echo etc</p>

            </div>
        </div>
    </div>
      <div class="col-lg-7 form-data">
        <div class="form-row">
          <div class="col-lg-4 form-group">
            <label for="">Category Name</label>
            <input
              type="text"
              placeholder="Specify category name"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-12 form-buttons">
            <button class="save">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "AddCategories",
  components: {
  },
  data: function () {
    return {
    };
  },
  methods: {
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
  textarea {
    @include remove-textarea-defaults;
    height: 197px;
    max-height: 197px;
    overflow-y: scroll;
    text-indent: 10px;
    border: 2px solid rgba(32, 166, 237, 0.5);
    padding-top: 20px;
    resize: none;
  }
  textarea.small {
    width: 550px;
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
    background: #D1ECF1;
    border: 1px solid #BEE5EB;
    padding: 20px;
    margin: 50px 0px 50px 0px;

    .head { 
        span {
            margin-left: 20px;
            @include apply-font($roboto, $bold, 14px, #0C5460);
        }
    }
    .body {
        p:first-child {
            margin-top: 30px;
        }
        p {
            @include apply-font($roboto, $regular, 14px, #0C5460);
            line-height: 20px;
        }
    }
}
</style>