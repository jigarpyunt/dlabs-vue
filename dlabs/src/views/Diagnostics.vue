<template>
<div>
   <Aside/>
   <Header/>
   <PageContent>
       <template v-slot:header>
        <Breadcrumb />
       </template>
       <template v-slot:main>
           <PageMetadata />
        </template>     
       <template v-slot:footer></template>      
   </PageContent>
  
</div>
</template>
<script>
import Aside from "@/components/global/Aside";
import Header from '@/components/global/Header.vue';
import PageContent from "@/components/global/PageContent";
import Breadcrumb from "@/components/global/Breadcrumb";
import PageMetadata from "@/components/diagnostics/PageMetadata";

export default {
    name : "Dashboard",
    components: {
        Aside,
        Header,
        PageMetadata,
        Breadcrumb,
        PageContent
    }
}
</script>
<style lang="scss">

</style>

