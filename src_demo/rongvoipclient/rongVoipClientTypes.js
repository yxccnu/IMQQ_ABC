
var avVideoResolutionProfile = {
    VideoProfile_288P_15F: 0,		// 分辨率352*288，帧率15
    VideoProfile_480P_15F: 10,		// 分辨率640*480，帧率15
    VideoProfile_720P_15F: 20,		// 分辨率1280*720，帧率15
};
exports.avVideoResolutionProfile = avVideoResolutionProfile;

var VOIP_CALL_NOTIFICATIONS = {
    VCN_ADD_LOCAL_RENDER: 2203,     // 开启本地音视频显示
    VCN_ADD_REMOTE_RENDER: 2204,	    // 开启远端音视频显示
    VCN_REMOVE_LOCAL_RENDER: 2205,	// 关闭本地音视频显示
    VCN_REMOVE_REMOTE_RENDER: 2206,	// 关闭远端音视频显示
    VCN_CODEC_CLIENT_CLOSED: 2207,	// 音视频关闭
    VCN_MEDIA_CHANGED: 2208,		    // 音视频媒体流切换		
    VCN_WHITEBOARD_URL: 2209,		// 白板地址
    VCN_CODEC_MODIFY_MEDIA : 2210,	// 收到媒体切换通知
};
exports.VOIP_CALL_NOTIFICATIONS = VOIP_CALL_NOTIFICATIONS;
