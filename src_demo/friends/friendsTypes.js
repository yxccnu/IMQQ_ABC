/**
 * Created by Administrator on 2017/5/17.
 */

var TakeFriendsResult = [{
    id: "number id",
    markName: "string 备注名"
}];

var TakeBlocksResult = [{
    id: "number id",
    name: "string 名",
    mobile: "string 手机号"
}];


var OnResult = {
    suc: "0/1 成功、失败"
};

var LoadFriendNotificationsResult = [{
    fromId: "number",
    fromName: "string",
    isRead: "number 0/1",
    mobile: "string",
    msgid: "string",
    portrait: "string",
    reason: "string",
    status: "number",
    time: "number FriendNotifyStatus",
    type: "number FriendNotifyType",

}];


//---------------------------


var AuthorizeFriend = {
    AF_ALL: 0,				// 接收这个人的朋友圈并且让他看我的朋友圈话题
    AF_SEE_HIM_ONLY: 1,		// 接收这个人的朋友圈但不让他看我的朋友圈
    AF_SEE_ME_ONLY: 2,		// 不接收这个人的朋友圈但让他看我的朋友圈
    AF_NONE: 3,				// 不接收这个人的朋友圈且不让他看我的朋友圈
};
exports.AuthorizeFriend = AuthorizeFriend;

var LoadFriendNotificationType = {
    LFNT_ALL: 1,			// 全部加载
    LENT_UNREAD_ONLY: 2,		// 只加载未读
};
exports.LoadFriendNotificationType = LoadFriendNotificationType;

// 事件类型，监听需要调用BaseSdk的addSDKListener。
// 系统推送通过融云接口实现，收到消息把参数给BaseSdk的recvedPush，底层处理后会调用相应的通知
var FriendsListenerType = {
    NOTIFY_FRIENDS_LIST_CHANGED_NAME_CHANGE : 410,			// 好友列表发生变化（成员名字变化）p1 id, obj5 IFriend*
    NOTIFY_FRIENDS_LIST_CHANGED_ADD : 411,					// 好友列表发生变化（添加）p1 id, obj5 IFriend*
    NOTIFY_FRIENDS_LIST_CHANGED_DELETE : 412,					// 好友列表发生变化（删除）p1 id
    NOTIFY_BLOCK_LIST_CHANGED_ADD : 413,						// 黑名单列表发生变化 （添加）obj5 ICollection*
    NOTIFY_BLOCK_LIST_CHANGED_REMOVE : 414,						// 黑名单列表发生变化 （删除）obj5 ICollection*
    NOTIFY_FRIENDS_MESSAGE_ADD : 415,							// 好友通知消息 (添加） obj5 IFriendNotify*
    NOTIFY_FRIENDS_MESSAGE_CHANGED : 416,						// 好友通知消息 (改变)  0 userId obj5 IFriendNotify*
    NOTIFY_FRIENDS_MESSAGE_DELETED : 417,						// 好友通知消息 (删除)  0 userId 
    NOTIFY_FAVOR_CONTACT_LIST_CHANGED: 420,					    // 常用联系人列表发生变化 p1 分组Id
    NOTIFY_CONTACT_ONLINE_CHANGED: 421,						    // 联系人在线状态发生变化 p1 联系人Id p2 状态 str3 设备类型
};
exports.FriendsListenerType = FriendsListenerType;

// 通知状态
var FriendNotifyStatus = {
    FNS_STATUS_UNDEAL : 0,		// 未处理
    FNS_STATUS_AGREE : 1,			// 已同意
    FNS_STATUS_IGNORE : 2,		// 忽略
};
exports.FriendNotifyStatus = FriendNotifyStatus;

// 通知类型
var FriendNotifyType = {
    FNT_TYPE_RECOMMEND : 0,		// 本地联系人开通teatalk
    FNT_TYPE_APPLY_FRIEND : 1,	// 接收到邀请添加为朋友圈好友	// fromId time msgid fromName mobile portrait reason status type
    FNT_TYPE_AGREE_FRIEND : 2,	// 接收到对方同意了加为好友
    FNT_TYPE_SEND_ADD_REQUEST : 3,	// 本地发送的添加好友请求
    FNT_TYPE_SEND_AGREE_REQUEST : 4,	// 本地发送的添加好友请求
};
exports.FriendNotifyType = FriendNotifyType;
