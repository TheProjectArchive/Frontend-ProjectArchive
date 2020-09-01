<template>
    <Panel>
        <div id="Contact" data-aos="fade-zoom-in" class="container">
            <div class="container-form">
                <div class="input-text grid-container align-left bold white">
                    <label for="name">name</label>
                    <input style="width: 530px" id="name" type="text">
                </div>
                <div class="input-text grid-container align-left bold white">
                    <label for="name">email</label>
                    <input style="width: 530px" id="email"  type="text">
                </div>
                <div class="input-text grid-container align-left bold white">
                    <label for="name">phone</label>
                    <input style="width: 530px" id="phone" type="text">
                </div>
                <div class="input-text grid-container align-left bold white">
                    <label for="name">message</label>
                    <textarea id="message" style="width: 530px; height:300px; resize:none;"></textarea>
                </div>            
            </div>
            <div class="container-send">
                <a class="button bold white" href="">send</a>
            </div>
            <div class="address white align-left">
                <div class="address">
                    South Jakarta, Indonesia. <br>
                    my@projectarchive.com <br>
                    +62 81317444776 <br><br>
                    Follow me @raditesp__
                </div>
            </div>
        </div>
    </Panel>
</template>

<script>
    export default {
        components:{
            Panel: () => import('@/components/Panel.vue')
        }
    }
</script>

<style scoped>
    .container{
        color: white;
        height: 70vh;
        top: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .input-text{
        padding-top: 13px;
        padding-bottom: 13px;
    }
    input{
        font-family: 'Montserrat', sans-serif;
    }
    textarea{
        font-family: 'Montserrat', sans-serif;
    }
    label{
        font-size: 12px;
        text-transform: uppercase;
    }
    .grid-container{
        display: grid;
        grid-template-columns: 120px auto;
    }
    .align-left{
        text-align:left
    }
    .container-send{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        
        text-transform: uppercase;
        padding-left: 20px;
        height: 440px;
        width: 300px;
    }
    .button{
        text-decoration: none;
        text-transform: uppercase;
    }
    .address{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        color:white;
        font-family: 'Montserrat', sans-serif;
        font-weight: lighter;
        font-size: 20px;
        padding-left: 100px;
        height: 440px;
        width: 300px;
    }
</style>

