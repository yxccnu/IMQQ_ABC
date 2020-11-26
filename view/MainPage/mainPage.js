// 循环输出聊天历史数组
// 循环输出聊天历史数组
// 循环输出聊天历史数组
// 循环输出聊天历史数组
var msgList = ['test1','test2','test3','test4','test5','test6','test1','test2','test3','test4','test5','test6','test1','test2','test3','test4','test5','test6']
var liStr = ''
msgList.forEach(item => {
    liStr+='<li>'+item+'</li>'
});
document.getElementById('historyListID').innerHTML = liStr


// 

