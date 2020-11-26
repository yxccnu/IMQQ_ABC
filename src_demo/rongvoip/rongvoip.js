/**
 * Created by Administrator on 2017/5/15.
 */


const RongVoipSdkNode = require("../../Windows/sdk/RongVoipSdk.node").RongVoipSdk;
var sdk = new RongVoipSdkNode();


/**
 * 初始化
 */
exports.openVOIP = function () {
    sdk.openVOIP ();
};

/**
 * 发起音视频呼叫
 * @param targetId  群(讨论组)id (string类型), 如果一对一,为""
 * @param media     媒体类型 CMT_AUDIO=1, CMT_VIDEO=2
 * @param users     成员列表 字符串数组 ["id1", "id2"...]  
 * @param sessType  会话类型 会话类型 "1" 一对一 "2" 讨论组 "3" 群组
 */
exports.startCall = function (targetId, media, users, sessType) {
    sdk.startCall(targetId, media, users, sessType);
};

/**
 * 接收音视频邀请
 * @param callId 音视频callid
 * @param accept 1接受邀请, 0拒绝邀请
 * @param openCamera  1打开摄像头 0不打开摄像头 -1忽略该参数
 */
exports.acceptCall = function (callId, accept, openCamera) {
    sdk.acceptCall(callId, accept, openCamera);
};

/**
 * 主动加入会议 (通过callId)
 * @param callId (string) 音视频callid
 * @param target (string) 群组id （可以为空字符串"")
 * @param sessType (string) 会话类型 "1" 一对一 "2" 讨论组 "3" 群组
 * @param mediaType (int) 媒体类型 CMT_AUDIO=1, CMT_VIDEO=2
 * @param inviterId (string) 会议创建者Id
 * @param callback      function (suc, errCode) { if (!suc) { errCode = 1.用户超限；2.未知用户类型；3.其他端已在会议 4.会议结束 5.群内会议达上限 6.本地忙 7.参数错误; } }
 */
exports.joinCall = function (callId, target, sessType, mediaType, inviterId, callback) {
    sdk.joinCall(callId, target, sessType, mediaType, inviterId, callback);
};

/**
 * 挂断音视频
 * @param callId 音视频callid 如果为"",自动挂断当前活动会话
 */
exports.hangupCall = function (callId) {
    sdk.hangupCall (callId);
};

/*
 * 切换媒体流类型
 * @param idList    被切换媒体流的id列表 ["id1", "id2", ...], 如果全部联系人的媒体流都切换数组传空 idList=[];
 */
exports.modifyMedia = function (idList, mediaType) {
    sdk.modifyMedia (idList, mediaType);
};

/*
 *  添加(删除)成员
 * @param idList        添加(删除) 的id列表 ["id1", "id2", ...]
 * @param modifyType    ModifyMemType定义 1 添加 2 删除
 */
exports.modifyMember = function (idList, modifyType) {
    sdk.modifyMember(idList, modifyType);
};

/*
 *  请求成员的位置
 * @param targetId  群(讨论组)id (string类型), 如果一对一,为""
 * @param idList    添加(删除) 的id列表 ["id1", "id2", ...]
 */
exports.reqUsrLocation = function (target, idList) {
    sdk.reqUsrLocation (target, idList);
};

/*
 * 查询是否开启了服务器录制
 @param callId	    为 ""
 @param callback 	异步返回是否开启  callback = funciton (isOpen) { if (isOpen) "正在进行音视频录制"; }
 */
exports.isServRecording = function (callId, callback) {
    sdk.isServRecording(callId, callback);
};

/*
 * 开启（关闭）服务器录制
 @param callId	    为 ""
 @param start		1- 开始录制 0-停止录制
 @param callback 	异步返回是否操作成功 callback = funciton (suc) { if (suc) "成功"; }
 */
exports.startServRecord = function (callId, start, callback) {
    sdk.startServRecord(callId, start, callback);
};

/**
 * 添加监听函数，每个类型只能添加一个回调
 * @param notifyType notifyType
 * @param callback 回调函数
 */
exports.addSDKListener = function (notifyType, callback) {
    sdk.addSDKListener(notifyType, callback);
};

/*
 * 查询会议列表
 @param groupId (long)	 群组Id
 @param callback 	返回会议列表  callback = funciton (json) { json[0].callId, ... }
 */
exports.queryMeetingList = function (groupId, callback) {
    sdk.queryMeetingList(groupId, callback);
};

/*
 * 查询当前会议
 @param callback 	异步返回当前的音视频会议  callback = funciton (json) { if (json[exist]) { json[detail]; } }
 */
exports.queryCurrentCall = function (callback) {
    sdk.queryCurrentCall (callback);
};