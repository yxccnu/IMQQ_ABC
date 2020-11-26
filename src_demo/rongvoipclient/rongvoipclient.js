/**
 * Created by Administrator on 2017/5/15.
 */


const RongVoipClientSdkNode = require("../../Windows/sdk/RongVoipClientSdk.node").RongVoipClientSdk;
var sdk = new RongVoipClientSdkNode();


/**
 * 开启音视频远程端口监听
 @param port        端口
 @param onConnect   连接回调函数 onConnect = function (suc) { if (suc) 连接成功; }
 @param onFrame     数据帧回调函数 onFrame = function (buffer, width, height, sizePixel, videoUsr) { buffer 像素数据块, width宽 height高 sizePixel像素大小 videoUsr 视频所属联系人id }
 */
exports.doOpenCodec = function (port, onOpen, onFrame) {
    sdk.doOpenCodec(port, onOpen, onFrame);
};

/**
 * 添加监听函数，每个类型只能添加一个回调
 * @param notifyType notifyType
 * @param callback 回调函数
 */
exports.addSDKListener = function (notifyType, callback) {
    sdk.addSDKListener(notifyType, callback);
};

/**
 * 关闭音视频远程端口监听
 */
exports.doCloseCodec = function () {
    sdk.doCloseCodec();
};

/**
 * 开启(关闭)视频
 * @param videoEnable 1-开启 0-关闭
 */
exports.avSetVideoEnabled = function (videoEnable) {
    sdk.avSetVideoEnabled(videoEnable);
};

/**
 * 开启(关闭)音频
 * @param audioEnable 1-开启 0-关闭
 */
exports.avSetAudioEnabled = function (audioEnable) {
    sdk.avSetAudioEnabled(audioEnable);
};

/**
 * 开启(关闭)扬声器
 * @param speakerEnable 1-开启 0-关闭
 */
exports.avSetSpeakerEnabled = function (speakerEnable) {
    sdk.avSetSpeakerEnabled(speakerEnable);
};

/**
 * 开启(关闭)屏幕共享
 * @param start 1-开启 0-关闭
 * @param left, top, right, bottom  当start=1时有效,传入分享屏幕的位置
 */
exports.avStartOrStopScreenShare = function (start, left, top, right, bottom) {
    sdk.avStartOrStopScreenShare (start, left, top, right, bottom);
};

/**
 * 开启(关闭)流量统计
 * @param recvStatisticsEnable 1-开启 0-关闭
 */
exports.avSetSendRecvStatisticsDataEnabled = function (recvStatisticsEnable) {
    sdk.avSetSendRecvStatisticsDataEnabled(recvStatisticsEnable);
};

/**
 * 设置分辨率
 * @param profile VideoProfile_288P_15F = 0, VideoProfile_480P_15F = 10, VideoProfile_720P_15F = 20
 */
exports.avSelectResolution = function (profile) {
    sdk.avSelectResolution(profile);
};

/**
 * 获取白板的地址
 */
exports.avGetEWBServiceUrl = function () {
    sdk.avGetEWBServiceUrl();
};

/////////////////////////////
// 以下是 js sdk 回调给c++维护状态机的接口

/**
 * 加入房间成功
 */
exports.OnJoinChannelOK = function() {
    return sdk.OnJoinChannelOK();
};

/**
 * 加入房间失败
 * @param {number} failedType 加入房间失败 = 0, 加入房间被拒绝 = 1,
 */
exports.OnJoinChannelFailed = function(failedType) {
    return sdk.OnJoinChannelFailed(failedType);
};

/**
 * 离开房间成功
 */
exports.OnLeaveChannelOK = function() {
    return sdk.OnLeaveChannelOK();
};

/**
 * 用户加入房间
 *
 * @param {any} strUserID 用户id
 * @param {any} mediaType 媒体类型：音频 = 0, 音视频 = 1
 * @returns
 */
exports.OnUserJoinChannelAndStartRemoteRender = function(strUserID, mediaType) {
    return sdk.OnUserJoinChannelAndStartRemoteRender(strUserID, mediaType);
};

/**
 * 用户离开房间
 *
 * @param {any} strUserID 用户id
 * @returns
 */
exports.OnUserLeaveChannelAndRemoveRemoteRender = function(strUserID) {
    return sdk.OnUserLeaveChannelAndRemoveRemoteRender(strUserID);
};

/**
 * 媒体类型改变
 *
 * @param {string} strUserID 用户id
 * @param {number[0,1]} mediaType 媒体类型：音频 = 0, 音视频 = 1
 * @returns
 */
exports.OnUserMediaChanged = function(strUserID, mediaType) {
    return sdk.OnUserMediaChanged(strUserID, mediaType);
};
