<template>
    <NavBarComponent />
    <router-view></router-view> 
</template>
<script>

    import NavBarComponent from "@/modules/shared/components/NavBarComponent.vue"

    export default {
        name: "DashboardView",
        components: {
            NavBarComponent
        }
    }
</script>