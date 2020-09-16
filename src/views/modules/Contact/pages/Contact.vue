<template>
    <Panel>
        <div id="Contact" data-aos="fade-zoom-in" data-aos-duration="1200" class="container">
            <form class="container-send"   @submit.prevent="sendEmail">
                <div>
                    <div class="input-text grid-container align-left bold white">
                        <label for="name">name</label>
                        <input required style="width: 530px" id="name" type="text" name="name">
                    </div>
                    <div class="input-text grid-container align-left bold white">
                        <label for="name">email</label>
                        <input required style="width: 530px" id="email"  type="email" name="email">
                    </div>
                    <div class="input-text grid-container align-left bold white">
                        <label for="name">phone</label>
                        <input required style="width: 530px" id="phone" type="tel" name="phone">
                    </div>
                    <div class="input-text grid-container align-left bold white">
                        <label for="name">message</label>
                        <textarea required id="message" style="width: 530px; height:300px; resize:none;" name="message"></textarea>
                    </div>
                </div>
                <input class="button bold white"  type="submit" value="Send">
            </form>
            <div class="clearfix"/>
            <div class="address white align-left">
                <div>
                    South Jakarta, Indonesia. <br>
                    contact@projectarchive.com <br>
                    +62 81317444776 <br><br>
                    Follow me
                    <span class="pointer" @click="redirectToInstagram()">@project___archive</span>
                </div>
            </div>
        </div>
        <div v-show="modal" name="modal-thank-you" class="modal flex-center" >
            <h1>
                thank you
            </h1>
        </div>
    </Panel>
</template>

<script>
    import emailjs from 'emailjs-com'

    export default {
        data(){
            return{
                modal:false
            }
        },
        components:{
            Panel: () => import('@/components/Panel.vue')
        },
        methods:{
            redirect(){
                this.modal = true;
                setInterval(
                    function () {
                        window.location.replace("/contact")
                    }.bind(this),
                    3000
                        );
                console.log('asdad')
            },
            sendContactToEmail(){
                console.log('mounted called')
            },
            sendEmail(e){
                emailjs.sendForm('service_y64muak', 'template_mhp6e1a', e.target, 'user_vh0VWuCUVR3DBVDmcw7cW')
                    .then((result)=> {
                        console.log('SUCCESS!', result.status, result.text);
                        this.redirect()
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            },
            redirectToInstagram(){
                window.open("https://www.instagram.com/project___archive/")
            }
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
    .container-send{
        display: flex;
        align-items: flex-start;
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
        width: 350px;
        text-align:left
    }
    input[type=submit]{
        background-color: black;
        border: none;
        color: white;
        text-decoration: none;
        margin: 445px 15px 0;
        padding: 0;
        cursor: pointer;
        font-size: 16px;
    }
    .modal{
        text-transform: uppercase;
        font-size: 40px;
        position: absolute;
        top: 12%;
        left: 0;
        right: 0;
        bottom: 12%;
        z-index: 98;
        background-color: rgba(0,0, 0, 1);
    }
    .clearfix{
        width: 200px;
    }
</style>

