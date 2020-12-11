<template>
    <div class="dropdown">
        <svg @click="isOpen = !isOpen" viewBox="0 0 1030 638" width="60">
            <path d="M508.933,146.807l-42.347-42.347c-4.267-4.053-10.88-4.053-15.147,0L256.027,300.193L60.507,104.46
			c-4.267-4.053-10.88-4.053-15.147,0L3.12,146.807c-4.16,4.16-4.16,10.88,0,15.04L248.453,407.5c4.16,4.16,10.88,4.16,15.04,0
			l245.333-245.653C513.093,157.687,513.093,150.967,508.933,146.807z M256.027,384.887L25.733,154.38l27.2-27.307l195.52,195.733
			c4.267,4.053,10.88,4.053,15.147,0l195.52-195.733l27.2,27.307L256.027,384.887z" fill="#FFF"/>
        </svg>
        <div class="sub-menu" data-aos="fade-zoom-in" data-aos-duration="1000" v-if="isOpen==true">
            <div @click="isOpen = !isOpen" class="menu-items" v-for="(item, i) in listMenu" :key="i">
                <router-link :to="item.link">{{ item.name }} </router-link>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    props: ['listMenu'],
    data(){
        return {
            isOpen: false
        }
    }
}
</script>

<style lang="css">    
    svg{
        margin-left: 30px;
        cursor: pointer;
    }
    .menu-items>a{
        color: #ffffff;
        text-transform: uppercase;
        font-weight: bold;
    }

    .dropdown{
        position: absolute;
        width: 100vw;
        z-index: 98;
    }

    .sub-menu{
        background-color: black;
        border-bottom: 3px solid #ffffff;
    }

    @media screen and (min-width: 1060px) {
        .dropdown{
            display: none;
        }
    }
</style>