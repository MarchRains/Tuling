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
        <div class="status" >
            <div id="eachrs" :style="{width: '100%', height: '100%'}">
            </div>
        </div>
        <div class="analyze">
            <div id="eachrs1" :style="{width: '100%', height: '100%'}">
            <p class="bbb" ></p>
        </div>
        </div>
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
  },
  methods:{
      ehcars(){
          let echarts = this.$echarts.init(document.getElementById('eachrs'))
          echarts.setOption({
            title: { text: '节点状态',
            subtext:"" },
            tooltip: {},
            xAxis: {
                
            },
            yAxis: {
                 data: ["节点1","节点2","节点3","节点4","节点5","节点6","节点7","节点8","节点9","节点10"],
                 
                 barMaxWidth:20
                 
            },
            series: [{
                name: '挂断量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
                barMaxWidth:20,
                itemStyle:{
                    color:(0, 0, 1, 0,[{offset: 0, color: '#8AC5FD'},{offset: 1, color: '#61B3FF'}]),
                    normal: {
                            barBorderRadius:[0,20,20,0]
                    }
                }
            }]
        });
          console.log(status);
      },
      ehcars2(){
          let echarts = this.$echarts.init(document.getElementById('eachrs1'))
          echarts.setOption({
            title: { text: '呼叫分析',
            subtext:"" },
            tooltip: {},
            xAxis: { 
                data: ["节点1","节点2","节点3","节点4","节点5","节点6","节点7","节点8","节点9","节点10"],
                 barMaxWidth:20},
            yAxis: {},
            series: [{
                name: '呼叫量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
                barMaxWidth:20,
                itemStyle:{
                    color:(0, 0, 1, 0,[{offset: 0, color: '#8AC5FD'},{offset: 1, color: '#61B3FF'}]),
                    normal: {
                            barBorderRadius:[20,20,0,0]
                    }
                }
            }]
        });
      }
  },
  mounted:function(){
      this.ehcars();
      this.ehcars2();
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
  height: 242px;
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

