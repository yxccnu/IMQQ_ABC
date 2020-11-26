/**
 * Created by Administrator on 2017/5/17.
 */

const FriendsSdkNode = require("../../Windows/sdk/FriendsSdk.node").FriendsSdk;
var sdk = new FriendsSdkNode();


/**
 * 初始化
 */
exports.initSDKFriends = function () {
    sdk.initSDKFriends();
};

/**
 * 添加监听函数，每个类型只能添加一个回调
 * @param notifyType FriendsListenerType
 * @param callback 回调函数
 */
exports.addSDKListener = function (notifyType, callback) {
    sdk.addSDKListener(notifyType, callback);
};

/**
 * 获取好友列表
 * @param callback 回调
 */
exports.takeFriends = function (callback) {
    sdk.takeFriends(callback);
};

/**
 * 获取黑名单
 * @param callback 回调
 */
exports.takeBlocks = function (callback) {
    sdk.takeBlocks(callback);
};

/**
 * 发送好友邀请
 * @param peer
 * @param selfName
 * @param reason
 * @param mobile
 * @param portrait
 * @param callback 回调参数 OnResult
 */
exports.addFriendRequest = function (peer, selfName, reason, mobile, portrait, callback) {
    sdk.addFriendRequest(peer, selfName, reason, mobile, portrait, callback)
};

/**
 *  更新好友显示名称
 * @param peer
 * @param markName
 * @param callback 回调参数 OnResult
 */
exports.updateFriend = function (peer, markName, callback) {
    sdk.updateFriend(peer, markName, callback);
};

/**
 * 接受（拒绝）好友邀请
 * @param peer
 * @param selfName
 * @param approve 0/1 接受、拒绝
 * @param callback 回调参数 OnResult
 */
exports.acceptFriend = function (peer, selfName, approve, callback) {
    sdk.acceptFriend(peer, selfName, approve, callback)
};

/**
 * 删除好友
 * @param peer
 * @param callback 回调参数 OnResult
 */
exports.deleteFriend = function (peer,  callback) {
    sdk.deleteFriend(peer, callback);
};

/**
 * 好友授权
 * @param peer
 * @param type AuthorizeFriend
 * @param callback 回调参数 OnResult
 */
exports.authorizeFriend = function (peer, type, callback) {
    sdk.authorizeFriend(peer, type, callback);
};

/**
 * 添加到黑名单
 * @param col 黑名单数组 [{peer: 1212112, name: 'aaa', mobile:'13300000001'},]
 * @param callback 回调参数 OnResult
 */
exports.addToBlockList = function (col, callback) {
    sdk.addToBlockList(col, callback);
};

/**
 * 从黑名单删除
 * @param col 黑名单数组 [{peer: 1212112, name: 'aaa', mobile:'13300000001'},]
 * @param callback 回调参数 OnResult
 */
exports.removeFromBlockList = function (col, callback) {
    sdk.removeFromBlockList(col ,callback);
};

/**
 * 加载好友通知列表, 加载后底层变成已读，下次加载看到的状态是已读
 * @param offset
 * @param limit
 * @param type LoadFriendNotificationType
 * @param callback
 */
exports.loadFriendNotifications = function (offset, limit, type, callback) {
    sdk.loadFriendNotifications(offset, limit, type, callback);
};

/**
 * 删除好友通知列表
 * @param fromid fromid = 0  删除全部
 */
exports.deleteNotifications = function (fromid) {
    sdk.deleteNotifications(fromid);
};

/**
 * 加载最近一条未接受的朋友圈请求
 * @param callback = function (json) { json.fromId = ; }
 */
exports.loadLastFriendRequestNotifications = function (callback) {
    sdk.loadLastFriendRequestNotifications (callback);
};

/**
 * 联系人是否在特权列表中
 * @param idList (number array) 联系人id列表
 * @param callback = function (json) { for (a in json) { a.id; if (a.set) 在列表中;} }
 */
exports.isPrivileged = function (idList, callback) {
    sdk.isPrivileged(idList, callback);
};

/**
 * 查询特权成员的设置
 * @param idList (string array) 联系人(oa) id列表
 * @param type (number)         1 联系人 2 OA
 * @param callback = function (json) { for (a in json) { a.usrId; a.oaId; if (a.set == 1) 设置了权限; }
 */
exports.queryPrivSet = function (idList, type, callback) {
    sdk.queryPrivSet(idList, type, callback);
};

/**
 * 设置自己特权成员的权限
 * @param set (number)          1 设置 0 取消设置
 * @param callback = function (suc) { if (suc) 设置了权限; }
 */
exports.setPrivSet = function (set, callback) {
    sdk.setPrivSet(set, callback);
};

/**
 * 获取分组成员列表
 @grpId	(long)	分组Id（0 默认分组）
 @param callback = function (arr) { if (arr == null) { 失败; } arr[0], arr[1]...; }
 */
exports.loadFavorContact = function (grpId, callback) {
    sdk.loadFavorContact(grpId, callback);
};

/**
 * 操作分组成员
 @oper  (long)  RFCO_Add = 0 RFCO_Remove = 1
 @grpId	(long)	分组Id（0 默认分组）
 @idList(array) long类型数组, 操作的成员Id列表   
 @param callback = function (suc) { if (suc) { 成功; } }
 */
exports.operFavorContact = function (oper, grpId, idList, callback) {
    sdk.operFavorContact (oper, grpId, idList, callback);
};

/**
 * 修改自己的在线状态
 @state	(int)	在线状态 当前交行 1在线 4忙碌 5离开
 @param callback = function (suc) { if (suc) { 成功; } }
 */
exports.modifyOnline = function (state, callback) {
    sdk.modifyOnline (state, callback);
};

/**
 * 从服务器获取联系人的在线状态
 @idList (array) 	联系人Id列表 (long数组)
 @param callback = function (json) { json[0].id, json[0].status, json[0].deviceType; }
 */
exports.loadFavorsOnline = function (idList, callback) {
    sdk.loadFavorsOnline (idList, callback);
};

/**
 * 判断联系人是否在常用联系人列表中
 @usrId (long) 	联系人Id列表 
 @grpId (long) 	分组Id (设置为0) 
 @param callback = function (exist) { if (exist) {}; }
 */
exports.isFavorContact = function (usrId, grpId, callback) {
    sdk.isFavorContact(usrId, grpId, callback);
};