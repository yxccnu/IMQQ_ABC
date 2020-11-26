/**
 * Created by Administrator on 2017/5/17.
 */

const EnterprizeSdkNode = require("../../Windows/sdk/EnterprizeSdk.node").EnterprizeSdk;
var sdk = new EnterprizeSdkNode();


/**
 * 初始化
 */
exports.initSDKEnterprize = function () {
    sdk.initSDKEnterprize();
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
 * 获取部门的子节点
 @usrId		(long)	用户Id
 @eid		(long)	企业Id
 @deptId		(long)	部门Id (如果=0,刷新根节点）
 @check		(long)	同步监测该节点是否有更新 1=(如果从本地加载，返回结果后同时去服务器检测新版本）0=（如果从本地加载，不检测新版本）
 @opt		(long)	加载选项 LDO_Dept | LDO_SubDepts | LDO_SubEmployees
 @param     (callback) 回调返回结果 callback = function(json) { json[curDept]=当前部门; json[subDept]=子部门数组; json[subEmpl]=子成员数组;}
 */
exports.loadDept = function (usrId, eid, deptId, check, opt, callback) {
    sdk.loadDept (usrId, eid, deptId, check, opt, callback);
};

/**
 * 搜索企业通讯录
 @usrId		(long)	用户Id
 @eid		(long)	企业Id
 @key		(string)    关键字
 @param     (callback)  回调返回结果 callback = function(json) { json[empl]=成员数组; json[idList]=id翻页列表数组; }
 */
exports.searchEmployees = function (usrId, eid, key, callback) {
    sdk.searchEmployees (usrId, eid, key, callback);
};

/**
 * 通过企业通讯录id列表获取企业通讯录成员列表 (用于 searchEmployees返回结果的翻页）
 @usrId		(long)	用户Id
 @eid		(long)	企业Id
 @idList		(string)    	用户Id列表 (用逗号分割的id字符串)
 @param     (callback)  回调返回结果
 */
exports.employeeOfIdArr = function (usrId, eid, idList, callback) {
    sdk.employeeOfIdArr (usrId, eid, idList, callback);
};

/**
 * 通过企业通讯录id列表获取企业通讯录成员列表 
 @usrId		(long)	用户Id
 @eid		(long)	企业Id
 @idList		(array)    	用户Id列表 (long类型数组)
 @param     (callback)  回调返回结果 callback = function(json) { json[empl]=成员数组; }
 */
exports.employeeOfIdList = function (usrId, eid, idList, callback) {
    sdk.employeeOfIdList (usrId, eid, idList, callback);
};

/**
 * 通过pgmid列表获取企业通讯录成员列表
 @usrId		(long)	用户Id
 @eid		(long)	企业Id
 @pgmId		(long)	pgmId
 @param     (callback)  回调返回结果 callback = function(json) { json[empl]=成员数组; }
 */
exports.employeeOfPGMId = function (usrId, eid, pgmId, callback) {
    sdk.employeeOfPGMId(usrId, eid, pgmId, callback);
};

/**
 * 通过pgmid列表获取企业通讯录成员列表
 @usrId		(long)	用户Id
 @eid		(long)	企业Id
 @empId		(long)	成员id
 @check     (long)  1=如果从本地获取成功后，后台检测更新 0不检测更新
 @param     (callback)  回调返回结果 callback = function(json) { json[empl]=成员; }
 */
exports.loadEmployeeCached = function (usrId, eid, empId, check, callback) {
    sdk.loadEmployeeCached (usrId, eid, empId, check, callback);
};

/**
 * 根据成员Id和成员的路径索引 公司(0)/部门(1)/部门(2)/..., 返回路径索引所在的路径Id
 @usrId		(long)	用户Id
 @eid		(long)	企业Id
 @empId		(long)	成员id
 @pathIndex	(int)	路径索引	公司(0)/部门(1)/部门(2)/...
 @fullPath	(int)	1-返回从根节点id到当前部门的全部Id 0-只返回当前部门的Id
 @param     (callback)  回调返回结果 callback = function(arr) { arr[0]=部门Id; arr[1]... }
 */
exports.deptIdByDeptPath = function (usrId, eid, empId, pathIndex, fullPath, callback) {
    sdk.deptIdByDeptPath (usrId, eid, empId, pathIndex, fullPath, callback);
};

/**
 * 返回到当前部门以上的完整部门路径
 @usrId		(long)	用户Id
 @eid		(long)	企业Id
 @deptId		(long)	部门id
 @param     (callback)  回调返回结果 callback = function(arrId, arrName) { arrId[0]=部门Id; arrId[1]...; arrName[0]=部门名字; arrName[1]... }
 */
exports.fullPathOfDept = function (usrId, eid, deptId, callback) {
    sdk.fullPathOfDept (usrId, eid, deptId, callback);
};