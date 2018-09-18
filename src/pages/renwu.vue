<template>
    <div>
        <div class="main-right">
            <div class="main-right-top">
                <h2>机器人工作台</h2>
            </div>
            <div class="main-right-box">
                <div class=" screen">
                    <span class="select">机器人筛选</span>

                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="right-bottom">
                    <table class="main-table">
                        <tr class="main-trs">

                            <th>
                                序号
                            </th>
                            <th>机器人名称</th>
                            <th>购买时间</th>
                            <th>过期时间</th>
                            <th>关联业务</th>
                            <th>备注</th>
                            <th>状态</th>
                            <th>操作</th>

                        </tr>
                        <tr class="main-trs">
                            <td>

                                01
                            </td>
                            <td>张三</td>
                            <td>2018-08-08 13:00:00</td>
                            <td>2018-08-08 13:00:00</td>
                            <td>xxx话术流程</td>
                            <td>xxx话术流程</td>
                            <td>启用</td>
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
                            <td>2018-08-08 13:00:00</td>
                            <td>2018-08-08 13:00:00</td>
                            <td>xxx话术流程</td>
                            <td>xxx话术流程</td>
                            <td>启用</td>
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
                            <td>2018-08-08 13:00:00</td>
                            <td>2018-08-08 13:00:00</td>
                            <td>xxx话术流程</td>
                            <td>xxx话术流程</td>
                            <td>启用</td>
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
                            <td>2018-08-08 13:00:00</td>
                            <td>2018-08-08 13:00:00</td>
                            <td>xxx话术流程</td>
                            <td>xxx话术流程</td>
                            <td>启用</td>
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
                            <td>2018-08-08 13:00:00</td>
                            <td>2018-08-08 13:00:00</td>
                            <td>xxx话术流程</td>
                            <td>xxx话术流程</td>
                            <td>启用</td>
                            <td>
                                <button class="hjxx">播放记录</button>
                                <button class="dcly">导出录音</button>
                            </td>
                        </tr>

                    </table>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
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
      value: ""
    };
  }
};
</script>
<style scoped>
.main-right-top h2 {
  font-size: 30px;
  color: rgba(58, 75, 100, 1);
  font-weight: 400;
  margin-top: -10px;
}
.main-right-box {
  width: 100%;
  height: 705px;
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
  padding-left: 10px;
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
.main-right .main-right-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 53px;
}
.main-table {
  width: 100%;
  height: 100%;
}
.main-trs {
  /* width: 100px; */
  height: 100px;
  text-align: center;
  border-bottom: 1px solid rgba(213, 216, 219, 1);
  line-height: 50px;
}
.main-trs th {
  height: 100px;
  font-size: 16px;
  color: rgba(58, 75, 100, 1);
}
.main-trs td {
  /* width: 100px; */
  height: 50px;
  box-sizing: border-box;
  padding: 0px 35px;
  box-sizing: border-box;
}
.hjxx {
  width: 98px;
  height: 30px;
  color: rgba(70, 180, 255, 1);
  border: 1px solid rgba(70, 180, 255, 1);
  border-radius: 4px;
  background: white;
}
.dcly {
  width: 98px;
  height: 30px;
  color: rgba(255, 150, 37, 1);
  border: 1px solid rgba(255, 150, 37, 1);
  border-radius: 4px;
  background: white;
}
</style>
