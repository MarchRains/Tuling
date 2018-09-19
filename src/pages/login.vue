<template>
    <div class="content">
        <div class="box">
             <img  class="login-img" src="../assets/img/login.png" alt="">
             <div class="login-list">
                 <img class="login-list-logo" src="../assets/img/logo.png" alt="">
                 <p class="tlzn">图灵智能语音登录系统</p>
                 
                 <form action="" method="post">
                        <span class="user-img"><img src="../assets/img/user-img.png" alt=""></span>
                        <input @blur.prevent="login(1,user)"  v-model="user"  type="text" name="user" placeholder="请输入管理员姓名"  maxlength="12">
                        <span  class="zhcz">{{markedWords}}</span>
                        <span class="password-img"><img src="../assets/img/pass-img1.png" alt=""></span>
                        <input v-model="password" type="password" name="password" placeholder="请输入登录密码"  maxlength="12">          
                        <span  class="zhps">{{markedWords}}</span>
                        <el-button @click="login" class="login-dl" type="primary">登录</el-button>
                 </form>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            user:"",
            password:"",
            markedWords:''
        }
    },
    methods: {
        login(index,value){
            var isItCorrect=/^[a-zA-Z0-9]{6,12}$/
            if(value==''){
                if(index==1){
                    this.markedWords='账号不能为空'
                }else if(index==2){
                    this.markedWords='密码不能为空'
                }
            }else if(!(isItCorrect.test(value))){
                this.markedWords='请输入6-12位字母或数字组合的账号名'
                if(index==1){
                    this.markedWords='请输入6-12位字母或数字组合的密码'
                }else if(index==2){
                    this.markedWords='密码不能为空'
                }
            }else if(!value){
                console.log(333)
               this.markedWords='账号不存在'
            }
            setTimeout(()=>{
                this.markedWords=''
            },2000)
        }
    }
}
</script>
<style scoped>
.content{
    width: 100%;
    height: 100%;
    background:#0D74FF;
  
}
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background:url("../assets/img/login-img.png") 100% 100%  / 100%  100%  no-repeat;
        
    }
    .login-img{
        width:643px;
        height:418px;
        margin-right:89px;
    }
    .login-list{
        width:564px;
        height:548px;
        background:rgba(255,255,255,1);
        border-radius:7px;
        box-shadow:0px 0px 20px rgba(2,133,255,0.6);
        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        padding:62px 68px;
        position: relative;
        top: 0;
        left:0;
    }
    .login-list-logo{
        width:118px;
        height:71px;

    }
    .tlzn{
        font-size:28px;
        color:rgba(16,139,251,1);
        margin-top:40px;
        margin-bottom: 30px;
    }
   .login-list input{
       width:429px;
        height:47px;
        border:1px solid rgba(214,212,212,1);
        border-radius:2px;
        margin:20px;
        box-sizing: border-box;
        padding-left: 67px;
   }
    .user-img{
        position: absolute;
        left: 88px;
        top: 278px;

    }
    .login-list .password-img{
         position: absolute;
          left: 88px;
        top: 365px;
    }
    .login-dl{
        width:430px;
        height:47px;
        margin-left: 17px;
        margin-top:30px;
    }
   .zhcz{
        position: absolute;
        top:320px;
        left:70px;
        color:#FB2439;
        /* display: none; */
    }

</style>


