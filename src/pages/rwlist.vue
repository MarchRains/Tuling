<template>
    <div class="main-right">
        <div class="main-right-top">
            <a v-if="s==1" @click="s=1"  class="task-list">任务列表</a>
            <a v-if="s==2||s==3" @click="s=2"  class="list" :class="{active:s==2}">任务名单列表</a>
            <a v-if="s==3||s==2" @click="s=3"  class="breatheOut" :class="{active:s==3}">任务呼叫列表</a>
        </div>
        <!-- 任务列表 -->
        <div class="rewulb" v-show="s==1">
            <div class=" rewulb-top">
                 <span class="xzrq">
                    <span class="option-date">选择日期 : </span> 
               
                    <el-date-picker
                    v-model="value7"
                    type="datetimerange"
                    align="right"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00', '08:00:00']">
                    </el-date-picker> 
                </span> &nbsp &nbsp

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
                </div>&nbsp &nbsp

              <span class="task-name">
                    <span>任务名称 : </span> 
                   <input class="rwmc" type="text" placeholder="请输入任务名称" name="fname" />  
                    <el-button type="primary"> <i class="logout iconfont icon-sousuo"></i> 搜索任务</el-button>
                </span> &nbsp &nbsp

            </div>
             <div class="text-box">
                <span class="describe">任务描叙</span> 
                <!-- <el-input class="rwinput" v-model="input" placeholder="请输入内容"></el-input> -->
                <textarea style="resize:none"  class="rwinput" placeholder="任务描述不可超过50字！">
                </textarea>
            </div>
        </div>

        <div v-show="s==1" class="batch">
            <div class="batch-right">
               <el-button class="batch-btn" type="primary">批量导出明细</el-button>
               <el-button class="batch-btn" type="success">批量导出录音</el-button>
               <el-button class="batch-btn" type="danger">批量删除录音</el-button>
            </div>
        </div>

    <div v-show="s==1"  class="rewulb-bottom">
    <table class="rewulb-bottom-table">
     <tr class="rewulb-bottom-tr">
    
    <th>
           <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
        序号
    </th>
    <th>任务名称</th>
    <th>已完成/总数</th>
    <th>已接通</th>
    <th>拨打中</th>
    <th>任务状态</th>
    <th>开始时间</th>
    <th>结束时间</th>
    <th>操作</th>
  </tr>
  <tr class="rewulb-bottom-tr">      
    <td class="rewulb-bottom-td">
         <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
         </el-checkbox-group>
        01
    </td>
    <td>$教育回访</td>
    <td>1/100</td>
    <td>1</td>
    <td>1</td>
    <td>完成通话</td>
    <td>
        2018-09-05 13:22:50
    </td>
     <td>2018-09-05 13:22:50</td>
     <td class="td-btn">
        <el-button  class="btn1" type="primary">导出所有明细</el-button>
        <el-button  class="btn2" @click="s=2">查看详细</el-button>
        <el-button  class="btn3" type="success">导出所有录音</el-button>
        <el-button  class="btn4" >删除任务</el-button>
    </td>
  </tr>
  <tr class="rewulb-bottom-tr">      
    <td class="rewulb-bottom-td">
         <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
         </el-checkbox-group>
        01
    </td>
    <td>$教育回访</td>
    <td>1/100</td>
    <td>1</td>
    <td>1</td>
    <td>完成通话</td>
    <td>
        2018-09-05 13:22:50
    </td>
     <td>2018-09-05 13:22:50</td>
     <td class="td-btn">
         <el-button  class="btn1" type="primary">导出所有明细</el-button>
        <el-button  class="btn2" @click="s=2">查看详细</el-button>
        <el-button  class="btn3" type="success">导出所有录音</el-button>
        <el-button  class="btn4" >删除任务</el-button>
    </td>
  </tr>
  <tr class="rewulb-bottom-tr">      
    <td class="rewulb-bottom-td">
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
         </el-checkbox-group>
        01
    </td>
    <td>$教育回访</td>
    <td>1/100</td>
    <td>1</td>
    <td>1</td>
    <td>完成通话</td>
    <td>
        2018-09-05 13:22:50
    </td>
     <td>2018-09-05 13:22:50</td>
     <td class="td-btn">
        <el-button  class="btn1" type="primary">导出所有明细</el-button>
        <el-button  class="btn2" @click="s=2">查看详细</el-button>
        <el-button  class="btn3" type="success">导出所有录音</el-button>
        <el-button  class="btn4" >删除任务</el-button>
    </td>
  </tr>
  <tr class="rewulb-bottom-tr">      
    <td class="rewulb-bottom-td">
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
         </el-checkbox-group>
        01
    </td>
    <td>$教育回访</td>
    <td>1/100</td>
    <td>1</td>
    <td>1</td>
    <td>完成通话</td>
    <td>
        2018-09-05 13:22:50
    </td>
     <td>2018-09-05 13:22:50</td>
     <td class="td-btn">
        <el-button  class="btn1" type="primary">导出所有明细</el-button>
        <el-button  class="btn2" @click="s=2">查看详细</el-button>
        <el-button  class="btn3" type="success">导出所有录音</el-button>
        <el-button  class="btn4" >删除任务</el-button>
    </td>
  </tr>
  <tr class="rewulb-bottom-tr">      
    <td class="rewulb-bottom-td">
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
         </el-checkbox-group>
        01
    </td>
    <td>$教育回访</td>
    <td>1/100</td>
    <td>1</td>
    <td>1</td>
    <td>完成通话</td>
    <td>
        2018-09-05 13:22:50
    </td>
     <td>2018-09-05 13:22:50</td>
    <td class="td-btn">
        <el-button  class="btn1" type="primary">导出所有明细</el-button>
        <el-button  class="btn2" @click="s=2">查看详细</el-button>
        <el-button  class="btn3" type="success">导出所有录音</el-button>
        <el-button  class="btn4" >删除任务</el-button>
    </td>
  </tr>
  <tr class="rewulb-bottom-tr">      
    <td class="rewulb-bottom-td">
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
         </el-checkbox-group>
        01
    </td>
    <td>$教育回访</td>
    <td>1/100</td>
    <td>1</td>
    <td>1</td>
    <td>完成通话</td>
    <td>
        2018-09-05 13:22:50
    </td>
     <td>2018-09-05 13:22:50</td>
     <td class="td-btn">
        <el-button  class="btn1" type="primary">导出所有明细</el-button>
        <el-button  class="btn2" @click="s=2">查看详细</el-button>
        <el-button  class="btn3" type="success">导出所有录音</el-button>
        <el-button  class="btn4" >删除任务</el-button>
    </td>
  </tr>
</table>
        </div>
        <!-- 任务名单列表 -->
        <div v-show="s==2"  class="renwu">
        <div class="basic">
            <span>基础信息</span>
            <div>
                <ul class="basic-ul">
                    <li class="basic-li">
                        <span>任务创建人 ：</span>
                        <span class="basic-li-span1">苏先生</span>
                    </li>
                    <li>
                        <span>主叫号码 ：</span>
                        <span class="basic-li-span1">1888888888</span>
                    </li>
                    <li>
                        <span>已完成/设置任务数 ：</span>
                        <span class="basic-li-span1">66</span>
                    </li>
                    <li>
                        日期 ：
                        <span class="basic-li-span1">2018-08-08</span>
                        至
                        <span class="basic-li-span1">2018-08-08</span>
                    </li>
                    <li>
                        <span>呼叫时间段 ：</span>
                        <span class="basic-li-span1">12:00:00-14:00:00</span>
                    </li>
                    <li>
                        <span class="basic-li-span1">12:00:00-14:00:00</span>
                    </li>
                    <li>
                        <span class="basic-li-span1">12:00:00-14:00:00</span>
                    </li>
                </ul>
            </div>
            <div class="textbox">
                <span class="rwmx">任务描叙</span>
                <!-- <el-input class="rwinput" v-model="input" placeholder="请输入内容"></el-input> -->
                <textarea style="resize:none" class="rwinput" placeholder="任务描述不可超过50字！">
                </textarea>
            </div>
        </div>

        <div class="connect">
            <div class="connect-left">
                <div class="connect-jt">
                    <span>是否接通</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="connect-jg">
                    <span>呼叫结果</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in option" :key="item.value" :label="item.ss" :value="item.value">
                        </el-option>
                    </el-select>
                </div>

            </div>
            <div class="connect-right">
                <el-button type="primary">批量导出详情</el-button>
                <el-button type="success">批量导出录音</el-button>
            </div>
        </div>
        <div class="right-bottom">
            <table class="main-table">
                <tr class="main-tr">
                    
                    <th>
                          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>序号
                    </th>
                    <th>客户姓名</th>
                    <th>是否接通</th>
                    <th>客户电话</th>
                    <th>呼叫结果</th>
                    <th>操作</th>

                </tr>
                <tr class="main-tr">
                    <td class="rewulb-bottom-td">
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                 <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                         </el-checkbox-group>
                        01
                    </td>
                    <td>张三</td>
                    <td>未接通</td>
                    <td>18888888888</td>
                    <td>呼叫失败</td>
                    <td>
                        <button class="hjxx">呼叫详细</button>
                        <button class="dcly">导出录音</button>
                        <button class="csh">初始化</button>
                    </td>
                </tr>
                 <tr class="main-tr">
                    <td class="rewulb-bottom-td">
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                 <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                         </el-checkbox-group>
                        01
                    </td>
                    <td>张三</td>
                    <td>未接通</td>
                    <td>18888888888</td>
                    <td>呼叫失败</td>
                    <td>
                        <button class="hjxx">呼叫详细</button>
                        <button class="dcly">导出录音</button>
                        <button class="csh">初始化</button>
                    </td>
                </tr>
                 <tr class="main-tr">
                    <td class="rewulb-bottom-td">
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                 <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                         </el-checkbox-group>
                        01
                    </td>
                    <td>张三</td>
                    <td>未接通</td>
                    <td>18888888888</td>
                    <td>呼叫失败</td>
                    <td>
                        <button class="hjxx">呼叫详细</button>
                        <button class="dcly">导出录音</button>
                        <button class="csh">初始化</button>
                    </td>
                </tr>
                 <tr class="main-tr">
                   
                    <td class="rewulb-bottom-td">
                       <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                 <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                        01
                    </td>
                    <td>张三</td>
                    <td>未接通</td>
                    <td>18888888888</td>
                    <td>呼叫失败</td>
                    <td>
                        <button class="hjxx">呼叫详细</button>
                        <button class="dcly">导出录音</button>
                        <button class="csh">初始化</button>
                    </td>
                </tr >
                 <tr class="main-tr">
                   
                    <td class="rewulb-bottom-td">
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                 <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                        01
                    </td>
                    <td>张三</td>
                    <td>未接通</td>
                    <td>18888888888</td>
                    <td>呼叫失败</td>
                    <td>
                        <button class="hjxx">呼叫详细</button>
                        <button class="dcly">导出录音</button>
                        <button class="csh">初始化</button>
                    </td>
                </tr>
              
            </table>
        </div>
        </div>
        <!-- 任务呼叫列表 -->
        <div v-show="s==3" class="hujiao">
            <div class="hjrq">
                <span>呼叫日期 : </span>
                <span class="time">2018-08-08 12:00:00 - 14:00:00</span>
            </div>
            <div class="connect">
            <div class="connect-left">
                <div class="connect-jt">
                    <span>是否接通</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="connect-jg">
                    <span>呼叫结果</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in option" :key="item.value" :label="item.ss" :value="item.value">
                        </el-option>
                    </el-select>
                </div>

            </div>
            <div class="connect-right">
                <el-button type="primary">批量导出详情</el-button>
                <el-button type="success">批量导出录音</el-button>
            </div>
        </div>
        <div class="right-bottom">
            <table class="main-table">
                <tr class="main-tr">
                    
                    <th>
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
                         序号
                    </th>
                    <th>客户姓名</th>
                    <th>是否接通</th>
                    <th>客户电话</th>
                    <th>呼叫结果</th>
                    <th>操作</th>

                </tr>
                <tr class="main-tr">
                    <td class="rewulb-bottom-td">
                         <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>01
                    </td>
                    <td>张三</td>
                    <td>未接通</td>
                    <td>18888888888</td>
                    <td>呼叫失败</td>
                    <td>
                        <button class="hjxx">呼叫详细</button>
                        <button class="dcly">导出录音</button>
                        <button class="csh">初始化</button>
                    </td>
                </tr>
                 <tr class="main-tr">
                    <td class="rewulb-bottom-td">
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                        01
                    </td>
                    <td>张三</td>
                    <td>未接通</td>
                    <td>18888888888</td>
                    <td>呼叫失败</td>
                    <td>
                        <button class="hjxx">呼叫详细</button>
                        <button class="dcly">导出录音</button>
                        <button class="csh">初始化</button>
                    </td>
                </tr>
                 <tr class="main-tr">
                    <td class="rewulb-bottom-td">
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                        01
                    </td>
                    <td>张三</td>
                    <td>未接通</td>
                    <td>18888888888</td>
                    <td>呼叫失败</td>
                    <td>
                        <button class="hjxx">呼叫详细</button>
                        <button class="dcly">导出录音</button>
                        <button class="csh">初始化</button>
                    </td>
                </tr>
                 <tr class="main-tr">
                   
                    <td class="rewulb-bottom-td">
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                        01
                    </td>
                    <td>张三</td>
                    <td>未接通</td>
                    <td>18888888888</td>
                    <td>呼叫失败</td>
                    <td>
                        <button class="hjxx">呼叫详细</button>
                        <button class="dcly">导出录音</button>
                        <button class="csh">初始化</button>
                    </td>
                </tr >
                 <tr class="main-tr">
                   
                    <td class="rewulb-bottom-td">
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                        01
                    </td>
                    <td>张三</td>
                    <td>未接通</td>
                    <td>18888888888</td>
                    <td>呼叫失败</td>
                    <td>
                        <button class="hjxx">呼叫详细</button>
                        <button class="dcly">导出录音</button>
                        <button class="csh">初始化</button>
                    </td>
                </tr>
              
            </table>
        </div>
        </div>
    </div>
</template>
<script>
const cityOptions = [''];
export default {
  data() {
    return {
        checkAll: false,
         checkedCities: [],
        cities: cityOptions,
        // isIndeterminate: false,
        
         s: 1,
      //是否接通
      options: [
        {
          value: "选项1",
          label: "未接通"
        },
        {
          value: "选项2",
          label: "完成通话"
        },
        {
          value: "选项3",
          label: "未开始"
        }
      ],
      value: "",
      //呼叫结果
      option: [
        {
          value: "选项1",
          ss: "呼叫失败"
        },
        {
          value: "选项2",
          ss: "线路错误"
        },
        {
          value: "选项3",
          ss: "空号"
        }
      ],
      value: "",
      //多选框
   
    };
  },
   methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        // this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        // this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
};
</script>
<style>
/* 任务列表开始 */
.rewulb {
    width:100%;
    height:304px;
    background:rgba(255,255,255,1);
    border-radius:4px 4px 0px 0px;
    box-shadow:4px 1px 5px rgba(41,43,44,0.08);
    padding:40px  32px;; 
    box-sizing: border-box;
    margin-top: 34px;
}
.rewulb-top{
    display: flex;
}
.through{
    /* margin:0px 28px; */
}
.rwmc{
    width:343px;
    height:45px;
    border:1px solid rgba(213,216,219,1);
    border-radius:4px;
    margin-right:26px;
    padding-left: 20px;
}
.text-box{
  display: flex;
  height: 162px;
  align-items: center;
  margin-top: 20px;
}
.text-box .describe{
      width: 80px;
  margin-top: -90px;
  font-size: 14px;
  color: rgba(58, 75, 100, 1);
}
.text-box .rwinput {
  width: 100%;
  margin-left: -5px;
  height: 160px;
  border: 1px solid rgba(213, 216, 219, 1);
  border-radius: 4px;
  padding: 21px;
  box-sizing: border-box;
  font-size: 14px;
  color: rgba(58, 75, 100, 1);
}

.batch{

  width:100%;
  height:100px;
  box-sizing: border-box;
  padding: 0px 22px;
}

.batch-right{
    float:right;
    margin:10px 0px;
    line-height:100px;
}
.batch-right .batch-btn{
    height:42px;
}

.rewulb-bottom{
    width:100%;
    height:710px;
    background:rgba(255,255,255,1);
    border-radius:4px 4px 0px 0px;
    box-shadow:4px 1px 5px rgba(41,43,44,0.08);
    box-sizing: border-box;
    margin-top:10px;
}

.rewulb-bottom-table{
    width:100%;
    /* height:100%; */
     box-sizing: border-box;
}
.rewulb-bottom-table tr{
   height:100px;
   box-sizing: border-box;
   border-bottom:1px solid rgba(245,245,245,1);
}

.rewulb-bottom-table .rewulb-bottom-tr td{
    /* width:80px; */
    /* height:100%; */
    text-align:center;
    box-sizing: border-box;
}
.td-btn{
    width: 280px;
}

.td-btn button{
    height: 30px;
    margin-left:0px!important;
    margin:5px;
    line-height: 0px;
}
.td-btn .btn2{
    color:rgba(255,150,37,1);
    border:1px solid rgba(255,150,37,1);
}

.td-btn .btn4{
    color:rgba(255,66,17,1);
    border:1px solid rgba(255,66,17,1);
}
/* 任务列表结束 */

.main-right-top {
  padding: 0px 30px;
}
.main-right-top a {
  font-size: 30px;
  color: rgba(58, 75, 100, 1);
  margin-top: -10px;
}
.main-right-top .list {
  margin-right: 45px;
}
.basic {
  width: 100%;
  height: 340px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
  margin-top: 25px;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
}
.basic-ul {
  width: 100%;
  margin-top: 15px;
  margin-left: -8px;
  display: flex;
  justify-content: space-around;
}
.basic-ul li {
  float: left;
  /* margin-right:3%; */
  font-size: 14px;
  color: rgba(58, 75, 100, 1);
}

.basic-ul li:nth-child(1){
    margin-left:6px;
}
.basic-li-span1 {
  color: rgba(89, 175, 255, 1);
}

.text-box,.textbox {
  display: flex;
  height: 162px;
  align-items: center;
  margin-top: 20px;
}

.textbox .rwmx {
  width: 80px;
  margin-top: -90px;
  font-size: 14px;
  color: rgba(58, 75, 100, 1);
}
.textbox .rwinput {
  width: 100%;
  margin-left: 9px;
  height: 160px;
  border: 1px solid rgba(213, 216, 219, 1);
  border-radius: 4px;
  padding: 21px;
  box-sizing: border-box;
  font-size: 14px;
  color: rgba(58, 75, 100, 1);
}
.connect {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.connect-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.connect-jt {
  margin-right: 30px;
}
.right-bottom {
  width: 100%;
  height: 604px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px 4px 0px 0px;
  margin-bottom: 50px;
}
.main-table {
  width: 100%;
  height: 100%;
}
.main-tr {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(213, 216, 219, 1);
  line-height: 50px;
  height: 100px;
}

button {
  background: #ffffff;
}
.hjxx {
  width: 98px;
  height: 30px;
  color: rgba(70, 180, 255, 1);
  border: 1px solid rgba(70, 180, 255, 1);
  border-radius: 4px;
}
.dcly {
  width: 98px;
  height: 30px;
  color: rgba(92, 184, 92, 1);
  border: 1px solid rgba(92, 184, 92, 1);
  border-radius: 4px;
}
.csh {
  width: 98px;
  height: 30px;
  color: rgba(153, 135, 241, 1);
  border: 1px solid rgba(153, 135, 241, 1);
  border-radius: 4px;
}
 .rewulb-bottom-td{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top:38px;
    margin-left: 15px;
}
.main-tr th {
  width: 92px;
  height: 17px;
  font-size: 16px;
  color: rgba(58, 75, 100, 1);
}
.main-tr check {
  width: 24px!important;;
  height: 24px!important;;
  background: #ffffff;
  color: #ffffff;
  border: 1px solid rgba(213, 216, 219, 1);
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 10px;
  margin-top: -5px;
}
/* 呼叫日期 */
.hjrq {
  width: 100%;
  height: 130px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
  margin-top: 30px;
  box-sizing: border-box;
  padding-left: 32px;
}
.hjrq span {
  line-height: 130px;
  color: rgba(58, 75, 100, 1);
  font-size: 14px;
}
.hjrq .time {
  color: #61b3fe;
}
.active{
    color:rgba(89,175,255,1)!important;;
}
</style>

