<template>
    <div class="main-right">
        <div class="main-right-top">
            <a class="list" href="#">尊敬的用户,欢迎来到图灵机器人个人中心!</a>
        </div>
        <div class="enterprise">
            <span class="enterprise-span">企业信息 : 创纪之源智能机器人有限公司</span>
            <span>地址 : 广东省深圳市龙岗区版新路坂田国际中心楼1808</span>
        </div>
        <div class="qiyezh">
            <div class="qiye-fhh">企业主账号</div>
            <table border="1">
                <tr class="tr-th">
                    <th>企业主账号</th>
                    <th>账号密码</th>
                    <th>注册时间</th>
                    <th>主账号状态</th>
                    <th>企业联系人</th>
                    <th>联系电话</th>
                </tr>
                <tr>
                    <td>1888888888</td>
                    <td>
                        888888<a  @click="show=2"  class="td-a">修改</a>
                    </td>
                    <td>2018-09-05 13:00:00</td>
                    <td>开启</td>
                    <td>张三</td>
                    <td>16666666666</td>
                </tr>
                
                <tr class="tr-th">
                    <th>企业类型</th>
                    <th>邮箱</th>
                    <th>企业接口</th>
                    <th>语音剩余数</th>
                    <th>短信剩余数</th>
                    <th></th>
                </tr>
                <tr>
                    <td>国企/私企/外企</td>
                    <td> 163@163.com </td>
                    <td><a  @click="show=3" class="td-ck" href="#">查看</a></td>
                    <td>666</td>
                    <td>888</td>
                    <td></td>
                </tr>
            </table>
            <div class="qiye-zzh">
                   <span> 企业子账号</span>
                    <a href="">
                        <img src="../assets/img/jiahao.png" alt="">添加子账号
                    </a>
            </div>
            <table  border="1">
                 <tr class="tr-th">
                    <th>序号</th>
                    <th>子账号</th>
                    <th>密码</th>
                    <th>邮箱</th>
                    <th>短信剩余数</th>
                    <th>操作</th>
                </tr>
                <tr class="tr-th2">
                    <td>01</td>
                    <td> 123456789 </td>
                    <td>李四</td>
                    <td>8888</td>
                    <td>888@163.com</td>
                    <td>
                        <button class="td-qy">启用</button>
                       <button class="td-xg" @click="dialogFormVisible = true">修改</button>
                        <button class="td-sc">删除</button>
                    </td>
                </tr>
                <tr class="tr-th2">
                    <td>01</td>
                    <td> 123456789 </td>
                    <td>李四</td>
                    <td>8888</td>
                    <td>888@163.com</td>
                    <td>
                        <button class="td-qy">启用</button>
                        <button class="td-xg">修改</button>
                        <button class="td-sc">删除</button>
                    </td>
                </tr>
                <tr class="tr-th2">
                    <td>01</td>
                    <td> 123456789 </td>
                    <td>李四</td>
                    <td>8888</td>
                    <td>888@163.com</td>
                    <td>
                        <button class="td-qy">启用</button>
                        <button class="td-xg">修改</button>
                        <button class="td-sc">删除</button>
                    </td>
                </tr>
            </table>
        </div>
        <!-- 遮罩层 -->
        <div  v-show="show==2"  class="Masked"></div>
        <!-- 退出提示框 -->
        <!-- <div v-show="s==1" v-if="show==1" class="quit">
            <img class="quit-logout" src="../assets/img/logout.png" alt="">
            <p class="quit-p">是否退出账号 ?</p>
            <div class="quit-btn">
                 <el-button style="width:157px; height:55px" >取消</el-button>
                <el-button style="width:157px;  height:55px" type="primary">确认</el-button>
                <span class="quit-xxx">X</span>
            </div>
        </div> -->
        <!-- 修改密码 -->
        <div v-show="show==2"  class="change-password">
             <h3 class="xg-password">修改密码</h3>
            <el-form  :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="原密码:" prop="oldPass">
    <el-input type="password" v-model="ruleForm2.oldPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="新密码:" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码:" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    
    <el-button @click="show=0">取消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm2')">确认</el-button>
  </el-form-item>
</el-form>
                <span  @click="show=0" class="quit-xxx">X</span>
        </div>
        <!-- 添加子账号 -->
        <div  class="add-subaccount">
            <h3 class="xg-password">添加子账号</h3>
            <form action="" method="post">
             <p class="accountname">账户名 : <input maxlength="12" name="account-name" type="text" placeholder="请输入6-12位字母或数字组合的账号名" /></p>
             <p class="passwords">密码 : <input maxlength="12" name="passwords" type="passwords" placeholder="请输入6-12位字母或数字组合的密码" /></p>
             <p class="confirm-password">确认密码 :  <input maxlength="12" name="password" type="password" placeholder="请重复密码" /></p>
             <p class="realname">真实姓名 : <input maxlength="12" name="username" type="text" placeholder="请填写真实姓名" /></p>
             <p class="email">邮箱 :  <input type="email" name="user_email" placeholder="请填写可用的邮箱" /></p>
             <div class="quit-btn">
                 <el-button style="width:157px; height:55px" >取消</el-button>
                <el-button style="width:157px;  height:55px" type="primary">确认</el-button>
            </div>
            <span class="quit-xxx">X</span>
            </form>
        </div>
        <!-- 接口详细 -->
        <div v-show="show==3" class="interface">
             <h3 class="xg-password">接口详细</h3>
             <form action="" method="post">
             <p class="interface-url">URL : <input maxlength="12" name="url" type="text" placeholder="请输入6-12位字母或数字组合的密码" value="45754765758900" /></p>
             <p class="interface-keys">密钥 :  <input maxlength="12" name="keys" type="text" value="45754765758900"  /></p>
             <p class="interface-apikey">API KEY : <input maxlength="12" name="apikey" type="text" value="45754765758900"  /></p>
             <span class="quit-xxx">X</span>
             </form>
        </div>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
    </div>
</template>
<script>
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var oldPasss = (rule,value,callback) => {
          if (value === '') {
          callback(new Error('请再次输入密码'));
        }else if (value == this.ruleForm2.pass) {
          callback(new Error('更改密码不能相同!'));
        }
        else {
          callback();
        }
      };
      return {
          show:0,
        ruleForm2: {
          pass: '',
          checkPass: '',
          oldPass:''
        },
        rules2: {
            //验证规则
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          oldPass: [
            { validator: oldPasss, trigger: 'blur' }
          ],
        },
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    
    }
  }
</script>
<style scoped>
.main-right-top {
  /* padding: 0px 30px; */
}
.main-right-top a {
  font-size: 30px;
  color: rgba(58, 75, 100, 1);
  margin-top: -10px;
}
.enterprise {
  width: 100%;
  height: 86px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px 4px 0px 0px;
  box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
  margin-top: 35px;
  margin-bottom: 20px;
}
.enterprise span {
  font-size: 16px;
  color: rgba(58, 75, 100, 1);
  line-height: 86px;
  padding: 0px 44px;
}
.enterprise-span {
  margin-right: 50px;
}
.qiyezh {
  width: 100%;
  height: 924px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px 4px 0px 0px;
  padding: 30px 42px;
  box-sizing: border-box;
}
.qiye-fhh{
    margin-bottom: 25px;
}
.qiyezh table{
    width: 100%;
    height: 330px;
}
.qiyezh table .tr-th{
    height:65px;
    font-size:16px;
    color:rgba(58,75,100,1);
    background:rgba(248,248,248,1);
    border:1px solid rgba(235,235,235,1);
} 
.qiyezh table tr{
    /* height:103px; */
    font-size:16px;
    color: #586478;
    border:1px solid rgba(235,235,235,1);
    text-align: center;
}
tr .td-a{
    width:47px;
    height:30px;
    display: inline-block;
    border:1px solid rgba(153,135,241,1);
    border-radius:4px;
    color:rgba(152,137,241,1);
    text-align: center;
    line-height: 30px;
    margin-left:8px;
    font-size:14px;
    }
tr .td-ck   {
    color:rgba(152,137,241,1);
    font-size:14px;
}
.qiye-zzh{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
   align-items: center;
}
.qiye-zzh a{
    color:rgba(97,179,255,1);
}
.qiye-zzh img{
    width: 17px;
    height: 17px;
    margin-top:-5px;
    vertical-align: middle;
    margin-right:7px;
}
table th,batle td{
    width: 15%;
    box-sizing: border-box;
}
 /* button{ outline:none; } */
.td-qy{
    width:47px;
    height:30px;
    color:rgba(97,179,255,1);
    font-size: 14px;
    background:white;
    border:1px solid rgba(97,179,255,1);
    border-radius:4px;
}
.td-xg{
    width:47px;
    height:30px;
    color:rgba(152,137,241,1);
    font-size: 14px;
    background:white;
    border:1px solid rgba(152,135,241,1);
    border-radius:4px;}
.td-sc{
    width:47px;
    height:30px;
    color:rgba(255,66,17,1);
    font-size: 14px;
    background:white;
    border:1px solid rgba(255,66,17,1);
    border-radius:4px;}

     /* 遮罩层 */
    .Masked{
        position: absolute;
            width: 100%;
            height: 120%;
            top:0;
            left:0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 100;
    }
    /* 退出 */
    /* .quit{
        width:640px;
        height:412px;
        background:rgba(255,255,255,1);
        opacity:0.96;
        border-radius:4px;
        position: absolute;
        top:50%;
        left: 50%;
        margin-top:-240px;
        margin-left:-320px;
        z-index: 500;
        display: flex; 
        flex-direction: column;
        align-items: center;
        box-sizing: border-box; 
        padding:47px 53px;
        display: none;
    }
    .quit-logout{
        width: 178px;  
        height: 144px;
        margin-left:-30px;
    } */
     /* .quit-p{

        text-align: center;
        width: 100%;
        height: 72px;
        margin:30px 0px;
        color: #FF4211;
        font-size:22px;
        border-bottom: 1px solid rgba(228,232,235,1);
    } */
    .quit-xxx{
        width:30px;
        height:30px;
        text-align: center;
        font-size:25px;
        color:rgba(196,203,214,1);
        position: absolute;
        right:21px;
        top:21px;
        cursor:pointer;
    } 
     .quit-btn{
        text-align: center;
    }  
    /* 修改密码 */
    .change-password{
        width:640px;
        height:492px;
        background:rgba(255,255,255,1);
        opacity:0.96;
        border-radius:4px;
        position: absolute;
        top:50%;
        left: 50%;
        margin-top:-281px;
        margin-left:-320px;
        z-index: 500;
        display: flex; 
        flex-direction: column;
        box-sizing: border-box; 
        padding:47px 53px;
        
    }
    .change-password p,.add-subaccount p{
        height: 100px;
        font-size:18px;
        color:rgba(58,75,100,1);
    }
    .interface p{
        height: 100px;
        font-size:18px;
        color:rgba(58,75,100,1);
    }
    .change-password p input,.add-subaccount p input {
        width:320px;
        height:48px;
        border:1px solid rgba(213,216,219,1);
        border-radius:4px;
        box-sizing: border-box; 
        padding-left:15px;
    }
    .interface p input{
        width:320px;
        height:48px;
        border:1px solid rgba(213,216,219,1);
        border-radius:4px;
        box-sizing: border-box; 
        padding-left:15px;
    }
    .change-password .xg-password,.add-subaccount .xg-password{
        font-size:24px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(58,75,100,1);
        margin-top:10px;
        margin-bottom:30px;
        text-align: center;
    }
    .interface .xg-password{
       font-size:24px;
        font-family:MicrosoftYaHei;
        font-weight:400;
        color:rgba(58,75,100,1);
        margin-top:10px;
        margin-bottom:30px;
   }
     .confirm-passwords{
        margin-left:-17px;
    }
    .confirm-password{
        margin-left:-15px;
    }
    /* 添加子账号 */
    .add-subaccount{
        width:640px;
        height:648px;
        background:rgba(255,255,255,1);
        opacity:0.96;
        border-radius:2px;
        position: absolute;
        top:50%;
        left: 50%;
        margin-top:-324px;
        margin-left:-320px;
        z-index: 500;
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box; 
        padding:47px 53px;
        display: none;
    }
    .add-subaccount .accountname{
        margin-left: 2px;
    }
    .add-subaccount .passwords,.email{
        margin-left: 20px;
    }
   .add-subaccount .realname{
        margin-left:-15px;
   }
   /* 接口详细 */
   .interface{
        width:640px;
        height:384px;
        background:rgba(255,255,255,1);
        opacity:0.96;
        border-radius:4px;
        position: absolute;
        top:50%;
        left: 50%;
        margin-top:-324px;
        margin-left:-320px;
        z-index: 500;
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box; 
        padding:47px 53px;
        display: none;
   }
   .interface-apikey{
       margin-left: -30px;
   }
   .interface-url{
        margin-left: 2px;
   }
</style>

