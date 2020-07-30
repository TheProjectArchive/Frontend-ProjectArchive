<template>
    <div class="panel">
        <slot></slot>
    </div>
</template>

<style scoped>
    .panel{
        margin-left: 80px;
        margin-right: 80px;
        height: 500px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center; 
    }
</style>