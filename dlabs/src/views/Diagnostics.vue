<template>
<div>
   <Aside/>
   <Header/>
   <section class="page-content">
       <div class="container-fluid">
            <Breadcrumb />
       </div>

   </section>
</div>
</template>
<script>
import Aside from "@/components/global/Aside";
import Header from '@/components/global/Header.vue';
import Breadcrumb from "@/components/diagnostics/Breadcrumb";

export default {
    name : "Dashboard",
    components: {
        Aside,
        Header,
        Breadcrumb
    }
}
</script>
<style lang="scss">
@import "@/assets/scss/globals.scss";

section.page-content {
    width: 94.6%;
    height: 100%;
    position: fixed;
    left: 91px;
    top: 80px;
    background: #fff;
    overflow-y: scroll;
    padding: 30px 100px 30px 100px;
}
</style>

