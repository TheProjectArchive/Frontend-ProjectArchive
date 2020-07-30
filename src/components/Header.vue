<template>
    <div class="grid-container">
        <a class="esp-logo" href="/"><img src="../assets/esp-logo.png" alt="logo"></a>  
        <div class="flex-container">
            <img class="project-archive-text" src="../assets/projectArchive-text.png" alt="text">
        </div>
    </div>
</template>

<style lang="css" scoped>
    .grid-container{
        display: grid;
        grid-template-columns: auto auto;
    }
    .flex-container{
        display: flex;
        justify-content: flex-end;
    }
    .esp-logo{
        margin-top: 25px;
        margin-left: 80px;
        width: 38px;
        height: 36px;
    }
    .project-archive-text{
        width: 200.41px;
        height: 24.85px;
        margin-top: 40px;
        margin-right: 80px;
    }
</style>