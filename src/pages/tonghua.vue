<template>
     <div class="main-right">
        <div class="main-right-top">
            <a class="list" href="#">通话情况分析</a>
        </div> 

        <div class="thfx-box">
          
                <div class="thfx-content">
                <span class="th-sharing">选择日期</span>
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
             
                <el-button class="th-seeks" type="primary"> <i class="logout iconfont icon-sousuo"></i> 搜索任务</el-button>
                <el-button class="th-download">下载</el-button>

                </div>
        </div>

        <div class="th-connect">

        </div>
        
         <div style="display:none" class="img-box">
            <img class="zwsj" src="../assets/img/zwsj.png" alt="">
            <div class="wlgz">暂无数据,主人加油哦！</div>
         </div>
         <div style="display:none" class="img-box">
            <img class="cgz"  src="../assets/img/cgz.png" alt="">
            <div class="wlgz">出故障了主人！</div>
         </div>
         <div style="display:none" class="img-box">
            <img class="cxjz" src="../assets/img/cxjz.png" alt="">
            <div class="wlgz">主人,数据无法加载,请刷新重试！</div>
         </div>
         <div style="display:none" class="img-box">
            <img class="zwwl" src="../assets/img/zwwl.png" alt="">
            <div class="wlgz">暂无网络,请连接可用网络！</div>
         </div>
     </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .main-right{
        width: 100%;
        height: 100%;
    }
    .thfx-box{
        width:100%;
        height:128px;
        background:rgba(255,255,255,1);
        border-radius:4px;
        box-shadow:4px 1px 5px rgba(41,43,44,0.08);
        box-sizing: border-box;
        margin-top:30px;
        padding:32px;
    }
    .thfx-content{
        display: flex;
        align-items: center;
        line-height: 78px;
    }
    .th-sharing{
        margin-right:9px;
    }
    .th-seeks{
        margin:0px 20px 0px 27px;
    }
    .th-download{
        width:117px;
        height:45px;
        border:1px solid rgba(89,175,255,1);
        border-radius:4px;
        color: rgba(89,175,255,1);
    }
    .th-connect{
         width:100%;
        height:544px;
        background:rgba(255,255,255,1);
        border-radius:4px;
        box-shadow:4px 1px 5px rgba(41,43,44,0.08);
        box-sizing: border-box;
        margin:20px 0px 23px 0px;
    }
    .img-box{
        width: 100%;
        height: 100%;
        position: relative;
    }
     .img-box img{
        
         position: absolute;
         top:50%;
         left:50%;
         display: inline-block;
     }
    .img-box .zwsj{
        width: 516px;
        height: 382px;
        margin-left:-258px;
        margin-top:-191px;
     }

    .img-box .cgz{
        width: 536px;
        height: 278px;
        margin-left:-268px;
        margin-top:-139px;
    }
    .img-box .cxjz{
        width: 510px;   
        height: 198px;
        margin-left:-255px;
        margin-top:-99px;
    }
    .img-box .zwwl{
        width: 616px;   
        height: 384px;
        margin-left:-308px;
        margin-top:-192px;
    }
     .img-box .wlgz{
         font-size:18px;
         color:rgba(58,75,100,1);
         position: absolute;
         top:60%;
         left:45%;
     }
</style>
