/**
 * Created by Administrator on 2017/5/2.
 */

const OrganizeSdkNode = require("../../Windows/sdk/OrganizeSdk.node").OrganizeSdk;
var sdk = new OrganizeSdkNode();

sdk.initSDKOrganize();
/*
 * 初始化
 */
exports.initSDKOrganize = function () {
	sdk.initSDKOrganize();
};

/**
 * 添加监听函数，每个类型只能添加一个回调
 * @param notifyType OrganizeListenerType
 * @param callback 回调函数
 */
exports.addSDKListener = function (notifyType, callback) {
    sdk.addSDKListener(notifyType, callback);
};

/*
 * 获取群组列表
 */
exports.takeOrganizes = function (onResult) {
	sdk.takeOrganizes(onResult);
};

/*
 * 创建群组
 * addType OrganizeAddSetting
 */
exports.createOrganize = function (name, idList, selfName, portrait, proclamation, introduction, addType, onResult) {
    sdk.createOrganize(name, idList, selfName, portrait, proclamation, introduction, addType, onResult);
};

/*
 * 创建群成员对象
 */
exports.newOrganizeMember = function (name, portrait, id) {
	sdk.newOrganizeMember(name, portrait, id);
};

/*
 * 从本地缓存的讨论组中搜索 
 * searchType SEARCH_GROUPS_PARAM的类型组合
 */
exports.searchLocalOrganizes = function (key, searchType, offset, limit, onResult) {
	sdk.searchLocalOrganizes(key, searchType, offset, limit, onResult);
};

/*
 * Cache读取群组信息，界面UI应该直接使用该函数读取讨论组信息，以获得更快的速度
 * 如果Cache不存在，自动读取文件，如果文件不存在，自动从服务器下载
 * isSync=true, 同步读取的Cache，false异步从文件或者从服务器读取　
 * id 讨论组id, group 讨论组信息
 */
exports.fastOrganizeById = function (id, onResult) {
	sdk.fastOrganizeById(id, onResult);
};

/*
 * 群搜索
 */
 exports.organizeSearch = function (key, onResult) {
	 sdk.organizeSearch(key, onResult);
 };

 /*
 * Cache读取群组群成员信息(注意该函数只取用来显示头像的前4个,如果取全部群成员列表，不需要cache)，界面UI应该直接使用该函数读取讨论组群成员，以获得更快的速度 
 * 如果Cache不存在，自动读取文件，如果文件不存在，自动从服务器下载
 * isSync=true, 同步读取的Cache，false异步从文件或者从服务器读取　
 * id 讨论组id, members 讨论组成员
 */
 exports.fastOrganizeMembersById = function (orgID, onResult) {
	 sdk.fastOrganizeMembersById(orgID, onResult);
 };
 
 /*
 * 读取全部群成员列表 （先读取本地，本地不存在，读取服务器,不Cache)
 */
exports.allOrganizeMembersById = function (orgID, onResult) {
	 sdk.allOrganizeMembersById(orgID, onResult);
 };
 
 /*
 * 退出群组
 */
exports.quitOrganize = function (group, selfName, onResult) {
    sdk.quitOrganize(group, selfName, onResult);
 };
 
 /*
 * 踢出群组
 */
exports.kickOrganize = function (kickOrgID, kicked, kickedName, selfName, onResult) {
    sdk.kickOrganize(kickOrgID, kicked, kickedName, selfName, onResult);
 };
 
 /*
 *  多人踢出群组
 */
exports.kickOrganizeMultiple = function (kickOrgID, idKickList, nameKickList, selfName, onResult) {
    sdk.kickOrganizeMultiple(kickOrgID, idKickList, nameKickList, selfName, onResult);
 }; 
 
 /*
 * 更新群组详情
 */
exports.updateOrganizeDetail = function (name, introduction, groupPortrait, proclamation, group, selfName, onResult) {
    sdk.updateOrganizeDetail(name, introduction, groupPortrait, proclamation, group, selfName, onResult);
 }; 

/*
 * 更新群组设置
 */
exports.updateOrganizeInformType = function (group, informType, onResult) {
	 sdk.updateOrganizeInformType(group, informType, onResult);
 };
 
 /*
 * 邀请加入群组
 * toInvite <IOrganizeMember*>
 */
exports.inviteOrganize = function (group, selfName, toInvite, toInviteName, toInvitePortrait, onResult) {
    sdk.inviteOrganize(group, selfName, toInvite, toInviteName, toInvitePortrait, onResult);
 }; 

/*
 * 主动加入群组
 */
exports.enterOrganize = function (organize, selfName, onResult) {
    sdk.enterOrganize(organize, selfName, onResult);
 };
 
 /*
 * 接受别人对我的邀请
 @param from (long)         邀请人的id (从群邀请列表中的from一致) 
 @param fromName (string)   邀请人的名字 (从群邀请列表中的fromName一致) 
 @param token (string)      空字符串 ""
 @param organize (long)     群id
 @param accept (long)       1 接受 0 拒绝
 @param onResult (callback) 回调,返回是否接受成功 onResult = function (json) { 
 *                           switch (json.suc) { 
 *                               case 1: 成功; 
 *                               case 0: 失败; 
 *                               case 2: 其他平台已经接受邀请;
 *                               case 3: 其他平台已经拒绝邀请;
 */
 exports.acceptOrganizeInvite = function (from, fromName, selfName, token, organize, accept, onResult) {
	 sdk.acceptOrganizeInvite(from, fromName, selfName, token, organize, accept, onResult);
 };
 
 /*
 * 接受别人请求入群的邀请
 */
 exports.approveOrganizeRequest = function (from, fromName, selfName, token, organize, accept, onResult) {
	 sdk.approveOrganizeRequest(from, fromName, selfName, token, organize, accept, onResult);
 };
 
 /*
 * 群管理员转让
 @ newAdmin = [id1, id2,...]
 */
 exports.organizeAdminTranser = function (newAdmin, organize, status, onResult) {
	 sdk.organizeAdminTranser(newAdmin, organize, status, onResult);
 };
 
  /*
 * 群解散
 */
 exports.organizeDismiss = function (organize, onResult) {
	 sdk.organizeDismiss(organize, onResult);
 };
 
   /*
 * 更新群成员详情
 */
 exports.organizeUploadMemberDetail = function (name, portrait, oid, onResult) {
	 sdk.organizeUploadMemberDetail(name, portrait, oid, onResult);
 };
 
    /*
 * 生成群二维码
 */
 exports.buildOrganizeQRCode = function (group, selfName, onResult) {
	 sdk.buildOrganizeQRCode(group, selfName, onResult);
 };

 /*
  * 读取群组邀请(被邀请)通知列表
  * @param offset   -1 忽略
  * @param limit    -1 忽略
  * @param opt      0  忽略
  * @param onResult 回调函数 = function (json) { }
  */
 exports.loadOrganizeInviteList = function (offset, limit, opt, onResult) {
     sdk.loadOrganizeInviteList (offset, limit, opt, onResult);
 };
 
 /*
  * 清空群组邀请(被邀请)通知列表
  * @param orgId   0 忽略
  * @param fromId  0 忽略
  */
 exports.removeOrganizeInviteList = function (orgId, fromId) {
     sdk.removeOrganizeInviteList(orgId, fromId);
 };

 /*
  * 获取群组邀请(被邀请)通知列表中未读条数
  * @param onResult   回调函数 = function (count) { count long类型条数; }
  */
 exports.countUnreadOrganizeInviteList = function (onResult) {
     sdk.countUnreadOrganizeInviteList(onResult);
 };

 /*
  * 设置群组邀请(被邀请)通知为已读
  */
 exports.readOrganizeInviteList = function () {
     sdk.readOrganizeInviteList();
 };

 /*
   * 群主转移
   @param newCreator    新的群猪id (long)
   @param orgId         群id (long) 
   @param callback      回调结果 = function (suc) { if (suc) 成功; }
   */
 exports.organizeCreatorTranser = function (newCreator, orgId, callback) {
     sdk.organizeCreatorTranser(newCreator, orgId, callback);
 };

 /*
   * 设置群昵称
   @param nickName      新的群昵称
   @param orgId         群id (long) 
   @param callback      回调结果 = function (suc) { if (suc) 成功; }
   */
 exports.organizeUpdateMemberNickName = function (nickName, orgId, callback) {
     sdk.organizeUpdateMemberNickName(nickName, orgId, callback);
 };

 /*
   * 修改群成员添加方式
   @param orgId         群id (long) 
   @param set           添加方式 (OrganizeAddSetting类型)
   @param callback      回调结果 = function (suc) { if (suc) 成功; }
   */
 exports.organizeUpdateAddSetting = function (orgId, set, callback) {
     sdk.organizeUpdateAddSetting(orgId, set, callback);
 };

 /*
  * 面对面建群查询
  @param name: string         昵称 ?
  @param organize: long       群id 
  @param callback             回调结果 = function (json) { 成员列表; }
  */
 exports.F2FQueryInfo = function (name, organize, callback) {
     sdk.F2FQueryInfo(name, organize, callback);
 };

 /*
  * 面对面建群创建(加入) 
  @param key: long          建群标识 
  @param callback           回调结果 = function (orgId, status) { orgId 创建的群Id; status 人数; }
  */
 exports.F2FJoinOrg = function (key, callback) {
     sdk.F2FJoinOrg (key, callback);
 };

 /*
  * 设置群组是否显示群昵称
  @param orgId: long        群id 
  @param set                set = 1 显示昵称 0 不显示昵称
  */
 exports.setOrganizeShowNickName = function (orgId, set) {
     sdk.setOrganizeShowNickName (orgId, set);
 };

 /*
  * 获取群组是否显示群昵称
  @param orgId: long        群id 
  @param callback           回调结果 = function (orgId, set) { orgId 创建的群Id; set=1 显示昵称 0不显示昵称; }
  */
 exports.getOrganizeShowNickName = function (orgId, callback) {
     sdk.getOrganizeShowNickName(orgId, callback);
 };

 /*
   * 根据群id 和 成员id,获取成员详情
   @param orgId:    long        群id 
   @param memberId: long        成员id 
   @param callback              回调结果 = function (json) { json.member.id; }
   */
 exports.OrganizeMemberByMemberId = function (orgId, memberId, callback) {
     sdk.OrganizeMemberByMemberId (orgId, memberId, callback);
 };

 /*
  * 从本地缓存的群组中搜索 （通过匹配群名称和群成员名称）
  @param key:    string        搜索的key 
  @param callback              回调结果 = function (json) { json=搜索结果列表; }
  */
 exports.searchLocalOrgWithMembers = function (key, callback) {
     sdk.searchLocalOrgWithMembers (key, callback);
 };

 /*
  * 判断该群组是否存在，如果我在群组返回true, 如果不在群组（已经被踢出）返回false
  @param orgId:    long        群组id
  @param callback              回调结果 = function (orgId, isValid) { if (isValid)  群组orgId存在; else 已经被踢出; }
  */
 exports.isOrganizeValid = function (orgId, callback) {
     sdk.isOrganizeValid (orgId, callback);
 };

 /*
  * 设置群组功能选项, 该函数必须在initSDKOrganize()后,立刻调用
  @param flag:  int          CAP_ORG_NeedConirm : 0x01    群组添加联系人需要对方确认, 默认没有设置
  @param set    int          1 设置 0 取消
  */
 exports.setOrgOption = function (flag, set) {
     sdk.setOrgOption(flag, set);
 };