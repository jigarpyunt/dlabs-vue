<template>
    <aside>
        <div class="container-fluid">
            <!-- Logo Container -->
            <div class="row">
                <div class="col-12 logo-container">
                    <img src="@/assets/icons/logo.svg" alt="#">
                </div>
            </div>
        </div>
    </aside>
</template>
<script>
export default {
    name: "Aside"
}
</script>
<style lang="scss">
aside {
    width: 91px;
    height: 100%;
    position: fixed;
    background: #20A6ED;

    .logo-container {
        padding: 8px;
    }

}
</style>