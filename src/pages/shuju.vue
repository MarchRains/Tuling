<template>
     <div class="main-right">
        <div class="main-right-top">
            <a class="list" href="#">任务名单列表</a>
        </div>
        <div class="shuju">
            <div class="optionDate">
                <div class="optionDate-top">
                <span class="sharing">选择日期</span>
                <div class="block">
                    <el-date-picker
                    v-model="value7"
                    type="datetimerange"
                    align="right"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00', '08:00:00']">
                    </el-date-picker>
                </div>
             
                <span class="sharing">业务流程</span>
                <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                <span>
                <el-button class="seeks" type="primary"> <i class="logout iconfont icon-sousuo"></i> 搜索任务</el-button>
                <el-button>默认按钮</el-button>
                </span>
                   
                </div>
                <div class="ul1">
                <ul>
                    <li>
                        <span>计划呼叫量</span>
                        <span class="li-plan">100</span>
                    </li>
                    <li>
                        <span>接听数</span>
                        <span class="li-answer">85</span>
                    </li>
                    <li>
                        <span>呼叫完成数</span>
                        <span class="li-Call">85</span>
                    </li>
                    <li>
                        <span>平均通话时长</span>
                        <span class="li-duration">8分60秒</span>
                    </li>
                </ul>
                </div>
                <div class="ul2">
                    <ul>
                        <li>
                            <span>实际呼叫量</span>
                            <span class="li-plan">80</span>
                        </li>
                        <li>
                            <span>接听率</span>
                            <span class="li-answer">85%</span>
                        </li>
                        <li>
                            <span>呼叫完成率</span>
                            <span  class="li-Call">85%</span>
                        </li>
                        
                    </ul>
                </div>    
            </div>

            <div class="profession"></div>
            <div class="sousuo"></div>
            <div class="download"></div>
        </div>
        <div class="status">
            <div class="aaaa">
                <p class="bbb" ></p>
            </div>
        </div>
        <div class="analyze"></div>
     </div>
</template>
<script>
export default {
  data() {
    return {
      //时间日期
      value7: "",
      //下拉
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  }
};
</script>
<style scoped>
.main-right-top {
  padding: 0px 30px;
}
.main-right-top a {
  font-size: 30px;
  color: rgba(58, 75, 100, 1);
  margin-top: -10px;
}
.shuju {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
}
.optionDate{
    box-sizing: border-box;
    padding:30px;
}
.optionDate-top{
    display: flex;
    align-items: center;
}
.sharing{
    margin-right: 9px;
}
.block{
    margin-right:29px;
}
.seeks{
    margin:0px 13px 0px 26px;
}
 ul{
    width: 100%;
    height: 55px;
    margin:20px 0px;
}
ul li{
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right:260px;
}
ul li span{
    color:rgba(58,75,100,1);
    font-size:14px;
}
ul li span:nth-child(2){
    font-size:22px;
}
ul li .li-plan{
    color:rgba(97,179,255,1);
}
ul li .li-answer{
    color:rgba(255,150,37,1);
}
ul li .li-Call{
    color:rgba(92,184,92,1);
}
ul li .li-duration{
    color:rgba(152,137,241,1);
}
.status {
  width: 100%;
  height: 772px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
  margin: 21px 0px;
}
.analyze {
  width: 100%;
  height: 540px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
}



</style>

