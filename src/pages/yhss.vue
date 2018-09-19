<template>
     <div class="main-right">
        <div class="main-right-top">
            <a class="list" href="#">用户搜索</a>
        </div>
        <div class="shuju">
          
             <div class=" screen">
                 <span class="xzrq">
                    <span class="select">选择日期 : </span>
               
                    <el-date-picker
                    v-model="value7"
                    type="datetimerange"
                    align="right"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00', '08:00:00']">
                    </el-date-picker>
                </span>
                 <span class="xzrq">
                <span>用户名 : </span>
                   <input type="text" name="fname" />
              </span>
              <span class="xzrq">
                    <span>手机号码 : </span>
                   <input type="text" name="fname" />
              </span>
              <span class="xzrq">
                    <span>任务名称 : </span>
                   <input class="rwmc" type="text" placeholder="请输入任务名称" name="fname" /> 
                </span>

                <div class="through">
                    <span class="select">是否接通 : </span>
               
                    <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

                     <!-- <span class="search-task">
                          <i class="logout iconfont icon-sousuo"></i>
                          搜索任务
                     </span> -->
                     <el-button class="soso" type="primary" @click="search"> 
                         <i class="logout iconfont icon-sousuo"></i> 
                         搜索任务
                    </el-button>
                </div>
            </div>
     
        </div>
        <div class="status">
              数据合计 ： <span class="select">888888 </span> 条
        </div>
        <div class="right-bottom">
            <table class="main-table">
                <tr class="main-trs">
                    
                    <th>
                        序号
                    </th>
                    <th>用户姓名</th>
                    <th>手机号码</th>
                    <th>呼叫时间</th>
                    <th>时长</th>
                    <th>是否接通</th>
                    <th>所属任务</th>
                    <th>操作</th>

                </tr>
                <tr class="main-trs">
                    <td>
                     
                        01
                    </td>
                    <td>张三</td>
                    <td>18888888888</td>
                    <td>2018-08-08 13:00:00</td>
                    <td>0s</td>
                    <td>未接通</td>
                    <td>教育回访</td>
                    <td>
                        <button class="hjxx">播放记录</button>
                        <button class="dcly">导出录音</button>
                    </td>
                </tr>
                  <tr class="main-trs">
                    <td>
                     
                        01
                    </td>
                    <td>张三</td>
                    <td>18888888888</td>
                    <td>2018-08-08 13:00:00</td>
                    <td>0s</td>
                    <td>未接通</td>
                    <td>教育回访</td>
                    <td>
                        <button class="hjxx">播放记录</button>
                        <button class="dcly">导出录音</button>
                    </td>
                </tr>
                 <tr class="main-trs">
                    <td>
                     
                        01
                    </td>
                    <td>张三</td>
                    <td>18888888888</td>
                    <td>2018-08-08 13:00:00</td>
                    <td>0s</td>
                    <td>未接通</td>
                    <td>教育回访</td>
                    <td>
                        <button class="hjxx">播放记录</button>
                        <button class="dcly">导出录音</button>
                    </td>
                </tr>
                 <tr class="main-trs">
                    <td>
                     
                        01
                    </td>
                    <td>张三</td>
                    <td>18888888888</td>
                    <td>2018-08-08 13:00:00</td>
                    <td>0s</td>
                    <td>未接通</td>
                    <td>教育回访</td>
                    <td>
                        <button class="hjxx">播放记录</button>
                        <button class="dcly">导出录音</button>
                    </td>
                </tr>
                 <tr class="main-trs">
                    <td>
                     
                        01
                    </td>
                    <td>张三</td>
                    <td>18888888888</td>
                    <td>2018-08-08 13:00:00</td>
                    <td>0s</td>
                    <td>未接通</td>
                    <td>教育回访</td>
                    <td>
                        <button class="hjxx">播放记录</button>
                        <button class="dcly">导出录音</button>
                    </td>
                </tr>
              
            </table>
        </div>          
     </div>
</template>
<script>
export default {
     data() {
      return {
        value7: '',
        //下拉框
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      };
    },
    methods:{
        search(){
            console.log(111111111111)

        

        // 使用封装的ajax调接口即可        
        this.$http({
          url:"https://api.api68.com/klsf/getLotteryInfo.do",
          type:"post",
          data:{
              issue:"",
              lotCode:"10009"
          }
      })
      .then(function(res){
          console.log(res);
          var result = res.result.data;
          console.log(result)
        //   console.log(this.msg);
      }.bind(this))
      .catch(function(err){
        //   console.log(err)
      }.bind(this))
        }

    }
}

</script>
<style scoped>
.main-right-top {
  padding: 0px 30px;
  margin-bottom:25px;
}
.main-right-top a {
  font-size: 30px;
  color: rgba(58, 75, 100, 1);
  margin-top: -10px;
}
.shuju{
    width:100%;
    height:242px;
    background:rgba(255,255,255,1);
    border-radius:4px;
    box-shadow:4px 1px 5px rgba(41,43,44,0.08);
    display: flex;  
}
.status{
    width:100%;
    height:97px;
    line-height:97px;
    padding:0px 35px;
     box-sizing: border-box;
}
.right-bottom{
    width:100%;
    height:auto;
background:rgba(255,255,255,1);
border-radius:4px 4px 0px 0px;
box-shadow:4px 1px 5px rgba(41,43,44,0.08);
}
.screen{
     padding:36px 0px 36px 32px;
      box-sizing: border-box;

}
.screen input{
width:186px;
height:45px;
line-height:45px;
border:1px solid rgba(213,216,219,1);
border-radius:4px;
padding-left:15px;
 box-sizing: border-box;

}
.screen .rwmc{
    width:290px;
}
.xzrq{
    margin-right:20px;
}
.through{
 margin-top:21px;
}
.search-task{
    width:124px;
height:45px;
background:rgba(89,175,255,1);
border-radius:4px;
color:#fff;
display:inline-block;
text-align:center;
line-height:45px;
}
.main-table{
  width: 100%;
  height: 100%;
}
.main-trs{
    /* width: 100px; */
    height: 50px;
    text-align: center;
    border-bottom:1px solid rgba(213,216,219,1);
    line-height: 50px;
    
}
.main-trs th{
    height:17px;
    font-size:16px;
    color:rgba(58,75,100,1);
}
.main-trs td{
    /* width: 100px; */
     box-sizing: border-box;
      padding:0px 35px;
     box-sizing: border-box;
     
}
.hjxx{
    width:98px;
    height:30px;
    color:rgba(70,180,255,1);
    border:1px solid rgba(70,180,255,1);
    border-radius:4px;
    background:white;
}
.dcly{
    width:98px;
    height:30px;
    color: rgba(92,184,92,1);
    border:1px solid rgba(92,184,92,1);
    border-radius:4px;
    background:white;
}
.soso{
    height:43px;
    text-align:center;
}
</style>

                    