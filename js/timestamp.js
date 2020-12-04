var t = null;
// t = setTimeout(formatDate, 1000);
t = setTimeout(formatDate, 1000);

function formatDate(fmt = 'yyyy/MM/dd hh:mm:ss') {
    clearTimeout(t);//清除定时器
    // 这里传入的timestamp应该是Number数值，如果是字符串，需要先转换为Number
    // var timestamp=parseInt(timestamp)
    var date = new Date()
    if (/(y+)/.test(fmt)) {
        // $1标识第一个子串中的内容；这里当fmt格式中年份少于4位时，从后往前取
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDay(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };

    for (let key in o) {
        if (new RegExp(`(${key})`).test(fmt)) {
            let str = o[key] + "";
            fmt = fmt.replace(RegExp.$1, str.length === 2 ? str : padLeftZero(str));
        }
    }
    document.getElementsByClassName("timestamp")[0].innerHTML = "当前时间:" + fmt;

    // 设定定时器，循环运行
    t = setTimeout(formatDate, 1000)
}

// 函数padLeftZero的作用：如果月份为1位(如9),则在其左边补0(变为09)
function padLeftZero(str) {
    return "0" + str.substr(str.length - 1)
}