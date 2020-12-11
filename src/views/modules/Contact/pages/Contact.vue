<template>
    <div class="container-contact">
        <div id="Contact" data-aos="fade-zoom-in" data-aos-duration="1200" class="row">
            <form class="col-md-8 flex-center compo-con"   @submit.prevent="sendEmail">
                <div>
                    <div class="input-form">
                        <label class="uppercase white" for="name">name</label>
                        <input class="text-input" required id="name" type="text" name="name">
                    </div>
                    <div class="input-form">
                        <label class="uppercase white" for="name">email</label>
                        <input class="text-input" required id="email"  type="email" name="email">
                    </div>
                    <div class="input-form">
                        <label class="uppercase white" for="name">phone</label>
                        <input class="text-input" required id="phone" type="tel" name="phone">
                    </div>
                    <div class="input-form">
                        <label class="uppercase white" for="name">message</label>
                        <textarea required id="message" name="message"></textarea>
                    </div>
                </div>
                <div class="flex-justify-end info">
                    <input class="bold white button uppercase"  type="submit" value="Send">
                </div>
            </form>
            <div class="col-md-4 white compo-con container-info">
                <div class="info">
                    <div style="text-align:left">
                        South Jakarta, Indonesia. <br>
                        contact@projectarchive.com <br>
                        +62 81317444776 <br><br>
                        Follow me
                        <span class="pointer" @click="redirectToInstagram()">@project___archive</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="modal" id="modal-thanks" name="modal-thank-you" class="popup flex-center white">
            <div>
                thank you
            </div>
                
        </div>
    </div>     
</template>

<script>
    import emailjs from 'emailjs-com'

    export default {
        data(){
            return{
                modal:false
            }
        },
        methods:{
            redirect(){
                this.modal = true;
                setInterval(
                    function () {
                        window.location.replace("/contact")
                    }.bind(this),
                    2000
                        );
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
    .popup{
        position: absolute;
        text-transform: uppercase;
        font-size: 40px;
        top: 12%;
        left: 0;
        right: 0;
        bottom: 12%;
        z-index: 98;
        background-color: rgba(0,0, 0, 1);
        font-weight: 700;
    }
    .input-form{
       display: flex;
       text-align: left;
    }
    label{
        float: left;
        width: 10vw;
        font-size: 1vw;
    }
    .button{
        background:none;
        border:none;
        margin:0;
        padding-left: 20px;
        cursor: pointer;
        font-size: 1vw;
    }
    .flex-justify-end{
        height: 160px;
        width: 100px;
        display: flex;
        justify-content: end;
    }
    .text-input{
        width: 30vw;
        height: 20px;
        font-size: 12px;
        margin-bottom: 20px;
    }
    textarea{
        resize:none;
        width: 30vw;
        height: 20vh;
    }
    .compo-con{
        height: 70vh;
    }
    .end{
        display: flex;
        align-items: flex-end;
    }
    .info{
        height: 36vh;
        display: flex;
        align-items: flex-end;
    }
    .container-info{
        display: flex;
        align-items: center;
    }
</style>

