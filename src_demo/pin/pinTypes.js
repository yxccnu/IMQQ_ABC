/**
 * Created by Administrator on 2017/5/17.
 */


var PINListOption = {
    PLO_All: 0,		// 全部
    PLO_Recv: 1,	// 接收
    PLO_Send: 2,	// 发送
};
exports.PINListOption = PINListOption;

// 事件类型，监听需要调用BaseSdk的addSDKListener。
// 系统推送通过融云接口实现，收到消息把参数给BaseSdk的recvedPush，底层处理后会调用相应的通知
var PinListenerType = {
    NOTIFY_PIN_RECV_REPLY: 2300,			// PIN回复通知  long1 PINId, obj5 IPinReply*
    NOTIFY_PIN_RECV_CONFIRMED: 2301,		// PIN收到确认  long1 PINId, long2 time, str3 是否确认
    NOTIFY_PIN_RECV_ADD_RECVER: 2303,		// PIN收到添加接收者　long1 PINId, long2 fromId, str3 content
    NOTIFY_PIN_RECV_NEW_PIN: 2304,		// PIN收到新PIN		long1 PINId, obj5 INewPinObj* 对象
    NOTIFY_PIN_RECV_DEL_PIN: 2305,		// PIN收到删除PIN		long1 PINId
    NOTIFY_PIN_RECV_DEL_PIN_FROM_RECVER: 2306,		// PIN收到接受者删除PIN		long1 PINId, long2 recver
    NOTIFY_PIN_RECV_DEL_PIN_Reply: 2307,		// PIN收到回复删除		long1 PINId, long2 msgId
};
exports.PinListenerType = PinListenerType;
