<template>
    <div>
        <header-bar></header-bar>
        <!-- <div v-if="this.$route.meta.publishVegetable"><PublishVegetable></PublishVegetable></div> -->
    </div>
</template>


<script>
import HeaderBar from "./HeaderBar.vue"
// import PublishVegetable from "./PublishVegetable.vue";

export default {
    name: 'HomePage',
    data() {
        return {

        }
    },
    components: {
        HeaderBar,
        // PublishVegetable,
    }
}
</script>

<style scoped></style>
