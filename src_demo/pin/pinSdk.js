/**
 * Created by Administrator on 2017/5/17.
 */

const PinSdkNode = require("../../Windows/sdk/PinSdk.node").PinSdk;
var sdk = new PinSdkNode();


/**
 * 初始化
 */
exports.initSDKPin = function () {
    sdk.initSDKPin();
};

/**
 * 添加监听函数，每个类型只能添加一个回调
 * @param notifyType FriendsListenerType
 * @param callback 回调函数
 */
exports.addSDKListener = function (notifyType, callback) {
    sdk.addSDKListener(notifyType, callback);
};

/*
 * 从服务器读取PIN列表
 * @param opt		(long) 选项 PINListOption
 * @param pId		(long) 增量查询 0 忽略
 * @param pageSize	(long) 页大小 0 查询全部
 * @param callback	function (json) { if (json[suc]) { json[result]; }
 */
exports.PINListFromServ = function (opt, pId, pageSize, callback) {
    sdk.PINListFromServ (opt, pId, pageSize, callback);
};

/*
 * 从服务器读取PIN详情
 * @param pId		(long) PIN id
 * @param callback	function (json) { if (json[suc]) { json[result]; }
 */
exports.PINDetailFromServ = function (pId, callback) {
    sdk.PINDetailFromServ(pId, callback);
};

/*
 * 从服务器读取PIN回复列表
 * @param pId		(long) PIN id
 * @param replyId	(long) 增量查询 0 忽略
 * @param pageSize	(long) 页大小 0 查询全部
 * @param callback	function (json) { if (json[suc]) { json[result]; }
 */
exports.PINReplyFromServ = function (pId, replyId, pageSize, callback) {
    sdk.PINReplyFromServ(pId, replyId, pageSize, callback);
};

/*
 * 从回复PIN
 * @param pId		(long) PIN id
 * @param content	(string) 回复内容
 * @param callback	function (json) { if (json[suc]) { json[result]; }
 */
exports.ReplyPIN = function (pId, content, callback) {
    sdk.ReplyPIN(pId, content, callback);
};

/*
 * 批量确认PIN
 * @param pIdArray	(long array) PIN id 列表
 * @param isAll 是否全部确认，是传true，否传false
 * @param callback	function (suc) { if (suc) {}}
 */
exports.ConfirmPIN = function (pIdArray, isAll, callback) {
    sdk.ConfirmPIN(pIdArray, isAll, callback);
};

/*
 * 删除PIN
 * @param pId       	(long) PIN id
 * @param callback	function (suc) { if (suc) {}}
 */
exports.DeletePIN = function (pId, callback) {
    sdk.DeletePIN(pId, callback);
};

/*
 * 添加接收人
 * @param pId       	(long) PIN id
 * @param pIdArray	(long array) 接收人id列表
 * @param callback	function (suc) { if (suc) {}}
 */
exports.AddPINRecver = function (pId, usrArray, callback) {
    sdk.AddPINRecver(pId, usrArray, callback);
};

/*
 * 创建新的PIN消息
 * @param content	    (string) 内容
 * @param timer         	(long) 重复发送的计时器
 * @param recvList	    (long array) 接收Id列表
 * @param filePathList	(string array) 文件路径数组
 * @param thumbPathList   (string array) thumb路径数组
 * @param progCallback	function (prog) { 完成进度%; }
 * @param callback	function (json) { if (json[suc]) { json[result]; }
 */
exports.NewPIN = function (content, timer, recvList, filePathList, thumbPathList, progCallback, callback) {
    sdk.NewPIN(content, timer, recvList, filePathList, thumbPathList, progCallback, callback);
};

/*
 * 上传文件后,创建新的PIN消息
 * @param content	    (string) 内容
 * @param timer         	(long) 重复发送的计时器
 * @param recvList	    (long array) 接收Id列表
 * @param fileNameList	(string array) 文件名称数组
 * @param fileIdList    (string array) 文件Id数组
 * @param fileSizeList	(long array) { 文件大小数组; }
 * @param callback	function (json) { if (json[suc]) { json[result]; }
 */
exports.NewPINByUpload = function (content, timer, recvList, fileNameList, fileIdList, fileSizeList, callback) {
    sdk.NewPINByUpload(content, timer, recvList, fileNameList, fileIdList, fileSizeList, callback);
};

/*
 * 获取 (未确认的PIN消息总数) (未查看的回复消息数)
 * @param callback	function (suc, unConfirmed, unRead) { if (suc) { unConfirmed:未确认的PIN消息总数; unRead:未查看的回复消息数 }}
 */
exports.GetUnreadCount = function (callback) {
    sdk.GetUnreadCount(callback);
};

/*
 * 更新回复消息的状态为已读
 * @param all	    (long) 1 需要更新全部回复消息的状态为已读 0 
 * @param arr	    (long array) [回复id数组,]
 * @param callback	function (suc) { if (suc) { 更新成功 }}
 */
exports.SetReplyRead = function (all, arr, callback) {
    sdk.SetReplyRead(all, arr, callback);
};

/*
 * PIN接收者删除PIN
 * @param pId       	(long) PIN id
 * @param callback	function (suc) { if (suc) {}}
 */
exports.DeletePINByRecver = function (pId, callback) {
    sdk.DeletePINByRecver(pId, callback);
};

/*
 * 删除回复的消息(只能删自己的回复)
 * @param pId       	(long) PIN id
 * @param msgId     (long) 回复的消息 id
 * @param callback	function (suc) { if (suc) {}}
 */
exports.DeletePinReply = function (pId, msgId, callback) {
    sdk.DeletePinReply(pId, msgId, callback);
};