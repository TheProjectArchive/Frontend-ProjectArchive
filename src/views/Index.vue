<template>
    <div class="container-2">
        <div data-aos="fade-zoom-in" data-aos-duration="1500" class="container">
            <router-link to="/about">About</router-link>
            <router-link to="/work">Work</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
        <div v-if="showload" :class="'modal-overlay flex-center' + style">
            <div :class="classSlide">
                <img class="loading logo" src="@/assets/esp-logo.png" alt="">
            </div>
            <transition name='fade'>
                <img v-if="showtext" src="@/assets/projectArchive-text.png" alt="">
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showtext:false,
            showload:true,
            style:'',
            classSlide: ''
        }
    },
    created(){
        this.open()
    },
    mounted(){
        this.logHostname
    },
    methods:{
        logHostname(){
            console.log(window.location.hostname)
        },
        open(){     
            if ( ! sessionStorage.getItem( 'doNotShow' ) ) {
                sessionStorage.setItem( 'doNotShow', true );
                this.classSlide = 'slide'
                setTimeout(() => this.showload = false, 6000);
                setTimeout(() => (this.showtext = true, this.classSlide = 'clear-fix'), 3800);
            }else{
                this.showload=false;
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .container{
        position: relative;     
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top:0;
        height: 65vh;
    }
    a{
        color: white;
        padding-bottom: 10px;
        font-size: 28px;
        font-weight: bold;
        text-transform: uppercase;
    }
    .loading{
        animation: rotate 1s 3;
    }
    .slide{
        animation: slide 1s;
        animation-delay: 3s;
        animation-fill-mode: forwards;
    }
    .setSlide{
        margin-right: 0 ;
    }

    .clear-fix{
        padding:20px;
    }

    .flex-center{
        display: flex;
        justify-content: center;
    }

    .modal-overlay{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        z-index: 98;
        background-color: rgba(0,0, 0, 1);
    }

    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

    @keyframes rotate{
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes slide{
        from {
            margin-right: 0;
        }
        to {
            margin-right: 260px;
        }
    }
</style>