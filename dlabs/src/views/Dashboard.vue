<template>
<div>
   <Aside/>
   <Header/>
</div>
</template>
<script>
import Aside from "@/components/global/Aside";
import Header from '../components/global/Header.vue';
export default {
    name : "Dashboard",
    components: {
        Aside,
        Header
    }
}
</script>

