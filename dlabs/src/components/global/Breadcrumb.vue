<template>
<ul class="page-breadcrumb">
    <li>
        <a href="javascript:void(0)">
            <span class="root-page">Diagnostics / </span>
            <span class="page-meta">Tests</span>
        </a>
    </li>
</ul>
    
</template>
<script>
export default {
    name: "Breadcrumb"
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/globals.scss";

.page-breadcrumb {
    text-align: left;
    margin: 0;
    padding: 0;
    padding-top: 30px;
    padding-bottom:20px;
    li {
        list-style: none;
        display: inline-block;

        a {
            @include remove-anchor-defaults;
            span {
                @include apply-font($roboto,$bold,15px,#000);
                letter-spacing: 2px;
            }
            span.page-meta {
                color: $active-state !important;
            }
        }
    }
}
</style>