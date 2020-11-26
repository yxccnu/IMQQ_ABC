/**
 * Created by Administrator on 2017/5/12.
 */

// var msg_peer = 600000000002;
var msg_peer = 900013230;       //民生号码
var user_qiaoqiang = 900013230;
var user_guoxiaoyan = 100024888;

var msg_peer2 = 100000014;
var msg_peer_public = 600000000002;
var msg_peer_group = 900000000121;
var msg_peer_group2 = 900000000040;

msgSdk.initSDKMsg();
addListener();


function msgCallback(json) {
    console.log(json);
}

function addListener() {
msgSdk.addSDKListener(MsgListenerType.NOTIFY_SESSION_CHANGED, msgCallback);
msgSdk.addSDKListener(MsgListenerType.NOTIFY_SESSION_ADD, msgCallback);
msgSdk.addSDKListener(MsgListenerType.NOTIFY_SESSION_REMOVED, msgCallback);
msgSdk.addSDKListener(MsgListenerType.NOTIFY_MESSAGE_RECVED_ADD, msgCallback);
msgSdk.addSDKListener(MsgListenerType.NOTIFY_MESSAGE_SENDING_ADD, msgCallback);
msgSdk.addSDKListener(MsgListenerType.NOTIFY_MESSAGE_REMOVED, msgCallback);
msgSdk.addSDKListener(MsgListenerType.NOTIFY_MESSAGE_CHANGED, msgCallback);
msgSdk.addSDKListener(MsgListenerType.NOTIFY_MSG_READ_REPLY_RECVED, msgCallback);
msgSdk.addSDKListener(MsgListenerType.NOTIFY_TYPING_RECVED, msgCallback);
msgSdk.addSDKListener(MsgListenerType.NOTIFY_MESSAGE_BURNED, msgCallback);
msgSdk.addSDKListener(MsgListenerType.NOTIFY_MESSAGE_BANNED, msgCallback);
}

// 单发文本消息
function sendTxtMsg() {
    msgSdk.sendTextMessage("12345678test测试", user_qiaoqiang, 0,
    function (msgId, result) {
        console.log(msgId + " 结果 " + result);       // 1=成功 0=失败
    });
}





// 单发文件
function sendFileMsg() {
    msgSdk.sendFileMessage("c:\\login.jpg", msg_peer,
    function (msgId, prog) {
        console.log(msgId + " 进度 " + prog);
    },
    function (msgId, result) {
        console.log(msgId + " 结果 " + result);    // 1=成功 0=失败
    });
}



// 单发图片
function sendImageMsg() {
    msgSdk.sendImageMessage("c:\\login.jpg", "c:\\login.jpg", "", msg_peer,
    function (msgId, prog) {
        console.log(msgId + " 进度 " + prog);
    },
    function (msgId, result) {
        console.log(msgId + " 结果 " + result);       // 1=成功 0=失败
    });
}



function getMessageList() {
    msgSdk.messageList(user_qiaoqiang/*359374414*/, 0, 0,
    function (msg_list) {
        console.log(JSON.stringify(msg_list));
    });
}

function messageListBySearch() {
    msgSdk.messageListBySearch("..", function (json) {
        console.log(JSON.stringify(json));
    });
}

function getMessageListOfType () {
    msgSdk.messageListOfType(msg_peer/*359374414*/, 0, 10, MsgType.MT_Txt,
    function (msg_list) {
        console.log(JSON.stringify(msg_list));
    });
}

function sessionList() {
    msgSdk.sessionList(-1, -1, function (data) {
        console.log(JSON.stringify(data));
    });
}

function publicSessionList() {
    msgSdk.publicNumSessionList(-1, -1, function (data) {
        console.log(JSON.stringify(data));
    });
}

function openSession() {
    msgSdk.openSession (user_qiaoqiang);
}

function closeSession() {
    msgSdk.closeSession(user_qiaoqiang);
}

function createEmptySession() {
    msgSdk.createEmptySession(msg_peer2, 20, function (data) {
        console.log(JSON.stringify(data));
        var sessId = data.draft.sessionID;
        console.log (sessId);
        msgSdk.saveSessionDraft(sessId, "暂存的草稿...");      // 测试根据sess-id,暂存草稿
        msgSdk.topSession(sessId, 1);                             // 测试session置顶
    });
}

function removeSession() {
    msgSdk.sessionByPeerId(msg_peer2, function (data) {
        var sessId = data.draft.sessionID;
        console.log(sessId);
        msgSdk.removeSession(sessId);
    });
}

function removeMsgById() {
    msgSdk.removeMessages(msg_peer_group2, "");    
}

function testUndoMsg() {
    msgSdk.messageList(msg_peer, 0, 1,
    function (list) {
        var sequence = list["msg-list"][0].sequence;
        console.log(sequence);
        msgSdk.undoMessage(sequence, [msg_peer], function (undoResult) {
            console.log(undoResult);
        });
    })
}

function testRecvPublicOffline() {
    pnSdk.takeFocusedPublics(function (list) {
        var idList = [];
        for (var i = 0; i < list.length; i++) {
            idList[i] = list[i].publicID;
        }
        console.log(idList);
        msgSdk.doRecvPublicOffline(idList, function (result) {
            console.log("doRecvPublicOffline " + result);
        });
    });
}

function testMsgCountAll() {
    msgSdk.msgCountAll(msg_peer, 1, function (peer, count) {
        console.log(peer + "全部消息条数 " + count);
    });
}

function testMsgTimeList() {
    msgSdk.msgTimeList(msg_peer, 1, function (peer, arr) {
        console.log(peer + "全部消息时间列表 " + arr);
    });
}

function testMessageListOfTime() {
    msgSdk.messageListOfTime(msg_peer, 10000, 0, 10, 1, 1, function (json) {
        console.log(json);
    });
}

function testSessUnreadCount() {
    msgSdk.sessUnreadCount(2, function (count) {
        console.log("全部未读消息条数 " + count);
    });
}

function testSessUnreadList() {
    msgSdk.sessUnreadList(function (json) {
        console.log(json);
    });
}

function testSessionBySessId() {
    msgSdk.sessionBySessId("SESS_PUB", function (sess) {
        console.log(sess);
    });
}


function sendMessageById() {
    var msgId = "7CD7DD63AB08A92499D6EE579DDE6464";
    msgSdk.sendMessageById(msg_peer, msgId, 
        function (msgId, prog) {
            console.log(msgId + " 进度 " + prog);
        },
        function (msgId, result) {
            console.log(msgId + " 发送结果 " + result);
        }
    )
}

function addMessage2FavorTxt() {
    var msgId = "9BFA2C25EFEBA8E4882ECA10F0011A42";
    msgSdk.addMessage2Favor(msg_peer, msgId, -1, function (msgId, suc) {
        console.log(msgId + " 收藏结果 " + suc);
    });
}

function takeMessageFavorListFromServ() {
    msgSdk.takeMessageFavorListFromServ(0, 20, function (json) {
        console.log(json);
    });
}

function takeMessageFavorListFromLocal() {
    msgSdk.takeMessageFavorListFromLocal(0, 20, -1, function (json) {
        console.log(json);
    });
}

function searchMessageFavorListFromLocal() {
    msgSdk.searchMessageFavorListFromLocal(0, 20, -1, "回", function (json) {
        console.log(json);
    });
}

function removeFromFavor() {
    msgSdk.removeFromFavor(3, 0);
}

function getRemainSizeFromServ() {
    msgSdk.getRemainSizeFromServ(function (suc, remain, used) {
        console.log("获取剩余空间 " + suc + " " + remain + " " + used);
    })
}

function syncFavorOper() {
    msgSdk.syncFavorOper();
}

function jointAmrFile() {
    msgSdk.jointAmrFile("d:\\aaa.log", "d:\\Desktop.zip", function (pathOut, isSuc) {
        console.log("输出文件 " + pathOut + " " + isSuc);
    });
}


function sendOutLinkMessage() {
    msgSdk.sendOutLinkMessage("测试分享", "没什么可说的...", "http://www.sohu.com", "浏览器", "d:\\Desert.jpg", 2, msg_peer,
        function (msgId, prog) {
            console.log("进度" + prog);
        },
        function (msgId, suc) {
            console.log("结果" + suc);
        });
}

function sendEmotion4MinShengMessage() {
    msgSdk.sendEmotion4MinShengMessage(1, "1234", "测试表情", "测试表情.img", "aaa", msg_peer,
        function (msgId, suc) {
            console.log("结果" + suc);
        });
}

function messageSetPlay() {
    msgSdk.messageSetPlay(msg_peer, "0B722BDFA417BF607BEE771B7B8B340D");
}

function sendTyping() {
    msgSdk.sendTyping(msg_peer, function (suc) {
        console.log("按键发送结果" + suc);
    });
}

function countFavorListFromLocal() {
    msgSdk.countFavorListFromLocal(-1, function (count) {
        console.log("收藏条数" + count);
    });
}

function msgCountOfType() {
    msgSdk.msgCountOfType(msg_peer, MsgType.MT_Txt, function (peer, count) {
        console.log("文本消息条数" + count);
    });
}

function openBurnMessage() {
    msgSdk.openBurnMessage(msg_peer, "0A83E793A7DF9A44BACEAB4BF1AAA941", 1505355799937, function (suc) {
        console.log("打开阅后即焚消息 " + suc);
    });
}

function test_initSetSearchFilterWords() {
    msgSdk.initSetSearchFilterWords(["#:z", "#-.-", "#:D", "#:)", "#:]", "#;-L", "#;-D",
            "#:<", "#*_*", "#+_+", "#>_<", "#^_+", "#;P", "#0o0", "#:-D", "#ToT", "#>P", "#z_z",
            "#-_,-", "#^_^", "#>o<", "#;<", "#@_@", "#+o+", "#;z*", "#x_x", "#.-b", "#@,@", "#>-<",
            "#:-<", "#(cute)", "#(bh)", "#(b)", "#(g)", "#-@", "#(p)", "#(18)", "#(kiss)", "#(flag)",
            "#(d)", "#(pig)", "#(bg)", "#(qiu)", "#(dance)", "#(good)", "#(bingo)", "#(ok)",
            "#(strong)", "#(b3g)", "#(blg)", "#(yoga)", "#(cut)", "#(head)", "#(no)", "#(^L)", "#(love)"]);
}

function copyMessageFrom() {
    msgSdk.copyMessageFrom(msg_peer_group, msg_peer_group2, function (num) {
        console.log("拷贝了 " + num + " 条消息");
    });
}

function getUrlAuthCode() {
    msgSdk.getUrlAuthCode("OAID", "http://pmo.ultrapower.com.cn/ucas", function (suc, type, authCode) {
        console.log("suc: " + suc + " authcode: " + authCode);
    });
}

function getGeneralMsgAuthCode() {
    msgSdk.getGeneralMsgAuthCode(function (suc, authCode) {
        console.log("suc: " + suc + " authcode: " + authCode);
    });
}


function testSendCombineMessage() {

    // var json = [{"senderName":"A", "msgId":"261ABCD979808B641AF5D087C7FE97A3", "content":"Hello"}, {"senderName":"B", "msgId": "5CCE727B3DCA1854FB93EEB29429BA41", "content":"World"}];
    // msgSdk.sendCombineMessage(100008088, "A与B的聊天记录", ["{\"msgId\":\"F0BE763F867EEE74C81BD245015304F9\", \"description\":\"Hello\"}", "{\"msgId\": \"1B3A7BB46A5B6644BB16D79CB3277A53\", \"description\":\"World\"}"], 100008088, function (msgId, isSuccess) {
    //     //     console.log(msgId, isSuccess);
    //     // });

    // msgSdk.sendCombineMessage(100008088, "A与B的聊天记录", ["{\"msgId\":\"54FCE9A3563DEB14FAAB82AB6557E3A4\", \"description\":\"小李：你好啊，小王。\"}", "{\"msgId\": \"1E08A85AA4B654A45AC556AC47AF16F6\", \"description\":\"小王：收到！\"}"], 100008088, function (msgId, isSuccess) {
    //     console.log(msgId, isSuccess);
    // });

    // msgSdk.sendCombineMessage(100008088, "A与B的聊天记录", ["{\"msgId\":\"F0BE763F867EEE74C81BD245015304F9\", \"description\":\"小李：你好啊，小王。\"}", "{\"msgId\": \"1B3A7BB46A5B6644BB16D79CB3277A53\", \"description\":\"小王：收到！\"}"], user_qiaoqiang, function (msgId, isSuccess) {
    //     console.log(msgId, isSuccess);
    // });

    // msgSdk.sendCombineMessage(user_qiaoqiang, "和乔强的聊天记录", ["{\"msgId\":\"057A12EF077F8A0448004315011001D9\", \"description\":\"guoxiaoyan：444...\"}", "{\"msgId\": \"9A9BE3930318B814186CB5B64E0F9CA9\", \"description\":\"guoxiaoyan:another 444...\"}"], user_qiaoqiang, function (msgId, isSuccess) {
    //     console.log(msgId, isSuccess);
    // });

    // msgSdk.sendCombineMessage(user_qiaoqiang, "和乔强的聊天记录", ["{\"msgId\":\"9D1146821CBFE774896F4C67F1002A47\", \"description\":\"guoxiaoyan：444...\"}", "{\"msgId\": \"17A8322AF2FD2A34493E03A89DCECA0B\", \"description\":\"guoxiaoyan:another 444...\"}"], user_qiaoqiang, function (msgId, isSuccess) {
    //     console.log(msgId, isSuccess);
    // });

    //嵌套消息
    msgSdk.sendCombineMessage(user_qiaoqiang, "和乔强的聊天记录", ["{\"msgId\":\"E97AAC91E0E3A0646A6E007F7278919E\", \"description\":\"嵌套消息：444...\"}", "{\"msgId\": \"17A8322AF2FD2A34493E03A89DCECA0B\", \"description\":\"guoxiaoyan:another 444...\"}"], 900000000121, function (msgId, isSuccess) {
        console.log(msgId, isSuccess);
    });
}

function testGetCombineMessage() {
    msgSdk.getCombineMessageFromServer(user_guoxiaoyan, user_qiaoqiang, 1537931805379, function (isSuccess, msg) {
        console.log(isSuccess, msg);
    })
}

function testForwardCombineMessage() {
    msgSdk.forwardCombineMessage(user_guoxiaoyan, '740166F729BA79A4AB1DF6CE06FB096C', 900000000121, function (isSuccess, msg) {
        console.log(isSuccess, msg);
    })
}

function testGetMessageConfigList() {
    msgSdk.getMessageConfigList(1, function (isSuccess, newVersion, configList) {
        console.log(isSuccess, newVersion, configList);
    })
}

function testGetMessageConfig() {
    msgSdk.getMessageConfig(10004, function (isSuccess, config) {
        console.log(isSuccess, config);
    })
}