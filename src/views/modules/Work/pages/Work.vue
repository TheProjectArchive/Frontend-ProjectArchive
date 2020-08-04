<template>
    <Panel>
    <div data-aos="fade-up" class="white grid">
        <div class="img-container">
            <img src="@/assets/mono-06.png" alt="">
        </div>
        <div class="img-container">
            <img src="@/assets/mono-06.png" alt="">
        </div>
        <div class="img-container">
            <img src="@/assets/mono-06.png" alt="">
        </div>
        <div class="img-container">
            <img src="@/assets/mono-06.png" alt="">
        </div>
        <div class="img-container">
            <img src="@/assets/mono-06.png" alt="">
        </div>
        <div class="img-container">
            <img src="@/assets/mono-06.png" alt="">
        </div>
        <div class="img-container">
            <img src="@/assets/mono-06.png" alt="">
        </div>
        <div class="img-container">
            <img src="@/assets/mono-06.png" alt="">
        </div>
    </div>
    </Panel>
</template>

<style scoped>
    .grid{
        position: relative;
        display: grid;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        grid-template-columns: auto auto auto auto;
        padding: 10px;
    }
</style>

<script>
export default {
    components:{
        Panel: () => import('@/components/Panel.vue')
    }
}
</script>