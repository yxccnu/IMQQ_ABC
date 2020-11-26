
var CallMediaType = {
    CMT_AUDIO: 1,		// 音频
    CMT_VIDEO: 2,		// 视频
};
exports.CallMediaType = CallMediaType;

var avVideoResolutionProfile = {
    VideoProfile_288P_15F: 0,		// 分辨率352*288，帧率15
    VideoProfile_480P_15F: 10,		// 分辨率640*480，帧率15
    VideoProfile_720P_15F: 20,		// 分辨率1280*720，帧率15
};
exports.avVideoResolutionProfile = avVideoResolutionProfile;

var VOIP_CALL_NOTIFICATIONS = {
    VCN_CALL_INCOMING: 2200,		    // 音视频呼入
    VCN_CALL_CLOSED: 2201,		    // 音视频关闭
    VCN_PREPARE_AV_WND: 2202,		// 通知界面显示音视频窗口
    VCN_MEMBER_CHANGED: 2211,		// 参会成员状态变化通知
    VCN_MEMBER_LOCATION: 2212,		// 成员位置信息返回结果
    VCN_CALL_CONNECTED: 2213,		// 音视频接通
    VCN_JOIN_CALL_ERROR: 2214,		// 主动加入音视频会议错误 (通过callid加入) 
    VCN_OFFLINE_INVITE: 2215,		// 接收到音视频离线 // time 时间 type 1 有效邀请（未超时，邀请方未挂断）；2 邀请方已挂断 ；3.邀请超时；4 服务端拒绝（客户端已唤起推送但未登录）
    VCN_CALLLIST_CHANGED: 2216,		// 群的音视频会议列表发生变化 "status": 0 会议等待 1会议进行中 2会议结束
};
exports.VOIP_CALL_NOTIFICATIONS = VOIP_CALL_NOTIFICATIONS;

var ModifyMemType = {
    MMT_Add : 0x01,                 // 成员操作(添加)
	MMT_Remove : 0x02,              // 成员操作(删除) 
};
exports.ModifyMemType = ModifyMemType;