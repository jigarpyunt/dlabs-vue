<template>
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
</template>
<script>
export default {
    name: "InformationBox"
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";

.information-box {
    width: 634px;
    height: 161px;
    border-radius: 15px;
    background: #D1ECF1;
    border: 1px solid #BEE5EB;
    padding: 20px;

    .head { 
        span {
            margin-left: 20px;
            @include apply-font($roboto, $bold, 14px, #0C5460);
        }
    }
    .body {
        p {
            @include apply-font($roboto, $regular, 14px, #0C5460);
        }
    }
}



</style>