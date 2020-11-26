/**
 * Created by Administrator on 2017/5/4.
 */

/*
 * onChanged 返回的sdk状态变化
 */
var AppState = {
    APS_UNINITIALIZE : 1,		    // 程序未初始化
    APS_INITIALIZED : 2,			// 程序初始化完成
    APS_UNLOGINED : 3,				// 程序未登录
    APS_LOGINING : 4,				// 程序登录中
    APS_LOGINED_WITH_NET : 5,		// 程序处于登录成功并且cin连接成功状态
    APS_LOGINED_WITHOUT_NET : 6,	// 登录后断网
    APS_LOGOFFING : 7,				// 注销中状态
    APS_LOGINED_CONNECTING : 8,	// 登录后正在联网
    APS_INITIALIZING : 9,		 // 正在初始化
    APS_ACTIVE_USER_WITH_NET : 10,    // 当前网络正常，ACP鉴权已经完成，还没有连接cmp，当前用户已经设置，对用户的环境进行初始化
    APS_ACTIVE_USER_WITHOUT_NET : 11,	    // 当前没有网络，ACP鉴权已经完成，还没有连接cmp，当前用户已经设置，对用户的环境进行初始化
};


/*
 * 向UI抛送的通知
 */
var BaseListenerType = {
    NOTIFY_LOGIN_FAILED : 8,				// 登录失败 long1 errcode
    NOTIFY_NEWAPP_VERSION : 9,				// 新版本下载 str3 下载地址
    NOTIFY_LOGINED : 11,					// acp登录成功
    NOTIFY_LOGOUT: 20,					// 注销登录
    NOTIFY_KICKOFF: 32,                 // 被踢出
    NOTIFY_QRCODE_FOR_LOGIN: 33,		// 扫码二微码链接 str3 
    NOTIFY_DONT_DISTURB_CHANGED: 35,		// 其他端同步了免打扰 int1 免打扰id int2 set
    NOTIFY_YOU_KICKED_OTHER_OFF: 36,		// 你踢出了别人 str3 被踢出用户的deviceId
    NOTIFY_QRCODE_LOGIN_ERROR: 37,		// 扫码二微码登录错误 int1 错误码
};

/*
 * 登录失败错误码
 */
var ErrorCodeLogin = {
    LOGIN_ERR_NetFailed : 0x00,     // 网络连接失败
    LOGIN_ERR_NotAvailable : 0x81,  // 不存在
    LOGIN_ERR_Error : 0x82,     // 鉴权失败
    LOGIN_ERR_Busy : 0x83,
    LOGIN_ERR_NotExist : 0x84,      // 账号不存在
    LOGIN_ERR_NotSupport : 0x85,
    LOGIN_ERR_NeedVerifycation : 0x86,
};

/*
 * 异步参数设置（获取）参数名称
 */
var CmdAppParams = {
    CAP_NavAddr : 1,		 // 导航地址
    CAP_AcpAddr : 2,		// Acp地址
    CAP_Version : 3,		// 客户端版本号
    CAP_USER_ID : 4,		// 当前登录用户id
    CAP_APP_NAME : 5,		// app名字
    CAP_ROOT_DIR : 6,       // 数据存放的根目录
    CAP_RONG_TOKEN: 7,	    // 获取融云token
    CAP_KEEP_LIVE: 8,       // 是否开启长连接 "1" 开启长连接 "0" 不开启长连接
    CAP_CVAddr: 11,			// 设置检测版本号的服务器地址（交行环境)，民生环境直接使用NAV地址
    CAP_Language: 12,		// 设置语言 （默认0中文）
    CAP_FileDownloadPath: 13,// 文件下载的存放路径

	// 以下是导航返回的参数列表
    CAP_NAV_START : 100,
    CAP_NAV_CmpAddress : 101, 
    CAP_NAV_Domain : 102,
    CAP_NAV_ServerNumber : 103,
    CAP_NAV_BaseQRUrl : 104,
    CAP_NAV_PasswordPattern : 105,
    CAP_NAV_AppCenterUrl : 106,
    CAP_NAV_ChannelUrl : 107,
    CAP_NAV_DownloadUrl : 108,
    CAP_NAV_DownloadDetailUrl : 109,
    CAP_NAV_InvitationUrl : 110,
    CAP_NAV_FaqUrl : 111,
    CAP_NAV_AgreementUrl : 112,
    CAP_NAV_CrashUrl : 113,
    CAP_NAV_RegionVersion : 114,
    CAP_NAV_PublicHistoryUrl : 115,
    CAP_NAV_GroupHistoryUrl : 116,
    CAP_NAV_WebAuthorizeUrl : 117,
    CAP_NAV_GroupAuthorizeUrl : 118,
    CAP_NAV_PublicListUrl : 119,
    CAP_NAV_NavTime : 120,
    CAP_NAV_BlockListVersion : 121,
    CAP_NAV_FriendsVersion : 122,
    CAP_NAV_EnterpriseUrl : 123,
    CAP_NAV_EnterprisePortraitUrl : 124,
    CAP_NAV_RongAppkey:125,
    CAP_NAV_RongUrl:126,
    CAP_NAV_BlinkUrl:127,
    CAP_NAV_BlinkSniff:128,

	CAP_NAV_TTTUrl:129,    // app音视频地址
	CAP_NAV_TTTWebUrl:130, // web音视频地址
	CAP_NAV_CloudRoomUrl:131,
	CAP_NAV_CloudRoomWebUrl: 132
};

//------------------------------

var GetSdkParamResult = {
    name : "CmdAppParams",
    value: "string",
};

var AllAccountsResult = [{
    id : "string 账号",
    pw : "string 密码",
    state : "number 状态",
    tmStart : "number 开始时间",
    tmEnd : "number 结束时间",
    savePW : "number 保存密码",
    autoLogin : "number 自动登录",
    portrait : "string 头像路径",
    uid : "number uid",
}];

var AppDoInitResult = {
    prev : "AppState",
    now : "AppState"
};

/**
 * 监听消息收到的数据
 * @type {{notiID: string, param1: string, param2: string, param3: string, param4: [*], obj: string}}
 */
var AddSDKListenerResult = {
    notiID : "NotifyType",
    param1 : "number",
    param2 : "number",
    param3 : "string",
    param4:["string"],
    obj : "number C++的指针"
};
