/**
 * Created by Administrator on 2017/5/17.
 */

var LoadDeptOption = {
    LDO_Dept: 1,				// 返回当前节点
    LDO_SubDepts: 1 << 1,		// 返回子部门节点
    LDO_SubEmployees: 1 << 2,	// 返回子成员节点
};
exports.LoadDeptOption = LoadDeptOption;

// 事件类型，监听需要调用BaseSdk的addSDKListener。
// 系统推送通过融云接口实现，收到消息把参数给BaseSdk的recvedPush，底层处理后会调用相应的通知
var EnterprizeListenerType = {
    NOTIFY_ENTERPRIZE_CHANGED: 1500,			// 企业通讯录变化 long1 变化的条数
    NOTIFY_ENTERPRIZE_DEPT_REMOVED: 1501,		// 企业通讯录部门被删除 long1 部门Id
    NOTIFY_ENTERPRIZE_DEPT_CHANGED: 1502,		// 企业通讯录部门变化 long1 部门Id
    NOTIFY_ENTERPRIZE_EMPL_CHANGED: 1503,		// 企业通讯录成员信息变化
};
exports.EnterprizeListenerType = EnterprizeListenerType;
