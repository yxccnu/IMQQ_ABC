/**
 * Created by Administrator on 2017/6/7.
 */

const GroupSdk = require("../../Windows/sdk/GroupSdk.node").GroupSdk;
var sdk = new GroupSdk();

/**
 * 初始化
 */
exports.initSDKGroup = function() {
    sdk.initSDKGroup();
};

/**
 * 添加监听函数，每个类型只能添加一个回调
 * @param notifyType GroupListenerType
 * @param callback 回调函数
 */
exports.addSDKListener = function(notifyType, callback) {
    sdk.addSDKListener(notifyType, callback);
};

/**
 * 读取讨论组信息
 * @param groupId 讨论组id
 * @param callback fastGroupByIdResult
 */
exports.fastGroupById = function(groupId, callback) {
    sdk.fastGroupById(groupId, callback);
};

/**
 * 取讨论组成员，用于讨论组头像，只返回4个成员
 * @param groupId 讨论组id
 * @param callback fastGroupMembersByIdResult
 */
exports.fastGroupMembersById = function(groupId, callback) {
    sdk.fastGroupMembersById(groupId, callback);
};

/**
 * 取讨论组全部成员
 * @param groupId 讨论组id
 * @param callback allGroupMembersByIdResult
 */
exports.allGroupMembersById = function(groupId, callback) {
    sdk.allGroupMembersById(groupId, callback);
};

/**
 * 获取讨论组列表
 * @param callback takeGroupsResult
 */
exports.takeGroups = function(callback) {
    sdk.takeGroups(callback);
};

/**
 * 创建讨论组
 * @param name 讨论组名
 * @param idList 成员id数组
 * @param selfName 自己的名称
 * @param selfPortrait 自己的头像
 * @param selfId 自己的id
 * @param callback fastGroupByIdResult
 */
exports.createGroup = function(name, idList, selfName, selfPortrait, selfId, callback) {
    sdk.createGroup(name, idList, selfName, selfPortrait, selfId, callback);
};

/**
 * 退出讨论组
 * @param groupId 讨论组id
 * @param selfId 自己的id
 * @param selfName 自己的名称
 * @param selfPortrait 自己的头像
 * @param callback {suc: 0/1}
 */
exports.quitGroup = function(groupId, selfId, selfName, selfPortrait, callback) {
    sdk.quitGroup(groupId, selfId, selfName, selfPortrait, callback);
};

/**
 * 踢出讨论组
 * @param groupId 讨论组id
 * @param selfId 自己id
 * @param selfName 自己名称
 * @param selfPortrait 自己头像
 * @param kickId 被踢的id
 * @param kickName 被踢名称
 * @param kickPortrait 被踢头像
 * @param callback {suc: 0/1}
 */
exports.kickGroup = function(groupId, selfId, selfName, selfPortrait, kickId, kickName, kickPortrait, callback) {
    sdk.kickGroup(groupId, selfId, selfName, selfPortrait, kickId, kickName, kickPortrait, callback);
};

/**
 * 多人踢出讨论组
 * @param groupId 讨论组id
 * @param kick 被踢成员数组[{id:, name:, portrait: }, ]
 * @param selfId 自己id
 * @param selfName 自己名称
 * @param selfPortrait 自己头像
 * @param callback {suc: 0/1}
 */
exports.kickGroupMultiple = function(groupId, kick, selfId, selfName, selfPortrait, callback) {
    sdk.kickGroupMultiple(groupId, kick, selfId, selfName, selfPortrait, callback);
};

/**
 * 更新讨论组详情
 * @param groupId 讨论组id
 * @param name 讨论组名称
 * @param introduction 介绍
 * @param selfId 自己的id
 * @param selfName 自己名称
 * @param selfPortrait 自己头像
 * @param callback {suc: 0/1}
 */
exports.updateGroupDetail = function(groupId, name, introduction, selfId, selfName, selfPortrait, callback) {
    sdk.updateGroupDetail(groupId, name, introduction, selfId, selfName, selfPortrait, callback);
};

/**
 * 更新讨论组设置
 * @param groupId 讨论组Id
 * @param informType GroupInformType
 * @param callback {suc: 0/1}
 */
exports.updateGroupInformType = function(groupId, informType, callback) {
    sdk.updateGroupInformType(groupId, informType, callback);
};

/**
 * 邀请加入讨论组
 * @param groupId 讨论组id
 * @param invite 邀请成员数组[{id:, name:, portrait: }, ]
 * @param selfId 自己id
 * @param selfName 自己名称
 * @param selfPortrait 自己头像
 * @param callback {suc: 0/1}
 */
exports.inviteGroup = function(groupId, invite, selfId, selfName, selfPortrait, callback) {
    sdk.inviteGroup(groupId, invite, selfId, selfName, selfPortrait, callback);
};

/**
 * 生成讨论组二维码
 * @param groupId 讨论组id
 * @param selfName 自己名称
 * @param callback buildGroupQRCodeResult
 */
exports.buildGroupQRCode = function(groupId, selfName, callback) {
    sdk.buildGroupQRCode(groupId, selfName, callback);
};

/**
 * 从本地缓存的讨论组中搜索
 * @param key 搜索关键字
 * @param searchType SEARCH_GROUPS_PARAM的类型组合
 * @param offset 偏移量
 * @param limit 返回最大条数
 * @param callback takeGroupsResult
 */
exports.searchLocalGroups = function(key, searchType, offset, limit, callback) {
    sdk.searchLocalGroups(key, searchType, offset, limit, callback);
};

/**
 * 从本地缓存的讨论组中搜索(通过匹配讨论组名称和讨论组成员名称)
 * @param key 搜索关键字
 * @param callback takeGroupsResult
 */
exports.searchLocalGroupWithMembers = function(key, callback) {
    sdk.searchLocalGroupWithMembers(key, callback);
};

/**
 * 检测是否是合法的讨论组Id
 * @param groupId 讨论组id
 * @param callback = function (isGroup) { if (isGroup) 是讨论组id; }
 */
exports.isValidGroup = function(groupId, callback) {
    sdk.isValidGroup(groupId, callback);
};

/**
 * 更新讨论组昵称
 * @param groupId (long) 讨论组id
 * @param nickName (string) 自己的昵称
 * @param callback = function (suc) { if (suc) 更新成功; }
 */
exports.updateNickName = function(groupId, nickName, callback) {
    sdk.updateNickName(groupId, nickName, callback);
};
