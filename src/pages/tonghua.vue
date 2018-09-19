<template>
    <div class="main-right">
    
        <div class="main-right-top">
    
            <a class="list" href="#">通话情况分析</a>
    
        </div>
    
    
    
        <div class="thfx-box">
    
    
    
            <div class="thfx-content">
    
                <span class="th-sharing">选择日期</span>
    
                <div class="block">
    
                    <el-date-picker type="datetimerange" align="right" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00', '08:00:00']">
    
                    </el-date-picker>
    
                </div>
    
    
    
                <el-button class="th-seeks" type="primary"> <i class="logout iconfont icon-sousuo"></i> 搜索任务</el-button>
    
                <el-button class="th-download">下载</el-button>
    
    
    
            </div>
    
        </div>
    
    
    
        <div class="th-connect">
    
            <div id="ehcars" :style="{width: '50%', height: '80%'}">
    
            </div>
    
            <div id="eachrs1" :style="{width: '50%', height: '80%'}">
    
            </div>
    
        </div>
    
        <div class="footer">
    
            <div id="eachrs2" :style="{width: '100%', height: '100%'}">
    
            </div>
    
        </div>
    
        <div style="display:none" class="img-box">
    
            <img class="zwsj" src="../assets/img/zwsj.png" alt="">
    
            <div class="wlgz">暂无数据,主人加油哦！</div>
    
        </div>
    
        <div style="display:none" class="img-box">
    
            <img class="cgz" src="../assets/img/cgz.png" alt="">
    
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
    
        methods: {
    
            ehcars() {
    
                let echarts = this.$echarts.init(document.getElementById('ehcars'))
    
                echarts.setOption({
    
                    tooltip: {
    
                        trigger: 'item',
    
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
    
                    },
    
                    legend: {
    
                        orient: 'vertical',
    
                        x: 'left',
    
                        data: ['通话', '已接通']
    
                    },
    
                    series: [{
    
                        name: '访问来源',
    
                        type: 'pie',
    
                        radius: ['40%', '70%'],
    
                        avoidLabelOverlap: false,
    
                        label: {
    
                            normal: {
    
                                show: false,
    
                                position: 'center'
    
                            },
    
                            emphasis: {
    
                                show: true,
    
                                textStyle: {
    
                                    fontSize: '30',
    
                                    fontWeight: 'bold'
    
                                }
    
                            }
    
                        },
    
                        labelLine: {
    
                            normal: {
    
                                show: false
    
                            }
    
                        },
    
                        data: [{
    
                                value: 335,
    
                                name: '通话'
    
                            },
    
                            {
    
                                value: 310,
    
                                name: '已接通'
    
                            },
    
                        ]
    
                    }],
    
                })
    
            },
    
            eachrs1() {
    
                let echarts = this.$echarts.init(document.getElementById('eachrs1'))
    
                echarts.setOption({
    
                    tooltip: {
    
                        trigger: 'item',
    
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
    
                    },
    
                    legend: {
    
                        orient: 'vertical',
    
                        x: 'left',
    
                        data: ["未通话", "已通话", "无答应", "无法接通"]
    
                    },
    
                    series: [{
    
                        name: '访问来源',
    
                        type: 'pie',
    
                        radius: ['40%', '70%'],
    
                        avoidLabelOverlap: false,
    
                        label: {
    
                            normal: {
    
                                show: false,
    
                                position: 'center'
    
                            },
    
                            emphasis: {
    
                                show: true,
    
                                textStyle: {
    
                                    fontSize: '30',
    
                                    fontWeight: 'bold'
    
                                }
    
                            }
    
                        },
    
                        labelLine: {
    
                            normal: {
    
                                show: false
    
                            }
    
                        },
    
                        data: [{
    
                                value: 335,
    
                                name: '未通话'
    
                            },
    
                            {
    
                                value: 310,
    
                                name: '已通话'
    
                            },
    
                            {
    
                                value: 234,
    
                                name: '无答应'
    
                            },
    
                            {
    
                                value: 135,
    
                                name: '无法接通'
    
                            },
    
                        ]
    
                    }],
    
                })
    
            },
    
            ehcars2() {
    
                let echarts = this.$echarts.init(document.getElementById('eachrs2'));
    
                echarts.setOption({
    
                    title: {
    
                        text: '呼叫情况'
    
                    },
    
                    tooltip: {
    
                        trigger: 'axis',
    
                        axisPointer: {
    
                            type: 'cross',
    
                            label: {
    
                                backgroundColor: '#6a7985'
    
                            }
    
                        }
    
                    },
    
                    legend: {
    
                        data: ['未接通', '已接通']
    
                    },
    
                    grid: {
    
                        left: '3%',
    
                        right: '4%',
    
                        bottom: '3%',
    
                        containLabel: true
    
                    },
    
                    xAxis: [{
    
                        type: 'category',
    
                        boundaryGap: false,
    
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    
                    }],
    
                    yAxis: [{
    
                        type: 'value'
    
                    }],
    
                    series: [{
    
                            name: '未接通',
    
                            type: 'line',
    
                            stack: '总量',
    
                            areaStyle: {},
    
                            smooth: true,
    
                            data: [120, 132, 101, 134, 90, 230, 210]
    
                        },
    
                        {
    
                            name: '已接通',
    
                            type: 'line',
    
                            stack: '总量',
    
                            areaStyle: {},
    
                            smooth: true,
    
                            data: [220, 182, 191, 234, 290, 330, 310]
    
                        }
    
                    ]
    
                })
    
            }
    
        },
    
        mounted: function() {
    
            this.ehcars();
    
            this.eachrs1();

            this.ehcars2();
        }
    
    }
</script>
<style scoped>
    .main-right {
    
        width: 100%;
    
        height: 100%;
    
    }
    
    
    
    .thfx-box {
    
        width: 100%;
    
        height: 128px;
    
        background: rgba(255, 255, 255, 1);
    
        border-radius: 4px;
    
        box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
    
        box-sizing: border-box;
    
        margin-top: 30px;
    
        padding: 32px;
    
    }
    
    
    
    .thfx-content {
    
        display: flex;
    
        align-items: center;
    
        line-height: 78px;
    
    }
    
    
    
    .th-sharing {
    
        margin-right: 9px;
    
    }
    
    
    
    .th-seeks {
    
        margin: 0px 20px 0px 27px;
    
    }
    
    
    
    .th-download {
    
        width: 117px;
    
        height: 45px;
    
        border: 1px solid rgba(89, 175, 255, 1);
    
        border-radius: 4px;
    
        color: rgba(89, 175, 255, 1);
    
    }
    
    
    
    .th-connect {
    
        display: flex;
    
        width: 100%;
    
        height: 544px;
    
        background: rgba(255, 255, 255, 1);
    
        border-radius: 4px;
    
        box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
    
        box-sizing: border-box;
    
        margin: 20px 0px 23px 0px;
    
    }
    
    
    
    .img-box {
    
        width: 100%;
    
        height: 100%;
    
        position: relative;
    
    }
    
    
    
    .img-box img {
    
        position: absolute;
    
        top: 50%;
    
        left: 50%;
    
        display: inline-block;
    
    }
    
    
    
    .img-box .zwsj {
    
        width: 516px;
    
        height: 382px;
    
        margin-left: -258px;
    
        margin-top: -191px;
    
    }
    
    
    
    .img-box .cgz {
    
        width: 536px;
    
        height: 278px;
    
        margin-left: -268px;
    
        margin-top: -139px;
    
    }
    
    
    
    .img-box .cxjz {
    
        width: 510px;
    
        height: 198px;
    
        margin-left: -255px;
    
        margin-top: -99px;
    
    }
    
    
    
    .img-box .zwwl {
    
        width: 616px;
    
        height: 384px;
    
        margin-left: -308px;
    
        margin-top: -192px;
    
    }
    
    
    
    .img-box .wlgz {
    
        font-size: 18px;
    
        color: rgba(58, 75, 100, 1);
    
        position: absolute;
    
        top: 60%;
    
        left: 45%;
    
    }
    
    
    
    .footer {
    
        width: 100%;
    
        height: 540px;
    
        background: rgba(255, 255, 255, 1);
    
        border-radius: 4px;
    
        box-shadow: 4px 1px 5px rgba(41, 43, 44, 0.08);
    
    }
</style>
