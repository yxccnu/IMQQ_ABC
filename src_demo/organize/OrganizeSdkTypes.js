/**
 * Created by Administrator on 2017/5/4.
 */
 
/*
 * 通知定义
 */
var OrganizeListenerType = {
	NOTIFY_ORGANIZE_CHANGED : 700,			// 群变化通知  long1 group-id, obj5 IGroup*
	NOTIFY_ORGANIZE_LIST_CHANGED_ADD : 701,	// 群列表变化通知-添加 p0=id  p4=IOrganizeListItem*
	NOTIFY_ORGANIZE_LIST_CHANGED_DELETE : 702, // 群列表变化通知-删除 p0=id  
	NOTIFY_ORGANIZE_INFORM_TYPE_CHANGED : 703,	// 群组通知方式变化 p0=id p1=informType
	NOTIFY_ORGANIZE_CREATOR_CHANGED : 704,		// 群组创建者发生变化 p0=id p1=sourceid
	NOTIFY_ORGANIZE_MEMBERS_CHANGED : 705,		// 群组成员发生变化 p0=id

	NOTIFY_ORGANIZE_MESSAGE : 706,				// 群组推送的通知消息（界面调用写入消息列表）obj5 IOrganizeMessage*

	NOTIFY_ORGANIZE_REQUEST_ADD : 709,			// 群邀请状态变化通知-添加 p0=orgId p4=IOrganizeInviteItem*
	NOTIFY_ORGANIZE_REQUEST_CHANGED: 710,		// 群邀请状态变化通知-状态变化 p0=orgId
	NOTIFY_ORGANIZE_REQUEST_READED: 711,		    // 群邀请状态已读
	NOTIFY_ORGANIZE_REQUEST_REMOVED: 712,		// 群邀请状态变化通知-删除 p0=orgId p1=fromId
};
exports.OrganizeListenerType = OrganizeListenerType;

var ORGANIZE_INVITE_STATE = {					// 群组邀请的接受状态
	ORGANIZE_INVITE_STATE_WAITING_ACCEPT : 1,	// 等待接受
	ORGANIZE_INVITE_STATE_ACCEPTED : 2,		// 已经接受
	ORGANIZE_INVITE_STATE_REFUSED : 3,			// 已经拒绝
};
exports.ORGANIZE_INVITE_STATE = ORGANIZE_INVITE_STATE;

/*
 * 接受别人对我的邀请 的操作结果类型
 */
var ACCEPT_ORGANIZE_RESULT = {
	AOR_SUC : 1,					// 操作成功
	AOR_FAILED : 0,				// 操作失败
	AOR_OTHER_PLATFORM_OPER_ACCEPT : 2,	// 操作已经在其他平台完成 (接受邀请）
	AOR_OTHER_PLATFORM_OPER_REJECT: 3,	// 操作已经在其他平台完成 (拒绝邀请）
	AOR_ORGANIZE_DISMISSED: 4,			// 群组已经解散	

};
exports.ACCEPT_ORGANIZE_RESULT = ACCEPT_ORGANIZE_RESULT;


/*
 * 管理权转让方式
 */
var ORGANIZE_ADMIN_TRANSFER = {
	OAT_NEW_ADMIN : 0,			// 新管理员
	OAT_CANCEL_ADMIN : 1,			// 撤销管理员
};
exports.ORGANIZE_ADMIN_TRANSFER = ORGANIZE_ADMIN_TRANSFER;

/*
 * searchLocalOrganizes 预定义的搜索类型
 */
var SEARCH_ORGANIZES_PARAM = {
	SOP_NAME : 0x01,
	SOP_NAME_PINYIN : 0x01 << 1,
};
exports.SEARCH_ORGANIZES_PARAM = SEARCH_ORGANIZES_PARAM;


var OrganizeAddSetting = {
    OAS_AdminOnly : 0,			// 仅管理员可添加
	OAS_ANYONE : 1,				// 任何人都可以添加
};
exports.OrganizeAddSetting = OrganizeAddSetting;

var OrganizeFuncType = {
    OFT_Normal : 0,				// 普通群
	OFT_Depart : 3,				// 部门群
	OFT_Meeting : 4,				// 会议群
};
exports.OrganizeFuncType = OrganizeFuncType;

var OrganizeMessageType = {
    GCT_OrganizeJoined : 0x1, // organizeId fromId fromName organizeName 被邀请加入群组
    GCT_OrganizeInforChanged_Name : 0x2,			// organizeId fromId fromName organizeName  群名称变化
    GCT_OrganizeInforChanged_Proclamation : 0x3,	// organizeId fromId fromName organizeName  群简介变化
    GCT_OrganizeMemberAdded : 0x04,				// organizeId fromId fromName members       群成员加入
    GCT_OrganizeMemberRemoved : 0x05,				// organizeId fromId fromName members   群成员踢出
    GCT_OrganizeMemberLeave : 0x06,				// organizeId fromId fromName               群成员退出
    GCT_OrganizeIAmJoined : 0x07,					// organizeId fromId 
    GCT_OrganizeRejected : 0x08,					// organizeId fromId approvedId rejectId    邀请被拒绝
    GCT_OrganizeDimiss : 0x09,					// organizeId fromId                        群解散
    GCT_OrganizeNoJoined : 0x0A,					// organizeId fromId fromName               群邀请拒绝
    GCT_OrganizeEner : 0x0B,						// organizeId fromId fromName               请求加入群
    GCT_OrganizeAdminChanged_Assign : 0x0C,		// organizeId fromId approvedId(被指定为管理员)    群管理员被指定
    GCT_OrganizeAdminChanged_Cancel: 0x0D,		// organizeId fromId approvedId(被撤销的管理员）    群管理员被撤销
    GCT_OrganizeIAmKicked : 0x0E,					// organizeId fromId fromName 我被踢出群
    GCT_OrganizeILeave: 0x0F,					// organizeId fromId fromName 我退出群
    GCT_OrganizeCreatorChanged_Assign: 0x10,		// organizeId fromId members(被指定为群主)
};

