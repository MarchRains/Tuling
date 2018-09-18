<template>
  <div class="topbar">
    <div class="header">
      <div class="topbar-left">
        <img class="logo" src="../assets/img/logo.png" alt="">
        <h1>图灵语音智能中心欢迎您!</h1>
      </div>

      <div class="right">
        <img class="useravatar" src="../assets/img/user.png" alt="">
        <a>
          甲乙丙丁
          <i class=" iconfont icon-tubiao-">
          </i>
        </a>
        <a href="javascript:void(0)">
          <i @click="show=1"  class="logout iconfont icon-tuichu" title="退出"></i>
        </a>
      </div>
    </div>
    <div class="main">
      <div class="main-left">
        <ul>
          <li class="list list1">
            <router-link class="list-a active" href="javascript:(0)" :to="list[0].path">
              <i class="logout iconfont icon-robot"></i>
              机器人工作台
            </router-link>
          </li>
          <li class="list list2">
            <a class="list-a" href="javascript:(0)">
              <i class="logout iconfont icon-appstore"></i>
              任务调度中心
            </a>
            <div class="subdiv">
              <router-link class="list-a " href="" :to="list[1].path">发起智能外呼业务</router-link>
              <router-link href="" :to="list[2].path">任务列表</router-link>
              <!-- <a href="">任务列表</a> -->
            </div>
          </li>
          <li class="list list2">
            <a class="list-a" href="javascript:(0)">
              <i class="logout iconfont icon-tongjifenxi"></i>
              统计分析
            </a>
            <div class="subdiv">
               <router-link class="list-a " href="" :to="list[3].path">数据概况</router-link>
                <router-link href="" :to="list[4].path">通话情况分析</router-link>
            </div>
          </li>
          <li class="list list1">
             <router-link class="list-a " href="" :to="list[5].path">
              <i class="logout iconfont icon-sousuo-tianchong"></i>
              用户搜索
            </router-link>
          </li>
          <li class="list list2">
            <a class="list-a" href="javascript:(0)">
              <i class="logout iconfont icon-informatiom"></i>
              信息业务
            </a>
            <div class="subdiv">
              <a href="">短息服务</a>
              <a href="">语音服务</a>
            </div>
          </li>
          <li class="list list1">
            <router-link class="list-a " href="" :to="list[6].path">
              <i class="logout iconfont icon-yonghudianji"></i>
              个人中心
           </router-link>
          </li>

        </ul>

      </div>

      <!-- <div class="main-right">
                <div class="main-right-top">
                    <h2>机器人工作台</h2>
                </div>
                <div class="main-right-box">
                            <div class=" screen">
                              <span class="select">机器人筛选</span>
                              
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                      v-for="item in options"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                            </div>
                  
                          

                          <el-table
                            :data="tableData"
                            style="width: 100%"
                            @current-change="handleCurrentChange"
                            highlight-current-row
                            row-style="height:90px;"
                          >
                            <el-table-column 
                              prop="date"
                              label="序号"
                              width="80">
                            </el-table-column>
                            <el-table-column
                              prop="name"
                              label="机器人名称"
                              width="100">
                            </el-table-column>
                            <el-table-column
                              prop="buyingTime"
                              label="购买时间"
                              width="185">
                            </el-table-column>
                            <el-table-column
                              prop="expirationtime"
                              label="过期时间"
                              width="185">
                            </el-table-column>
                            <el-table-column
                              prop="business"
                              label="关联业务">
                            </el-table-column>
                            <el-table-column
                              prop="remark"
                              label="备注">
                            </el-table-column>
                            <el-table-column
                              prop="state"
                              label="状态">
                            </el-table-column>
                            <el-table-column
                              prop="operation"
                              label="操作">
                            </el-table-column>

                          </el-table>
                
                </div>
                <div class="main-right-bottom">
                    <div class="block">
                      <span class="demonstration"></span>
                      <el-pagination
                      background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage3"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000">
                      </el-pagination>
                    </div>
                </div>
            </div> -->
      <!-- <div class="main-right" >
              2222222
            </div> -->
      <div class="main-right">
        <router-view></router-view>
      </div>
    </div>

    <!-- <div class="footer">
      <div class="main-right-bottom">
        <div class="block">
          <span class="demonstration"></span>
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
          </el-pagination>
        </div>
      </div>
    </div> -->

      <!-- 遮罩层 -->
        <div   v-show="show==1"  class="Masked"></div>
        <!-- 退出提示框 -->
        <div v-show="show==1" class="quit">
            <img class="quit-logout" src="../assets/img/logout.png" alt="">
            <p class="quit-p">是否退出账号 ?</p>
            <div class="quit-btn">
                 <el-button @click="show=0" style="width:157px; height:55px" >取消</el-button>
                <el-button style="width:157px;  height:55px" type="primary">确认</el-button>
                <span @click="show=0" class="quit-xxx">X</span>
            </div>
        </div>

  </div>
</template>

<script>
export default {
  name: "index",
  // props:{

  // }
  // ,
  data() {
    return {
      //退出弹出框
      show:0,
      list: [],
      //下拉框
      options: [
        {
          value: "选项1",
          label: "机器人1"
        },
        {
          value: "选项2",
          label: "机器人2"
        },
        {
          value: "选项3",
          label: "机器人3"
        },
        {
          value: "选项4",
          label: "机器人4"
        },
        {
          value: "选项5",
          label: "机器人5"
        }
      ],
      value: "",

      //table表格
      tableData: [
        {
          date: "01",
          name: "王小虎",
          buyingTime: "2018-09-03 13:22:50",
          expirationtime: "2018-09-03 13:22:50",
          business: "XXX话术流程",
          remark: "XXX话术流程",
          state: "启用",
          operation: "buttom"
        },
        {
          date: "02",
          name: "王小虎",
          buyingTime: "2018-09-03 13:22:50",
          expirationtime: "2018-09-03 13:22:50",
          business: "XXX话术流程",
          remark: "XXX话术流程",
          state: "启用",
          operation: "buttom"
        },
        {
          date: "03",
          name: "王小虎",
          buyingTime: "2018-09-03 13:22:50",
          expirationtime: "2018-09-03 13:22:50",
          business: "XXX话术流程",
          remark: "XXX话术流程",
          state: "启用",
          operation: "buttom"
        },
        {
          date: "04",
          name: "王小虎",
          buyingTime: "2018-09-03 13:22:50",
          expirationtime: "2018-09-03 13:22:50",
          business: "XXX话术流程",
          remark: "XXX话术流程",
          state: "启用",
          operation: "buttom"
        },
        {
          date: "05",
          name: "王小虎",
          buyingTime: "2018-09-03 13:22:50",
          expirationtime: "2018-09-03 13:22:50",
          business: "XXX话术流程",
          remark: "XXX话术流程",
          state: "启用",
          operation: "buttom"
        },
        {
          date: "06",
          name: "王小虎",
          buyingTime: "2018-09-03 13:22:50",
          expirationtime: "2018-09-03 13:22:50",
          business: "XXX话术流程",
          remark: "XXX话术流程",
          state: "启用",
          operation: "buttom"
        }
      ]
    };
  },
  created() {
    this.list = this.$router.options.routes[1].children;
    console.log(this.list);
    
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
body,
html,
.topbar {
  height: 100%;
}
.topbar {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 107px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 38px;
  box-sizing: border-box;
}
.topbar-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 100%; */
}
.topbar-left h1 {
  font-size: 30px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(58, 75, 100, 1);
  line-height: 14px;
  margin-left: 5px;
}
.topbar-left .logo {
  width: 80px;
  height: 48px;
}
.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right i {
  font-size: 22px;
}
.right .logout {
  margin-left:20px;
}
.logo {
  width: 80px;
  height: 48px;
}
.main {
  width: 100%;
  height: 100%;
  background: #f3f4f5;
  display: flex;
  padding-top: 50px;
  box-sizing: border-box;
  padding-right: 50px;
}
.main .main-left {
  flex-basis: 312px;
  margin-right:50px;
}
/* .main .main-left ul {
  width: 315px;
} */

.main .main-left ul li {
  height: 79px;
  line-height: 79px;
  /* margin:10px 0px; */
  border-bottom: 1px solid #e4e8eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main .main-left ul li:nth-child(1) {
  border-top: 1px solid #e4e8eb;
}
.main .main-left ul .list2 {
  height: 150px;
}
.main .main-left ul a {
  padding-left: 21%;
  height: 41px;
  display: block;
  width: 100%;
  line-height: 40px;
  box-sizing: border-box;
}

 .active {
  background: #59afff;
  color:white !important;
}
main .main-left ul .list2 {
  height: 150px;
}
.main-left ul li .list-a {
  color: rgba(42, 54, 73, 1);
  font-size: 16px;
}
.main-left ul a i {
  margin-right: 10px;
  color: #9a9a9a;
}
/* .main-left ul .subdiv {
  padding-left: 38px;
} */
.main-left ul .subdiv a {
  font-size: 14px;
  color: #4b5970;
  padding-left: 95px;
}
.main .main-right {
  flex: 1;
  /* padding-left: 50px; */
}
.main-right .main-right-top h2 {
  font-size: 30px;
  color: rgba(58, 75, 100, 1);
  font-weight: 400;
  margin-top: -10px;
}
.main-right .main-right-box {
  width: 98%;
  height: 718px;
  margin-top: 28px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px 4px 0px 0px;
  box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
  padding: 0px 30px;
  box-sizing: border-box;
}
.main-right-ul li {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #e4e8eb;
}
.main-right-ul li:nth-child(1) {
  margin-top: 12px;
}
.screen {
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid rgba(213, 216, 219, 1);
}
.screen .select {
  width: 330px;
  height: 45px;
  border-radius: 4px;
  margin-right: 10px;
}
.screen .select .option {
  width: 100%;
  height: 45px;
  border: 1px solid rgba(213, 216, 219, 1);
}
.el-table th,
.el-table tr {
  height: 100px;
}
.footer {
  width: 100%;
  height: 100px;
  margin-top: 20px;
}
.footer .main-right-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top:53px; */
}

    /* 遮罩层 */
    .Masked{
        position: absolute;
            width: 100%;
            height: 120%;
            top:0;
            left:0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 100;
            /* display: none; */
    }
    /* 退出 */
    .quit{
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
        /* justify-content: space-around; */
        box-sizing: border-box; 
        padding:47px 53px;
        /* display: none; */
    }
    .quit-logout{
        width: 178px;  
        height: 144px;
        margin-left:-30px;
    }
    .quit-p{

        text-align: center;
        width: 100%;
        height: 72px;
        margin:30px 0px;
        color: #FF4211;
        font-size:22px;
        border-bottom: 1px solid rgba(228,232,235,1);
    }
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
</style>
