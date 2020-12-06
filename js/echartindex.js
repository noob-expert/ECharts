// var echarts=require("echarts")

// 设备增长量
(function () {
    // 初始化echarts实例
    var myChart = echarts.init(document.getElementsByClassName("content1")[0]);

    var option = {
        grid: {
            left: "0%",
            top: "10%",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        tooltip: {
            show: true,
            trigrt: "axis"
        },
        xAxis: {
            type: 'category',
            data: ['Jan', 'Mar', 'May', 'July', 'Sep', 'Dec'],
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisLine: {
                show: true
            }
        },
        yAxis: {
            type: 'value',
            min: 500,
            // 文字标签样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            // 线条样式
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            // 分割线样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }

        },
        series: [{
            data: [602, 612, 613, 619, 630, 671],
            type: 'bar',
            barWidth: "40%",
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
        }]
    };

    // 让图表跟随屏幕自动地去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })


    // 生效实例化对象
    myChart.setOption(option)
})();

// 终端增长量
(function () {
    // 初始化echart对象
    var myChart = echarts.init(document.getElementsByClassName("content2")[0]);

    // 配置项
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // 在serise中标记name时则不需要再在lengend中设置
            // data: ['PLDT', 'SKYCABLE', 'ETPI']
            textStyle:{
                color:"white",
                fontSize:"12"
            },
            right:10,
            top:5
        },
        grid: {
            top:"20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            show:true,//显示边框
            borderColor:"#012f4a", //边框颜色
            containLabel: true
        },
        xAxis: {
            type: 'category',
            // 去除轴内间距
            boundaryGap: false,
            // 去除刻度线
            axisTick:{
                show:false
            },
            // 去除轴线
            axisLine:{
                show:false
            },
            // 文本颜色
            axisLabel:{
                color:"#4c9bfd"
            },
            data: ['Jan', 'Mar', 'May', 'July', 'Sep', 'Dec'],
        },
        yAxis: {
            type: 'value',
            // 去除刻度线
            axisTick:{
                show:false
            },
            axisLabel:{
                color:"#4c9bfd"
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        },
        // 设置sries3条line的颜色
        color:["white","blue","green"],
        series: [
            {
                name: 'PLDT',
                type: 'line',
                smooth:true,
                
                data: [934414, 995992, 1026469, 1093409,1172940, 1279229]
            },
            {
                name: 'SKYCABLE',
                type: 'line',
                smooth:true,
                data: [3602, 4004, 4047, 4080, 4153, 4157]
            },
            {
                name: 'ETPI',
                type: 'line',
                smooth:true,
                data: [2443, 2628, 2628, 2628, 2980, 3180]
            }
        ]
    };


    window.addEventListener("resize", function () {
        myChart.resize();
    })
    // 配置挂载
    myChart.setOption(option);
})();

 // 网络活动完成度
    (function () {
        var myChart = echarts.init(document.getElementsByClassName("content3")[0]);

        // 更换每个柱子的颜色
        var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2011年', '2012年']
            },
            grid: {
                top: '10%',
                left: '12%',
                bottom: '10%',
                // containLabel: true
            },
            xAxis: {
                show: false
            },
            yAxis: [
                {
                    type: 'category',
                    data: ['HTML5', 'CSS3', 'javascript', 'vue', 'node'],
                    axisLabel: {
                        color: "#fff"
                    },
                    // 反转坐标轴
                    inverse: true,
                    // 不显示轴线
                    axisLine: {
                        show: false
                    },
                    // 不显示刻度
                    axisTick: {
                        show: false
                    }
                },
                {
                    type: 'category',
                    // data: ['HTML5', 'CSS3', 'javascript', 'vue', 'node'],
                    axisLabel: {
                        color: "#fff"
                    },
                    inverse: true,
                    // 不显示轴线
                    axisLine: {
                        show: false
                    },
                    // 不显示刻度
                    axisTick: {
                        show: false
                    }
                }
            ]


            ,
            series: [
                // 第一组柱子相关样式
                {
                    name: '条',
                    type: 'bar',
                    barCategoryGap: 50,
                    barWidth: 20,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 20,
                            // 更换每个柱子的颜色
                            color: function (params) {
                                return myColor[params.dataIndex]
                            }
                        }
                    },
                    // 柱子的文本标签
                    label: {
                        normal: {
                            show: true,
                            position: "inside",
                            // 会自动解析为数组data里的值
                            formatter: "{c}%"
                        }
                    },
                    // 设置位置和数据
                    yAxisIndex: 0,
                    data: [70, 34, 60, 68, 79]
                },
                {
                    name: '框',
                    type: 'bar',
                    barCategoryGap: 50,
                    barWidth: 20,
                    itemStyle: {
                        color: "none",
                        borderColor: "#fff",
                        borderWidth: 2,
                        barBorderRadius: 15
                    },
                    // 设置位置和数据
                    yAxisIndex: 1,
                    data: [100, 100, 100, 100, 100]
                }
            ]
        };



        window.addEventListener("resize", function () {
            myChart.resize();
        })

        myChart.setOption(option)
    })();


    // 网络优化/客户满意度
    (function () {
        // 初始化echart对象
        var myChart = echarts.init(document.getElementsByClassName("content4")[0]);

        
        // 配置项
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                // data: ['网络巡检', '备件服务', '客户培训', '网优项目'],
                textStyle:{
                    color:"rgba(255,255,255,.5)",
                    fontSize:"12"
                }
            },
            series: [
                {
                    name: '比例',
                    type: 'pie',
                    radius: '55%',
                    // 饼形图在容器中的位置，在其他类型中是grid
                    center: ['50%', '50%'],
                    // 内外圆半径
                    radius:["40%","80%"],
                    // 标签文字
                    label:{
                        show:true,
                        color:"white"
                    },
                    // 连接线
                    labelLine:{
                        show:true
                    },
                    cursor:"pointer",
                    data: [
                        {value: 50, name: '网络巡检'},
                        {value: 15, name: '备件服务'},
                        {value: 10, name: '客户培训'},
                        {value: 25, name: '网优项目'},
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        


        window.addEventListener("resize", function () {
            myChart.resize();
        })
        // 配置挂载
        myChart.setOption(option);
    })()

