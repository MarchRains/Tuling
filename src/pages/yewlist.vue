<template>
    <div  class="main-right">
        <div class="main-right-top">
            <h2>创建任务</h2>
        </div>
        <div class="main-right-box">
            <div class=" screen">
                <span class="select">机器人筛选 &nbsp</span>
                             
                   <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                &nbsp &nbsp &nbsp<span class="select">任务名称 &nbsp</span> 
                <input class="rwuser" type="text" placeholder="请输入">   
            </div>
            <div class="textbox">
                <span class="rwmx">任务描叙</span> 
                <!-- <el-input class="rwinput" v-model="input" placeholder="请输入内容"></el-input> -->
                <textarea style="resize:none"  class="rwinput" placeholder="任务描述不可超过50字！">
                </textarea>
            </div>
        </div>
        <div class="main-right-bottom">
                <div class="period">
                    <span class="period-span">工作日 :</span>    
                    <el-checkbox-group v-model="checkedCities1" :min="1" :max="3" size="medium" >
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </div>

                <div class="option-date">
                    <span class="period-span">选择日期</span>  
                     <div class="block" >
                        <el-date-picker class="block-xz" v-model="value6" type="datetimerange"  start-placeholder="开始日期"  end-placeholder="结束日期" > </el-date-picker>
                     </div>
                </div>
                <div cla ss="selection-time">
                     <span class="period-span">选择时间</span>  
                      <el-time-picker
                      class="period-time"
                        is-range
                        v-model="value4"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围">
                    </el-time-picker>
                    <el-button class="add" type="primary">添加</el-button>
                    <ul class="uls"  v-cloak>
                        <li class="ul-list">   
                             <div class="view">
                                <!-- 获取事件参数 -->
                                <span>
                                    08:43:00  &nbsp &nbsp &nbsp 至 &nbsp  &nbsp &nbsp 08:43:00
                                </span>
                              
                             </div>
                             
                               <button class="destroy" v-on:click="deleteTodo(index)">删除</button>
                        </li>
                         <li class="ul-list">   
                             <div class="view">
                                <!-- 获取事件参数 -->
                                <span>
                                    08:43:00  &nbsp &nbsp &nbsp 至 &nbsp  &nbsp &nbsp 08:43:00
                                </span>
                              
                             </div>
                             
                               <button class="destroy" v-on:click="deleteTodo(index)">删除</button>
                        </li>
                        <li class="ul-list">   
                             <div class="view">
                                <!-- 获取事件参数 -->
                                <span>
                                    08:43:00  &nbsp &nbsp &nbsp 至 &nbsp  &nbsp &nbsp 08:43:00
                                </span>
                              
                             </div>
                             
                               <button class="destroy" v-on:click="deleteTodo(index)">删除</button>
                        </li>
                    </ul>
                </div>

                <div class="task-number">
                  
                        <span class="period-daoru">导入任务号码 : </span> 
                          <div class="task-number-hed">
                        <el-upload
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        </el-upload> 
                        <p class="download">请<a class="xzmb" href="#">下载模板</a>按照其中的格式填写您的外呼号码并上传文件</p>
                        <el-button type="primary">创建任务</el-button>
                    </div>
               
                    
                     
                </div>
        </div>
    </div>
</template>
<script>
const cityOptions = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
export default {
     data() {
    return {
        input: '',
        checkedCities1: [''],
        cities: cityOptions,
        //选择日期
        value6: '',
        //选择时间
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],

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
    }
  }
}
</script>

<style scoped>
 .main-right-top h2 {
    font-size: 30px;
    color: rgba(58, 75, 100, 1);
    font-weight: 400;
    margin-top: -10px;
}
.main-right-box{
    width: 100%;
    height: 305px;
    background:rgba(255,255,255,1);
    border-radius:4px;
    box-shadow:4px 1px 5px rgba(41,43,44,0.08);
    margin-top:34px;
    padding:40px  32px;; 
    box-sizing: border-box;
}
.screen{
  /* height: 100px;
  line-height: 100px; */
}
 .screen .select {
  width: 330px;
  border-radius: 4px;
}
.screen .select .option{
    width:330px;
    height:45px;
    border:1px solid rgba(213,216,219,1);
    border-radius:4px;
}
.screen .rwuser{
    width:343px;
    height:45px;
    border:1px solid rgba(213,216,219,1);
    border-radius:4px;
    box-sizing: border-box;
    padding-left: 20px;
}
.textbox{
    display: flex;
    height:162px;
    align-items: center;
    margin-top:20px;
}
.textbox .rwmx{
    width:80px;
    font-size:14px;
    margin-top:-90px;
    color:rgba(58,75,100,1);
}
.textbox .rwinput{
    width: 94%;
    margin-left:9px;
    height:160px;
    border:1px solid rgba(213,216,219,1);
    border-radius:4px;
    padding:21px;
    box-sizing: border-box;
    font-size:14px;
    color:rgba(58,75,100,1);
    
}
.block-xz{
    width: 350px;
    margin-left: 5px;
}
.main-right-bottom{
    width: 100%;
    /* height:670px; */
    background:rgba(255,255,255,1);
    border-radius:4px;
    box-shadow:4px 1px 5px rgba(41,43,44,0.08);
    margin-top:20px;
    padding: 50px 32px;
    box-sizing: border-box;
}
.task-number,.option-date, .period{
      display: flex;
    align-items: center;
    color:rgba(58,75,100,1);
}
 .period-daoru{
    margin-right:10px;
    margin-top:-235px;
}
.period-span{
     margin-right:10px;
}
/* .selection-time{
    position: relative;
    top:0px;
    left:0px;
}
.uls{
    position: absolute;
    bottom:20px;
    left: 300px;
    z-index: 1000px ;
} */
.ul-list{
    display: flex;
    margin-left:75px;
    margin-top:20px ;
    margin-bottom:20px ;
    width:500px;
    height:40px;
}
.ul-list .view{
     width:348px;
    height:100%;
    border:1px solid rgba(213,216,219,1);
    border-radius:4px;
    line-height: 45px;
    text-align: center;
}
.destroy{
    width:70px;
    height:40px;
    margin-left:34px;
    background:white;
    color:rgba(255,66,17,1);
    border:1px solid rgba(255,66,17,1);
    border-radius:4px;
}
/* 阻止冒泡*/
 [v-cloak] {
    display: none;
}
.option-date{
    margin:30px 0px;
}
.add{
    margin-left:29px;
}
.task-number{
    margin-top:30px;
}
.task-number-hed{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.download{
    margin:30px;
}
.download .xzmb{
    color:#61B3FF;
}
</style>
