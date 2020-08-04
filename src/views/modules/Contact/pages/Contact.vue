<template>
        <div id="Contact" class="container">
            <div >
                <div class="input-text grid-container align-left bold white">
                    <label for="name">name</label>
                    <input style="width: 700px" id="name" type="text">
                </div>
                <div class="input-text grid-container align-left bold white">
                    <label for="name">email</label>
                    <input style="width: 700px" id="email"  type="text">
                </div>
                <div class="input-text grid-container align-left bold white">
                    <label for="name">phone</label>
                    <input style="width: 700px" id="phone" type="text">
                </div>
                <div class="input-text grid-container align-left bold white">
                    <label for="name">message</label>
                    <input style="width: 700px; height:344px" id="message" type="text">
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
</template>

<style scoped>
    .container{
        color: white;
        margin-left: 80px;
        margin-right: 80px;
        height: 80vh;
        top: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .input-text{
        padding-top: 13px;
        padding-bottom: 13px;
    }
    label{
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
        height: 490px;
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
        font-size: 13px;
        padding-left: 100px;
        height: 490px;
        width: 300px;
    }
</style>

<script>

</script>